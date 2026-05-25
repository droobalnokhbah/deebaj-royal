import Link from 'next/link';
import { Container } from '@/components/ui/Container';

type FooterProps = {
  locale: string;
};

const footerLinks = [
  { href: '/about', label: 'قصتنا', labelEn: 'About' },
  { href: '/faq', label: 'الأسئلة', labelEn: 'FAQ' },
  { href: '/shipping-policy', label: 'الشحن', labelEn: 'Shipping' },
  { href: '/return-policy', label: 'الاسترجاع', labelEn: 'Returns' },
  { href: '/reviews', label: 'الآراء', labelEn: 'Reviews' },
];

function localizedPath(locale: string, href: string) {
  return href === '/' ? `/${locale}` : `/${locale}${href}`;
}

export function Footer({ locale }: FooterProps) {
  const isArabic = locale === 'ar';

  return (
    <footer className="border-t border-gold/20 bg-[#f8efd9]">
      <Container className="grid gap-12 py-14 sm:grid-cols-[1.2fr_1fr] lg:py-20">
        <div>
          <p className="font-logo text-lg tracking-[0.32em] text-ink">
            D E E B A J&nbsp;&nbsp;R O Y A L
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-ink-soft">
            {isArabic
              ? 'علامة سعودية فاخرة للعناية اليومية، مصممة للمنازل الراقية ومساحات الضيافة والتفاصيل التي تصنع الانطباع.'
              : 'Luxury everyday care for refined homes, hospitality spaces, and premium gifting moments across Saudi Arabia and the GCC.'}
          </p>
          <div className="mt-8 grid max-w-lg gap-3 text-sm text-ink-soft sm:grid-cols-3">
            <span className="rounded-full border border-honey/20 px-4 py-2 text-center">
              {isArabic ? 'شحن موثوق' : 'Trusted delivery'}
            </span>
            <span className="rounded-full border border-honey/20 px-4 py-2 text-center">
              {isArabic ? 'ضمان رضا' : 'Satisfaction guarantee'}
            </span>
            <span className="rounded-full border border-honey/20 px-4 py-2 text-center">
              {isArabic ? 'جودة سعودية' : 'Saudi quality'}
            </span>
          </div>
        </div>

        <nav className="grid grid-cols-2 gap-3 text-sm text-ink-soft sm:justify-self-end">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={localizedPath(locale, item.href)}
              className="transition-colors hover:text-honey"
            >
              {isArabic ? item.label : item.labelEn}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
