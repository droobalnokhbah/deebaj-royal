import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/i18n/types';

type ReturnPolicyPageProps = {
  params: { locale: string };
};

export default function ReturnPolicyPage({ params }: ReturnPolicyPageProps) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ar';
  const dictionary = getDictionary(locale);
  const content = dictionary.policyPages.returns;

  return (
    <Container>
      <Section
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      >
        <div className="rounded-[2rem] border border-sand-200 bg-cream p-8">
          <h1 className="font-serif text-3xl font-medium text-ink">
            {content.cardTitle}
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-ink-soft">
            {content.cardDescription}
          </p>
        </div>
      </Section>
    </Container>
  );
}
