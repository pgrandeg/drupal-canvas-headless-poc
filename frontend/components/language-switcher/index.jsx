'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DEFAULT_LOCALE, localizedPath, SUPPORTED_LOCALES } from '@/lib/i18n';

const labels = {
  en: 'EN',
  es: 'ES',
};

const translationPath = (translation) => {
  if (translation.external || !translation.url) return null;

  const rawPath = translation.url.split(/[?#]/)[0] || '/';
  const prefix = `/${translation.langcode}`;
  const suffix =
    translation.langcode === 'en'
      ? rawPath
      : rawPath === prefix
        ? ''
        : rawPath.startsWith(`${prefix}/`)
          ? rawPath.slice(prefix.length)
          : rawPath;

  return `/${translation.langcode}${suffix === '/' ? '' : suffix}`;
};

const LanguageSwitcher = () => {
  const pathname = usePathname() || `/${DEFAULT_LOCALE}`;
  const currentLocale = pathname.split('/')[1];
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/canvas/translations?path=${encodeURIComponent(pathname)}`, {
      signal: controller.signal,
    })
      .then((response) => (response.ok ? response.json() : { translations: [] }))
      .then((payload) => setTranslations(payload.translations || []))
      .catch((reason) => {
        if (reason.name !== 'AbortError') setTranslations([]);
      });

    return () => controller.abort();
  }, [pathname]);

  return (
    <nav aria-label="Language" className="flex items-center gap-1 text-sm">
      {SUPPORTED_LOCALES.map((locale) => {
        const active = currentLocale === locale;
        const translation = translations?.find((item) => item.langcode === locale);
        const href = translation?.translationAvailable
          ? translationPath(translation)
          : translations === null
            ? localizedPath(pathname, locale)
            : active
              ? localizedPath(pathname, locale)
              : null;

        return (
          href ? (
            <Link
              key={locale}
              href={href}
              aria-current={active ? 'page' : undefined}
              className={`rounded-full px-2.5 py-1 font-semibold no-underline transition ${
                active
                  ? 'bg-white text-[#0050A4]'
                  : 'text-white/80 hover:bg-white/15 hover:text-white'
              }`}
            >
              {labels[locale]}
            </Link>
          ) : (
            <span key={locale} aria-disabled="true" className="rounded-full px-2.5 py-1 font-semibold text-white/40">
              {labels[locale]}
            </span>
          )
        );
      })}
    </nav>
  );
};

export default LanguageSwitcher;
