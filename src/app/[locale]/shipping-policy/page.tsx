import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/i18n/types';

type ShippingPolicyPageProps = {
  params: { locale: string };
};

export default function ShippingPolicyPage({ params }: ShippingPolicyPageProps) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ar';
  const dictionary = getDictionary(locale);
  const content = dictionary.policyPages.shipping;

  return (
    <Container>
      <Section
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {content.regions.map(([region, description]) => (
            <div
              key={region}
              className="rounded-[2rem] border border-sand-200 bg-cream-soft p-6"
            >
              <h1 className="font-serif text-2xl font-medium text-ink">{region}</h1>
              <p className="mt-3 text-sm leading-7 text-ink-soft">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}
