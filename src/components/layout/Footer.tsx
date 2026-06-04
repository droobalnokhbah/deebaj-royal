import Link from 'next/link';
import { Container } from '@/components/ui/Container';

const footerLinks = [
  { href: '/about', label: 'قصتنا' },
  { href: '/faq', label: 'الأسئلة' },
  { href: '/shipping-policy', label: 'الشحن' },
  { href: '/return-policy', label: 'الاسترجاع' },
  { href: '/reviews', label: 'الآراء' },
];

export function Footer() {
  return (
    <footer className="border-t border-champagne/60 bg-champagne-pale">
      <Container className="grid gap-12 py-14 sm:grid-cols-[1.2fr_1fr] lg:py-20">
        <div>
          <p className="font-logo text-lg tracking-[0.32em] text-ink">
            D E E B A J&nbsp;&nbsp;R O Y A L
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-ink-soft">
            علامة سعودية فاخرة للعناية اليومية، مصممة للمنازل الراقية ومساحات الضيافة والتفاصيل التي تصنع الانطباع.
          </p>
          <div className="mt-8 grid max-w-lg gap-3 text-sm text-ink-soft sm:grid-cols-3">
            <span className="rounded-full border border-champagne-warm/40 px-4 py-2 text-center">
              شحن موثوق
            </span>
            <span className="rounded-full border border-champagne-warm/40 px-4 py-2 text-center">
              ضمان رضا
            </span>
            <span className="rounded-full border border-champagne-warm/40 px-4 py-2 text-center">
              جودة سعودية
            </span>
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-3 text-sm text-ink-soft sm:justify-self-end">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-honey"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
