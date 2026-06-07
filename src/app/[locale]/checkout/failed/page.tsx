import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getDictionary, localizedPath } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/i18n/types';

type CheckoutFailedPageProps = {
  params: { locale: string };
  searchParams: {
    reason?: string;
  };
};

export default function CheckoutFailedPage({ params, searchParams }: CheckoutFailedPageProps) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ar';
  const dictionary = getDictionary(locale).checkout.failed;

  return (
    <Container>
      <Section
        eyebrow={dictionary.eyebrow}
        title={dictionary.title}
        description={dictionary.description}
      >
        <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-champagne/60 bg-cream p-8 text-center shadow-[0_22px_70px_rgba(51,38,28,0.05)]">
          {searchParams.reason && (
            <p className="rounded-2xl bg-champagne-pale px-4 py-3 text-sm text-ink-soft">
              {searchParams.reason}
            </p>
          )}

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={localizedPath(locale, '/checkout')}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-caramel-deep px-7 text-sm font-semibold text-cream"
            >
              {dictionary.checkout}
            </Link>
            <Link
              href={localizedPath(locale, '/shop')}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-champagne-warm/40 px-7 text-sm font-semibold text-ink"
            >
              {dictionary.shop}
            </Link>
          </div>
        </div>
      </Section>
    </Container>
  );
}
