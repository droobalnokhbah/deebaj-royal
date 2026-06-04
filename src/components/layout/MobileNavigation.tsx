'use client';

import Link from 'next/link';
import { useState } from 'react';

type NavItem = {
  href: string;
  label: string;
  labelEn: string;
};

type MobileNavigationProps = {
  locale: string;
  items: NavItem[];
};

function localizedPath(locale: string, href: string) {
  return href === '/' ? `/${locale}` : `/${locale}${href}`;
}

export function MobileNavigation({ locale, items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isArabic = locale === 'ar';

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
        className="rounded-full border border-honey/25 px-4 py-2 text-sm font-semibold text-ink"
      >
        {isArabic ? 'القائمة' : 'Menu'}
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-4 top-28 z-50 rounded-[2rem] border border-gold/20 bg-cream p-5 shadow-[0_30px_80px_rgba(61,38,20,0.18)]"
        >
          <div className="mb-5 flex items-center justify-between border-b border-sand-200 pb-4">
            <p className="font-logo text-sm tracking-[0.32em] text-honey">
              D E E B A J
            </p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-cream-soft px-3 py-1 text-sm text-ink"
            >
              {isArabic ? 'إغلاق' : 'Close'}
            </button>
          </div>

          <nav className="grid gap-2" aria-label="Mobile navigation">
            {items.map((item) => (
              <Link
                key={item.href}
                href={localizedPath(locale, item.href)}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-4 text-base font-medium text-ink transition-colors hover:bg-cream-soft"
              >
                {isArabic ? item.label : item.labelEn}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
