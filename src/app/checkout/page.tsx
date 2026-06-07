import { CheckoutClient } from '@/components/checkout/CheckoutClient';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function CheckoutPage() {
  return (
    <Container>
      <Section
        eyebrow="إتمام الطلب"
        title="مراجعة الطلب قبل الإرسال"
        description="راجع المنتجات، اختر الشحن، وأرسل تفاصيل الطلب عبر واتساب. لا توجد بوابة دفع إلكترونية في هذه المرحلة."
      >
        <CheckoutClient />
      </Section>
    </Container>
  );
}
