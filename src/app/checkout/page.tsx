import { CheckoutClient } from '@/components/checkout/CheckoutClient';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function CheckoutPage() {
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
        eyebrow="إتمام الطلب"
        title="مراجعة الطلب قبل الإرسال"
        description="راجع المنتجات، اختر الشحن، وأرسل تفاصيل الطلب عبر واتساب. لا توجد بوابة دفع إلكترونية في هذه المرحلة."
      >
        <CheckoutClient paymentAvailability={paymentAvailability} />
      </Section>
    </Container>
  );
}
