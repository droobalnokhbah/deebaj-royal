import { CheckoutClient } from '@/components/checkout/CheckoutClient';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/i18n/types';

type CheckoutPageProps = {
  params: { locale: string };
};

export default function CheckoutPage({ params }: CheckoutPageProps) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ar';
  const dictionary = getDictionary(locale);
  const paymentAvailability = {
    moyasar: Boolean(
      process.env.NEXT_PUBLIC_MOYASAR_PUBLISHABLE_KEY && process.env.MOYASAR_SECRET_KEY,
    ),
    tabby: Boolean(
      process.env.TABBY_SECRET_KEY &&
        (process.env.TABBY_PUBLIC_KEY || process.env.NEXT_PUBLIC_TABBY_PUBLIC_KEY),
    ),
    tamara: Boolean(
      process.env.TAMARA_API_TOKEN &&
        (process.env.TAMARA_PUBLIC_KEY || process.env.NEXT_PUBLIC_TAMARA_PUBLIC_KEY),
    ),
  };

  return (
    <Container>
      <Section
        eyebrow={dictionary.checkout.eyebrow}
        title={dictionary.checkout.title}
        description={dictionary.checkout.description}
      >
        <CheckoutClient
          locale={locale}
          dictionary={dictionary.checkout}
          paymentAvailability={paymentAvailability}
        />
      </Section>
    </Container>
  );
}
