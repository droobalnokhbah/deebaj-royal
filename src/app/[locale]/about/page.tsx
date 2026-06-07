import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/i18n/types';

type AboutPageProps = {
  params: { locale: string };
};

export default function AboutPage({ params }: AboutPageProps) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ar';
  const dictionary = getDictionary(locale);
  const content = dictionary.policyPages.about;

  return (
    <Container>
      <Section
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      >
        <div className="grid gap-6 text-base leading-8 text-ink-soft lg:grid-cols-2">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>
    </Container>
  );
}
