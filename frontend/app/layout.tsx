import { CanvasRuntime } from '@drupal-canvas/headless-next/CanvasRuntime';
import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { DraftIndicator } from '../components/draft-indicator';
import Footer from '../components/footer';
import Header from '../components/header';
import NttDataLogo from '../components/ntt-data-logo';
import './globals.css';

export const metadata: Metadata = {
  title: 'Canvas Headless — Next.js',
  description: 'A minimal Drupal Canvas headless frontend.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-[#EEF5FB]">
        <CanvasRuntime>
          <DraftIndicator />
          <div className="flex min-h-screen flex-col bg-slate-50">
            <Header
              logo={
                <Link
                  href="/"
                  className="flex items-center gap-3 no-underline"
                >
                  <NttDataLogo />
                  <span className="hidden whitespace-nowrap border-l border-white/30 pl-3 text-sm font-medium text-white/85 sm:inline">
                    Canvas Headless Lab · Spain
                  </span>
                </Link>
              }
              menu={
                <nav aria-label="Main navigation">
                  <Link
                    href="/"
                    className="rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm font-semibold text-white no-underline shadow-sm transition hover:bg-white/20"
                  >
                    Canvas pages
                  </Link>
                </nav>
              }
            />

            <main className="mx-auto flex w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
              <div className="w-full">{children}</div>
            </main>

            <Footer
              text={
                <span className="text-white">
                  NTT DATA Spain · Drupal Canvas Headless demo
                </span>
              }
            />
          </div>
        </CanvasRuntime>
      </body>
    </html>
  );
}
