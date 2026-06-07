import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SUBSCRIPTION_PLANS } from '@/data/products';
import { getDictionary, localizedPath } from '@/lib/i18n';
import { getText, isLocale, type Locale } from '@/lib/i18n/types';

type SubscriptionPageProps = {
  params: { locale: string };
};

export default function SubscriptionPage({ params }: SubscriptionPageProps) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ar';
  const dictionary = getDictionary(locale);

  return (
    <Container>
      <Section
        eyebrow={dictionary.subscription.eyebrow}
        title={dictionary.subscription.title}
        description={dictionary.subscription.description}
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <article
              key={plan.id}
              className="rounded-[2rem] border border-sand-200 bg-cream p-6 sm:p-8"
            >
              <p className="text-sm font-semibold text-honey">
                {getText(locale, { ar: plan.nameAr, en: plan.nameEn })}
              </p>
              <p className="mt-5 font-serif text-5xl font-medium text-ink">
                {plan.discount}%
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-ink-mute">
                {dictionary.subscription.discountLabel}
              </p>
              <ul className="mt-8 grid gap-3 text-sm leading-7 text-ink-soft">
                {getText(locale, plan.features).map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Button href={localizedPath(locale, '/contact')} variant="secondary" className="mt-8 w-full">
                {dictionary.subscription.cta}
              </Button>
            </article>
          ))}
        </div>
      </Section>
    </Container>
  );
}
