'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n/types';

function switchLocale(pathname: string, targetLocale: Locale) {
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] === 'ar' || segments[0] === 'en') {
    segments[0] = targetLocale;
  } else {
    segments.unshift(targetLocale);
  }

  return `/${segments.join('/')}`;
}

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const nextLocale: Locale = locale === 'ar' ? 'en' : 'ar';

  return (
    <Link
      href={switchLocale(pathname, nextLocale)}
      className="rounded-full border border-champagne-warm/40 px-3 py-2 text-sm font-semibold text-ink transition-colors hover:border-honey hover:bg-champagne-pale"
    >
      {locale === 'ar' ? 'EN' : 'عربي'}
    </Link>
  );
}
