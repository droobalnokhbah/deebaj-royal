import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SUBSCRIPTION_PLANS } from '@/data/products';

type PageProps = {
  params: { locale: string };
};

export default function SubscriptionPage({ params }: PageProps) {
  const isArabic = params.locale === 'ar';

  return (
    <Container>
      <Section
        eyebrow="Subscription"
        title="Recurring luxury care, structured for a later commerce phase"
        description="Subscription checkout is not active yet. Phase 1 only exposes the route and plan cards from the restored product data."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <article
              key={plan.id}
              className="rounded-[2rem] border border-sand-200 bg-cream p-6 sm:p-8"
            >
              <p className="text-sm font-semibold text-honey">
                {isArabic ? plan.nameAr : plan.nameEn}
              </p>
              <p className="mt-5 font-serif text-5xl font-medium text-ink">
                {plan.discount}%
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-ink-mute">
                off every order
              </p>
              <ul className="mt-8 grid gap-3 text-sm leading-7 text-ink-soft">
                {(isArabic ? plan.features.ar : plan.features.en).map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Button href={`/${params.locale}/contact`} variant="secondary" className="mt-8 w-full">
                Register interest
              </Button>
            </article>
          ))}
        </div>
      </Section>
    </Container>
  );
}
