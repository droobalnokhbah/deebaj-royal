import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SUBSCRIPTION_PLANS } from '@/data/products';

export default function SubscriptionPage() {
  return (
    <Container>
      <Section
        eyebrow="الاشتراكات"
        title="عناية فاخرة متكررة، برقي ووضوح"
        description="الدفع الخاص بالاشتراكات غير مفعّل بعد. تعرض هذه الصفحة الباقات فقط إلى حين ربط تجربة التجارة لاحقًا."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <article
              key={plan.id}
              className="rounded-[2rem] border border-sand-200 bg-cream p-6 sm:p-8"
            >
              <p className="text-sm font-semibold text-honey">
                {plan.nameAr}
              </p>
              <p className="mt-5 font-serif text-5xl font-medium text-ink">
                {plan.discount}%
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-ink-mute">
                خصم على كل طلب
              </p>
              <ul className="mt-8 grid gap-3 text-sm leading-7 text-ink-soft">
                {plan.features.ar.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Button href="/contact" variant="secondary" className="mt-8 w-full">
                تسجيل الاهتمام
              </Button>
            </article>
          ))}
        </div>
      </Section>
    </Container>
  );
}
