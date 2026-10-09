# Canvas components

The component directory is intentionally flat because Drupal Canvas discovers
each component directly below the configured component directory.

- `aletheia-*`: generated wrappers around the Aletheia Design System. Do not
  edit them manually; regenerate them with `npm run aletheia:generate`.
- Existing unprefixed components: project components already registered in
  Drupal. Their machine names are kept stable for existing Canvas content.
- New project components should use the `custom-*` prefix.

Shared Aletheia runtime code lives in `lib/aletheia/`. Shared Drupal/Canvas
integration code belongs in `lib/drupal/` or `lib/canvas/`.
