import Link from 'next/link';
import { MobileNavigation } from '@/components/layout/MobileNavigation';
import { Container } from '@/components/ui/Container';

type HeaderProps = {
  locale: string;
};

const navItems = [
  { href: '/shop', label: 'المنتجات', labelEn: 'Products' },
  { href: '/luxury-experience', label: 'التجربة', labelEn: 'Experience' },
  { href: '/subscription', label: 'الاشتراكات', labelEn: 'Subscriptions' },
  { href: '/wholesale', label: 'للشركات', labelEn: 'Business' },
  { href: '/contact', label: 'تواصل', labelEn: 'Contact' },
];

function localizedPath(locale: string, href: string) {
  return href === '/' ? `/${locale}` : `/${locale}${href}`;
}

export function Header({ locale }: HeaderProps) {
  const isArabic = locale === 'ar';

  return (
    <header className="sticky top-0 z-40 border-b border-champagne/60 bg-cream/95 backdrop-blur-xl">
      <div className="border-b border-champagne/50 bg-champagne-pale text-ink-soft">
        <Container className="flex min-h-9 items-center justify-center text-center text-[11px] font-medium tracking-[0.12em]">
          <span>
            {isArabic
              ? 'شحن مجاني فوق ٢٠٠ ريال · ضمان رضا ١٤ يوم · تجربة سعودية فاخرة'
              : 'Free shipping over 200 SAR · 14-day satisfaction guarantee · Saudi luxury care'}
          </span>
        </Container>
      </div>
      <Container className="flex min-h-20 items-center justify-between gap-5">
        <Link href={localizedPath(locale, '/')} className="shrink-0">
          <span className="block font-logo text-base tracking-[0.4em] text-ink sm:text-lg">
            D E E B A J
          </span>
          <span className="block text-center text-xs uppercase tracking-[0.34em] text-honey">
            R O Y A L
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
              {isArabic ? item.label : item.labelEn}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={localizedPath(locale, '/checkout')}
            className="hidden rounded-full border border-champagne-warm/40 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-honey hover:bg-champagne-pale sm:inline-flex"
          >
            {isArabic ? 'السلة' : 'Cart'}
          </Link>
          <MobileNavigation locale={locale} items={navItems} />
        </div>
      </Container>
    </header>
  );
}
