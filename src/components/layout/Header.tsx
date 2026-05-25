import Link from 'next/link';
import { Container } from '@/components/ui/Container';

type HeaderProps = {
  locale: string;
};

const navItems = [
  { href: '/shop', label: 'Shop' },
  { href: '/luxury-experience', label: 'Experience' },
  { href: '/subscription', label: 'Subscription' },
  { href: '/wholesale', label: 'Wholesale' },
  { href: '/contact', label: 'Contact' },
];

function localizedPath(locale: string, href: string) {
  return href === '/' ? `/${locale}` : `/${locale}${href}`;
}

export function Header({ locale }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-sand-200/70 bg-cream/95 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href={localizedPath(locale, '/')} className="shrink-0">
          <span className="block font-logo text-lg tracking-[0.32em] text-ink">
            DEEBAJ
          </span>
          <span className="block text-xs uppercase tracking-[0.34em] text-honey">
            Royal
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 text-sm text-ink-soft lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={localizedPath(locale, item.href)}
              className="transition-colors hover:text-honey"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={localizedPath(locale, '/checkout')}
          className="rounded-full border border-honey/30 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-honey hover:bg-cream-soft"
        >
          Checkout
        </Link>
      </Container>
    </header>
  );
}
