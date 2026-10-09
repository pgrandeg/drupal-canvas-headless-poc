import { NextRequest } from 'next/server';
import { copyResponse, drupalApiUrl, requestLocale } from '@/lib/drupal-api';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface RouteContext {
  params: Promise<{ formId: string }>;
}

async function forward(
  request: NextRequest,
  formId: string,
  method: 'GET' | 'POST',
) {
  if (!/^[a-z0-9_]+$/.test(formId)) {
    return Response.json({ error: 'Invalid contact form identifier.' }, { status: 400 });
  }

  const locale = requestLocale(request.nextUrl.searchParams.get('lang'));
  const url = drupalApiUrl(`/api/canvas/contact/${formId}`, locale);
  const headers: HeadersInit = {
    Accept: 'application/json',
    'Accept-Language': locale,
  };
  const init: RequestInit = { method, headers, cache: 'no-store' };

  if (method === 'POST') {
    headers['content-type'] = 'application/json';
    init.body = await request.text();
  }

  return copyResponse(await fetch(url, init));
}

export async function GET(request: NextRequest, context: RouteContext) {
  const { formId } = await context.params;
  return forward(request, formId, 'GET');
}

export async function POST(request: NextRequest, context: RouteContext) {
  const { formId } = await context.params;
  return forward(request, formId, 'POST');
}
