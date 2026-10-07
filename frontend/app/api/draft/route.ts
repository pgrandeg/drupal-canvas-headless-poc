import { createDraftRouteHandlers } from "@drupal-canvas/headless-next";

// Preview activation exchanges a single-use assertion and must never be
// served from a cached GET response.
export const dynamic = "force-dynamic";
export const revalidate = 0;

/**
 * Enables draft mode from a signed Drupal preview assertion
 * (`?assertion=<jwt>`). Configuration comes from the environment
 * (CANVAS_SITE_URL; see .env.example).
 */
const draftHandler = createDraftRouteHandlers().draft.GET;

export async function GET(request: Request) {
  const response = await draftHandler(request);
  response.headers.set('Cache-Control', 'no-store, max-age=0');
  return response;
}
