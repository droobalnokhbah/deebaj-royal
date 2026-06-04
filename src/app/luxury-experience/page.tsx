import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const pillars = ['Softness', 'Strength', 'Absorption', 'Presentation'];

export default function LuxuryExperiencePage() {
  return (
    <Container>
      <Section
        eyebrow="Luxury experience"
        title="Minimal storytelling for a more premium product journey"
        description="This route reserves the brand-experience surface for product storytelling, material details, packaging, and hospitality use cases."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar}
              className="rounded-[2rem] border border-sand-200 bg-cream-soft p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-honey">
                {pillar}
              </p>
              <p className="mt-5 text-sm leading-7 text-ink-soft">
                A dedicated content block for the future premium experience
                narrative.
              </p>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}
