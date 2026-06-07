import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getDictionary, localizedPath } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/i18n/types';

type CheckoutSuccessPageProps = {
  params: { locale: string };
  searchParams: {
    order?: string;
    method?: string;
  };
};

export default function CheckoutSuccessPage({ params, searchParams }: CheckoutSuccessPageProps) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ar';
  const dictionary = getDictionary(locale).checkout.success;
  const isBankTransfer = searchParams.method === 'bank';
  const isCod = searchParams.method === 'cod';

  return (
    <Container>
      <Section
        eyebrow={dictionary.eyebrow}
        title={
          isBankTransfer
            ? dictionary.bankTitle
            : isCod
              ? dictionary.codTitle
              : dictionary.defaultTitle
        }
        description={dictionary.description}
      >
        <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-champagne/60 bg-cream p-8 text-center shadow-[0_22px_70px_rgba(51,38,28,0.05)]">
          {searchParams.order && (
            <p className="text-sm text-ink-soft">
              {dictionary.orderNumber}
              <span className="mx-2 font-semibold text-caramel">{searchParams.order}</span>
            </p>
          )}

          {isBankTransfer && (
            <p className="mt-5 leading-8 text-ink-soft">
              {dictionary.bankNote}
            </p>
          )}

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={localizedPath(locale, '/shop')}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-caramel-deep px-7 text-sm font-semibold text-cream"
            >
              {dictionary.shop}
            </Link>
            <Link
              href={localizedPath(locale, '/')}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-champagne-warm/40 px-7 text-sm font-semibold text-ink"
            >
              {dictionary.home}
            </Link>
          </div>
        </div>
      </Section>
    </Container>
  );
}
