import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function AboutPage() {
  return (
    <Container>
      <Section
        eyebrow="About Deebaj Royal"
        title="A Saudi luxury care brand for refined daily rituals"
        description="Phase 1 establishes a dedicated About route with calm editorial spacing. The full brand story, imagery, and proof points can be expanded in later migration phases."
      >
        <div className="grid gap-6 text-base leading-8 text-ink-soft lg:grid-cols-2">
          <p>
            Deebaj Royal is positioned for premium homes, hospitality spaces, and
            customers who expect everyday products to feel considered and elegant.
          </p>
          <p>
            The rebuild will preserve this identity while replacing the old
            monolithic storefront with focused, scalable pages.
          </p>
        </div>
      </Section>
    </Container>
  );
}
