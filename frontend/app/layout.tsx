import { CanvasRuntime } from '@drupal-canvas/headless-next/CanvasRuntime';
import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { DraftIndicator } from '../components/draft-indicator';
import Footer from '../components/footer';
import Header from '../components/header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Canvas Headless — Next.js',
  description: 'A minimal Drupal Canvas headless frontend.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <CanvasRuntime>
          <DraftIndicator />
          <div className="flex min-h-screen flex-col bg-slate-50">
            <Header
              logo={
                <Link
                  href="/"
                  className="font-semibold text-slate-950 no-underline"
                >
                  Drupal Canvas Demo
                </Link>
              }
              menu={
                <nav aria-label="Main navigation">
                  <Link
                    href="/"
                    className="text-sm font-medium text-slate-700 underline-offset-4 hover:underline"
                  >
                    Canvas pages
                  </Link>
                </nav>
              }
            />

            <main className="mx-auto flex w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
              <div className="w-full">{children}</div>
            </main>

            <Footer
              text={
                <span className="text-slate-600">
                  Drupal Canvas Headless demo
                </span>
              }
            />
          </div>
        </CanvasRuntime>
      </body>
    </html>
  );
}
