import Link from 'next/link';
import { Container } from '@/components/ui/Container';

type FooterProps = {
  locale: string;
};

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/shipping-policy', label: 'Shipping' },
  { href: '/return-policy', label: 'Returns' },
  { href: '/reviews', label: 'Reviews' },
];

function localizedPath(locale: string, href: string) {
  return href === '/' ? `/${locale}` : `/${locale}${href}`;
}

export function Footer({ locale }: FooterProps) {
  return (
    <footer className="border-t border-sand-200 bg-cream-warm">
      <Container className="grid gap-10 py-12 sm:grid-cols-[1.2fr_1fr] lg:py-16">
        <div>
          <p className="font-logo text-lg tracking-[0.32em] text-ink">DEEBAJ ROYAL</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-ink-soft">
            Luxury everyday care for refined homes, hospitality spaces, and premium
            gifting moments across Saudi Arabia and the GCC.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-3 text-sm text-ink-soft sm:justify-self-end">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={localizedPath(locale, item.href)}
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
