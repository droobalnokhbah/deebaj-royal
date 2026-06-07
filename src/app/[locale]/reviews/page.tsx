import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/i18n/types';

type ReviewsPageProps = {
  params: { locale: string };
};

export default function ReviewsPage({ params }: ReviewsPageProps) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ar';
  const dictionary = getDictionary(locale);
  const content = dictionary.policyPages.reviews;

  return (
    <Container>
      <Section
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {content.items.map((review) => (
            <figure
              key={review}
              className="rounded-[2rem] border border-sand-200 bg-cream p-6"
            >
              <div className="text-gold">★★★★★</div>
              <blockquote className="mt-5 leading-8 text-ink-soft">
                "{review}"
              </blockquote>
            </figure>
          ))}
        </div>
      </Section>
    </Container>
  );
}
