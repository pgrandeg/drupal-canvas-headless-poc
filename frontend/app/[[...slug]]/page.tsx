import CanvasComponentTree from '@drupal-canvas/headless-next/CanvasComponentTree';
import {
  fetchPage,
  isPageRedirect,
  toNextMetadata,
} from '@drupal-canvas/headless-next';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound, permanentRedirect, redirect } from 'next/navigation';
import { cache } from 'react';
import { canvasPagePath, getCanvasPages } from '@/lib/content';

export const dynamic = 'force-dynamic';

interface CatchAllPageProps {
  params: Promise<{ slug?: string[] }>;
}

const getPage = cache((path: string) => fetchPage(path));

async function getPath(params: CatchAllPageProps['params']) {
  const { slug } = await params;
  return `/${(slug ?? []).map(encodeURIComponent).join('/')}`;
}

export async function generateMetadata({
  params,
}: CatchAllPageProps): Promise<Metadata> {
  const path = await getPath(params);
  if (path === '/') {
    return {
      title: 'Canvas pages',
      description: 'Canvas pages available in Drupal.',
    };
  }

  const page = await getPage(path);
  return page && !isPageRedirect(page) ? toNextMetadata(page.head) : {};
}

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const path = await getPath(params);
  if (path === '/') {
    const pages = (await getCanvasPages())
      .filter((page) => page.status)
      .sort((first, second) => first.title.localeCompare(second.title));

    return (
      <section className="py-8">
        <header className="mb-8 max-w-2xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#0050A4]">
            NTT DATA Spain · Drupal Canvas Headless
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950">
            Canvas pages
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            These links are loaded dynamically from the published Canvas pages
            in Drupal.
          </p>
        </header>

        {pages.length === 0 ? (
          <p className="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-slate-600">
            No published Canvas pages are available yet.
          </p>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {pages.map((page) => {
              const pagePath = canvasPagePath(page);

              return (
                <li key={page.id}>
                  <Link
                    href={pagePath}
                    className="block rounded-xl border border-[#D7E6F3] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#00A9E0] hover:shadow-md"
                  >
                    <span className="text-lg font-semibold text-slate-950">
                      {page.title}
                    </span>
                    <span className="mt-2 block text-sm text-slate-500">
                      {pagePath}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    );
  }

  const page = await getPage(path);

  if (!page) {
    notFound();
  }

  if (isPageRedirect(page)) {
    const { statusCode, url } = page.redirect;
    if (statusCode === 301 || statusCode === 308) {
      permanentRedirect(url);
    }
    redirect(url);
  }

  return <CanvasComponentTree tree={page.content} context={page.context} />;
}
