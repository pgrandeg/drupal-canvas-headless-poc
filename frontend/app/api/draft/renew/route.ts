import { createDraftRouteHandlers } from "@drupal-canvas/headless-next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

/**
 * Renews the draft session in place from a fresh assertion (JSON body
 * `{assertion}`).
 */
const renewHandler = createDraftRouteHandlers().draftRenew.POST;

export async function POST(request: Request) {
  const response = await renewHandler(request);
  response.headers.set('Cache-Control', 'no-store, max-age=0');
  return response;
}
