import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/i18n/types';

type FAQPageProps = {
  params: { locale: string };
};

export default function FAQPage({ params }: FAQPageProps) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ar';
  const dictionary = getDictionary(locale);

  return (
    <Container>
      <Section
        eyebrow={dictionary.faq.eyebrow}
        title={dictionary.faq.title}
        description={dictionary.faq.description}
      >
        <div className="grid gap-4">
          {dictionary.faq.items.map(([question, answer]) => (
            <div
              key={question}
              className="rounded-[2rem] border border-sand-200 bg-cream p-6"
            >
              <h1 className="text-lg font-semibold text-ink">{question}</h1>
              <p className="mt-3 leading-8 text-ink-soft">{answer}</p>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}
