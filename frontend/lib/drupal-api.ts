import { DEFAULT_LOCALE, isLocale, type Locale } from '@/lib/i18n';

export function requestLocale(value: string | null): Locale {
  return value && isLocale(value) ? value : DEFAULT_LOCALE;
}

export function drupalApiUrl(path: string, locale: Locale): URL {
  const baseUrl = process.env.CANVAS_SITE_URL;
  if (!baseUrl) {
    throw new Error('CANVAS_SITE_URL is not configured.');
  }

  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return new URL(`${prefix}${path}`, baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`);
}

export function copyResponse(response: Response): Response {
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: {
      'content-type': response.headers.get('content-type') || 'application/json',
      'cache-control': 'no-store',
    },
  });
}
