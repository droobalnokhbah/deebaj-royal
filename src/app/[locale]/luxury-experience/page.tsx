import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/i18n/types';

type LuxuryExperiencePageProps = {
  params: { locale: string };
};

export default function LuxuryExperiencePage({ params }: LuxuryExperiencePageProps) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ar';
  const dictionary = getDictionary(locale);

  return (
    <Container>
      <Section
        eyebrow={dictionary.luxuryExperience.eyebrow}
        title={dictionary.luxuryExperience.title}
        description={dictionary.luxuryExperience.description}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dictionary.luxuryExperience.pillars.map(([pillar, description]) => (
            <div
              key={pillar}
              className="rounded-[2rem] border border-sand-200 bg-cream-soft p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-honey">
                {pillar}
              </p>
              <p className="mt-5 text-sm leading-7 text-ink-soft">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}
