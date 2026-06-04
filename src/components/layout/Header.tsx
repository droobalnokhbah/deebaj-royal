import Link from 'next/link';
import { MobileNavigation } from '@/components/layout/MobileNavigation';
import { Container } from '@/components/ui/Container';

const navItems = [
  { href: '/shop', label: 'المنتجات' },
  { href: '/luxury-experience', label: 'التجربة' },
  { href: '/subscription', label: 'الاشتراكات' },
  { href: '/wholesale', label: 'للشركات' },
  { href: '/contact', label: 'تواصل' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-champagne/60 bg-cream/95 backdrop-blur-xl">
      <div className="border-b border-champagne/50 bg-champagne-pale text-ink-soft">
        <Container className="flex min-h-9 items-center justify-center text-center text-[11px] font-medium tracking-[0.12em]">
          <span>
            شحن مجاني فوق ٢٠٠ ريال · ضمان رضا ١٤ يوم · تجربة سعودية فاخرة
          </span>
        </Container>
      </div>
      <Container className="flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="shrink-0">
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
              href={item.href}
              className="transition-colors hover:text-honey"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/checkout"
            className="hidden rounded-full border border-champagne-warm/40 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-honey hover:bg-champagne-pale sm:inline-flex"
          >
            السلة
          </Link>
          <MobileNavigation items={navItems} />
        </div>
      </Container>
    </header>
  );
}
