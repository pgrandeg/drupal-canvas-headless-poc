import { fetchPage, isPageRedirect } from '@drupal-canvas/headless-next';
import { NextRequest } from 'next/server';
import { isLocale } from '@/lib/i18n';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function toDrupalPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const locale = segments[0];
  if (!isLocale(locale)) return pathname || '/';

  const suffix = segments.slice(1);
  const path = suffix.length ? `/${suffix.join('/')}` : '/';
  return locale === 'en' ? path : `/${locale}${path === '/' ? '' : path}`;
}

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.searchParams.get('path') || '/en';
  if (!pathname.startsWith('/') || pathname.startsWith('//')) {
    return Response.json({ translations: [] }, { status: 400 });
  }

  const page = await fetchPage(toDrupalPath(pathname));
  if (!page || isPageRedirect(page)) {
    return Response.json({ translations: [] });
  }

  return Response.json({ translations: page.route.translations });
}
