<?php

namespace Drupal\canvas_headless_api\Controller;

use Drupal\contact\MessageInterface;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Flood\FloodInterface;
use Drupal\contact\MailHandlerInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;
use Drupal\views\Views;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * JSON endpoints consumed by reusable headless Canvas components.
 */
final class HeadlessApiController extends ControllerBase {

  use StringTranslationTrait;

  public function __construct(
    private readonly FloodInterface $flood,
    private readonly MailHandlerInterface $mailHandler,
  ) {}

  public static function create(ContainerInterface $container): static {
    return new static(
      $container->get('flood'),
      $container->get('contact.mail_handler'),
    );
  }

  /**
   * Executes a configured Views display and returns its rows as JSON.
   */
  public function view(string $view_id, string $display_id, Request $request): JsonResponse {
    $view = Views::getView($view_id);
    if (!$view || !$view->setDisplay($display_id)) {
      return $this->error('The requested view display does not exist.', 404);
    }

    if (!$view->access($display_id)) {
      return $this->error('You do not have access to this view.', 403);
    }

    $limit = min(100, max(1, (int) $request->query->get('limit', 20)));
    $offset = max(0, (int) $request->query->get('offset', 0));
    $view->setItemsPerPage($limit);
    $view->setCurrentPage((int) floor($offset / $limit));

    if (!$view->execute($display_id)) {
      return $this->error('The requested view could not be executed.', 400);
    }

    $items = [];
    foreach ($view->result as $row) {
      $item = [
        'id' => isset($row->_entity) && $row->_entity ? (string) $row->_entity->id() : (string) $row->index,
        'type' => isset($row->_entity) && $row->_entity ? $row->_entity->getEntityTypeId() : NULL,
        'fields' => [],
      ];

      foreach ($view->field as $field_id => $handler) {
        $value = $handler->getValue($row);
        $item['fields'][$field_id] = $this->normalizeValue($value);
      }

      $items[] = $item;
    }

    return new JsonResponse([
      'view' => $view_id,
      'display' => $display_id,
      'items' => $items,
      'count' => count($items),
      'total' => isset($view->total_rows) ? (int) $view->total_rows : count($items),
      'limit' => $limit,
      'offset' => $offset,
    ]);
  }

  /**
   * Returns a small form descriptor or sends a Drupal contact message.
   */
  public function contact(string $form_id, Request $request): JsonResponse {
    $contact_form = $this->entityTypeManager()->getStorage('contact_form')->load($form_id);
    if (!$contact_form) {
      return $this->error('The requested contact form does not exist.', 404);
    }

    if (!$contact_form->access('view')) {
      return $this->error('You do not have access to this contact form.', 403);
    }

    if ($request->isMethod('GET')) {
      return new JsonResponse([
        'id' => $contact_form->id(),
        'label' => $contact_form->label(),
        'message' => $contact_form->getMessage(),
        'fields' => [
          'name' => ['type' => 'text', 'required' => TRUE],
          'mail' => ['type' => 'email', 'required' => TRUE],
          'subject' => ['type' => 'text', 'required' => TRUE],
          'message' => ['type' => 'textarea', 'required' => TRUE],
        ],
      ]);
    }

    $payload = json_decode($request->getContent(), TRUE);
    if (!is_array($payload)) {
      return $this->error('The request body must be JSON.', 400);
    }

    $data = [];
    foreach (['name', 'mail', 'subject', 'message'] as $field) {
      $value = trim((string) ($payload[$field] ?? ''));
      if ($value === '') {
        return $this->error(sprintf('The field "%s" is required.', $field), 400);
      }
      $data[$field] = $value;
    }

    if (!filter_var($data['mail'], FILTER_VALIDATE_EMAIL)) {
      return $this->error('The email address is invalid.', 400);
    }

    $settings = $this->config('contact.settings');
    $limit = (int) $settings->get('flood.limit');
    $interval = (int) $settings->get('flood.interval');
    if (!$this->flood->isAllowed('contact', $limit, $interval)) {
      return $this->error('Too many messages. Try again later.', 429);
    }

    /** @var \Drupal\contact\MessageInterface $message */
    $message = $this->entityTypeManager()->getStorage('contact_message')->create([
      'contact_form' => $contact_form->id(),
      'name' => $data['name'],
      'mail' => $data['mail'],
      'subject' => $data['subject'],
      'message' => $data['message'],
      'langcode' => $this->languageManager()->getCurrentLanguage()->getId(),
    ]);

    $message->save();
    $this->mailHandler->sendMailMessages($message, $this->currentUser());
    $this->flood->register('contact', $interval);

    return new JsonResponse([
      'success' => TRUE,
      'message' => $contact_form->getMessage() ?: $this->t('Your message has been sent.'),
    ], 201);
  }

  private function normalizeValue(mixed $value): mixed {
    if (is_scalar($value) || $value === NULL) {
      return $value;
    }

    if (is_array($value)) {
      $normalized = [];
      foreach ($value as $key => $item) {
        $normalized[$key] = $this->normalizeValue($item);
      }
      return $normalized;
    }

    return (string) $value;
  }

  private function error(string $message, int $status): JsonResponse {
    return new JsonResponse(['error' => $message], $status);
  }

}
