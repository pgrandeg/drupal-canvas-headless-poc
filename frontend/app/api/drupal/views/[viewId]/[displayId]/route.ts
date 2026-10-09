import { NextRequest } from 'next/server';
import { copyResponse, drupalApiUrl, requestLocale } from '@/lib/drupal-api';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface RouteContext {
  params: Promise<{ viewId: string; displayId: string }>;
}

export async function GET(request: NextRequest, { params }: RouteContext) {
  const { viewId, displayId } = await params;
  if (!/^[a-z0-9_]+$/.test(viewId) || !/^[a-z0-9_]+$/.test(displayId)) {
    return Response.json({ error: 'Invalid view identifier.' }, { status: 400 });
  }

  const locale = requestLocale(request.nextUrl.searchParams.get('lang'));
  const query = new URLSearchParams(request.nextUrl.searchParams);
  query.delete('lang');
  const url = drupalApiUrl(
    `/api/canvas/views/${viewId}/${displayId}`,
    locale,
  );
  url.search = query.toString();

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'Accept-Language': locale,
    },
    cache: 'no-store',
  });

  return copyResponse(response);
}
