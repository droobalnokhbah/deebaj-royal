import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function ShippingPolicyPage() {
  return (
    <Container>
      <Section
        eyebrow="Shipping policy"
        title="Delivery expectations for Saudi Arabia and the GCC"
        description="This route holds the future shipping policy. Detailed carrier logic, thresholds, and tracking integrations are not implemented in Phase 1."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {['Riyadh', 'Major cities', 'Remote areas'].map((region) => (
            <div
              key={region}
              className="rounded-[2rem] border border-sand-200 bg-cream-soft p-6"
            >
              <h1 className="font-serif text-2xl font-medium text-ink">{region}</h1>
              <p className="mt-3 text-sm leading-7 text-ink-soft">
                Delivery timing and carrier details will be finalized in the
                operations phase.
              </p>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}
