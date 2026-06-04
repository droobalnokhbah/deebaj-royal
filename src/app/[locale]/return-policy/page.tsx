import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function ReturnPolicyPage() {
  return (
    <Container>
      <Section
        eyebrow="Return policy"
        title="A clear route for customer confidence"
        description="The final policy content should explain eligibility, timing, refund method, and unopened-product requirements. Phase 1 keeps the page minimal."
      >
        <div className="rounded-[2rem] border border-sand-200 bg-cream p-8">
          <h1 className="font-serif text-3xl font-medium text-ink">
            Return and exchange details will be formalized before launch.
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-ink-soft">
            This page exists so the future SEO and support structure has a
            dedicated policy route instead of relying on a single-page section.
          </p>
        </div>
      </Section>
    </Container>
  );
}
