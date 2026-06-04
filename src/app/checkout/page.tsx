import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function CheckoutPage() {
  return (
    <Container>
      <Section
        eyebrow="إتمام الطلب"
        title="أساس تجربة دفع هادئة وواضحة"
        description="الدفع وإرسال الطلب غير مفعّلين في المرحلة الأولى. هذه الصفحة تحفظ المسار وتجهيز التخطيط لمرحلة التجارة لاحقًا."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
          <div className="rounded-[2rem] border border-sand-200 bg-cream-soft p-6 sm:p-8">
            <h1 className="font-serif text-3xl font-medium text-ink">
              سيتم بناء الدفع الآمن في المرحلة التالية.
            </h1>
            <p className="mt-4 leading-8 text-ink-soft">
              بيانات العميل، خيارات التوصيل، مراجعة السلة، وطرق الدفع ستُضاف بعد تثبيت بنية المسارات.
            </p>
          </div>

          <aside className="rounded-[2rem] border border-sand-200 bg-cream p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-honey">
              ملخص الطلب
            </p>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              حالة السلة غير متصلة بعد. هذا الموضع يحفظ مساحة تجربة الدفع المستقبلية بدون تفعيل عمليات الدفع.
            </p>
            <Button href="/shop" variant="secondary" className="mt-8 w-full">
              العودة للمنتجات
            </Button>
          </aside>
        </div>
      </Section>
    </Container>
  );
}
