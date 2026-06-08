import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { localizedPath, type Dictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/types';

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary['footer'];
};

export function Footer({ locale, dictionary }: FooterProps) {
  const footerLinks = [
    { href: '/about', label: dictionary.links.about },
    { href: '/faq', label: dictionary.links.faq },
    { href: '/shipping-policy', label: dictionary.links.shipping },
    { href: '/return-policy', label: dictionary.links.returns },
    { href: '/reviews', label: dictionary.links.reviews },
  ];

  return (
    <footer className="border-t border-champagne/60 bg-white">
      <Container className="grid gap-12 py-14 sm:grid-cols-[1.2fr_1fr] lg:py-20">
        <div>
          <p className="font-logo text-lg tracking-[0.32em] text-ink">
            D E E B A J&nbsp;&nbsp;R O Y A L
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-ink-soft">
            {dictionary.description}
          </p>
          <div className="mt-8 grid max-w-lg gap-3 text-sm text-ink-soft sm:grid-cols-3">
            {dictionary.badges.map((badge) => (
              <span key={badge} className="rounded-full border border-champagne-warm/40 px-4 py-2 text-center">
                {badge}
              </span>
            ))}
          </div>
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
