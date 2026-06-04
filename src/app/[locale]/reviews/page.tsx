import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const reviews = [
  'The packaging feels premium and refined.',
  'A noticeable difference in softness and quality.',
  'A strong fit for guest spaces and hospitality.',
];

export default function ReviewsPage() {
  return (
    <Container>
      <Section
        eyebrow="Reviews"
        title="Social proof prepared for the trust-building phase"
        description="Phase 1 uses simple testimonial placeholders. Verified review integrations and schema can be added later."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
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
