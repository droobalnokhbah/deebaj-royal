'use client';

import Link from 'next/link';
import { selectCartItemCount, useCartStore } from '@/lib/cart-store';
import { localizedPath } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/types';

type HeaderCartLinkProps = {
  locale: Locale;
  label: string;
};

export function HeaderCartLink({ locale, label }: HeaderCartLinkProps) {
  const itemCount = useCartStore(selectCartItemCount);

  return (
    <Link
      href={localizedPath(locale, '/checkout')}
      className="relative inline-flex rounded-full border border-champagne-warm/40 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-honey hover:bg-champagne-pale"
    >
      {label}
      {itemCount > 0 && (
        <span className="absolute -left-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-caramel-deep px-1.5 text-xs font-semibold text-cream">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
