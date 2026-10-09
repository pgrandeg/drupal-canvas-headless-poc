import { NextResponse, type NextRequest } from 'next/server';
import { applyCanvasHeaders } from '@drupal-canvas/headless-next/middleware';

const localizedPath = /^\/(?:en|es)(?:\/|$)/;

function isFrontendDocument(pathname: string): boolean {
  return (
    pathname !== '/' &&
    !pathname.startsWith('/api/') &&
    !pathname.startsWith('/_next/') &&
    pathname !== '/favicon.ico' &&
    !pathname.includes('.')
  );
}

/**
 * Keeps Canvas's canonical, unprefixed Drupal paths working while public
 * navigation uses explicit language prefixes.
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const rewrittenUrl = request.nextUrl.clone();
  rewrittenUrl.pathname = `/en${pathname}`;
  const response = localizedPath.test(pathname) || !isFrontendDocument(pathname)
    ? NextResponse.next()
    : NextResponse.rewrite(rewrittenUrl);

  return applyCanvasHeaders(request, response);
}
