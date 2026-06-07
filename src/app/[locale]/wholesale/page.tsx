import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getDictionary, localizedPath } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/i18n/types';

type WholesalePageProps = {
  params: { locale: string };
};

export default function WholesalePage({ params }: WholesalePageProps) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ar';
  const dictionary = getDictionary(locale);

  return (
    <Container>
      <Section
        eyebrow={dictionary.wholesale.eyebrow}
        title={dictionary.wholesale.title}
        description={dictionary.wholesale.description}
      >
        <div className="rounded-[2rem] border border-sand-200 bg-cream-soft p-8 sm:p-10">
          <h1 className="font-serif text-3xl font-medium text-ink">
            {dictionary.wholesale.cardTitle}
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-ink-soft">
            {dictionary.wholesale.cardDescription}
          </p>
          <Button href={localizedPath(locale, '/contact')} variant="secondary" className="mt-8">
            {dictionary.wholesale.cta}
          </Button>
        </div>
      </Section>
    </Container>
  );
}
