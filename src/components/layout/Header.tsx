import Link from 'next/link';
import { HeaderCartLink } from '@/components/commerce/HeaderCartLink';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { MobileNavigation } from '@/components/layout/MobileNavigation';
import { Container } from '@/components/ui/Container';
import { localizedPath, type Dictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/types';

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary['header'];
};

export function Header({ locale, dictionary }: HeaderProps) {
  const navItems = [
    { href: '/shop', label: dictionary.nav.shop },
    { href: '/luxury-experience', label: dictionary.nav.experience },
    { href: '/subscription', label: dictionary.nav.subscription },
    { href: '/wholesale', label: dictionary.nav.wholesale },
    { href: '/contact', label: dictionary.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-champagne/60 bg-cream/95 backdrop-blur-xl">
      <div className="border-b border-champagne/50 bg-champagne-pale text-ink-soft">
        <Container className="flex min-h-9 items-center justify-center text-center text-[11px] font-medium tracking-[0.12em]">
          <span>
            {dictionary.announcement}
          </span>
        </Container>
      </div>
      <Container className="flex min-h-24 items-center justify-between gap-5">
        <Link href={localizedPath(locale, '/')} className="shrink-0">
          <span className="block font-logo text-3xl font-black tracking-[0.04em] text-ink sm:text-4xl sm:tracking-[0.06em] lg:text-5xl">
            DEEBAJ
          </span>
          <span className="block text-center text-sm font-semibold uppercase tracking-[0.2em] text-honey sm:text-base sm:tracking-[0.24em] lg:text-lg">
            ROYAL
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

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <HeaderCartLink locale={locale} label={dictionary.cart} />
          <MobileNavigation locale={locale} items={navItems} labels={{ menu: dictionary.menu, close: dictionary.close }} />
        </div>
      </Container>
    </header>
  );
}
