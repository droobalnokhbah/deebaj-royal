import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function WholesalePage() {
  return (
    <Container>
      <Section
        eyebrow="Wholesale"
        title="A dedicated B2B route for hospitality and business supply"
        description="Phase 1 keeps wholesale simple and static. Lead forms, CRM routing, pricing tiers, and account workflows can be added after the route foundation is stable."
      >
        <div className="rounded-[2rem] border border-sand-200 bg-cream-soft p-8 sm:p-10">
          <h1 className="font-serif text-3xl font-medium text-ink">
            Premium supply for hotels, offices, clinics, and restaurants.
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-ink-soft">
            The later wholesale phase should support structured quote requests,
            monthly quantity estimates, and business contact details.
          </p>
          <Button href="mailto:info@deebajroyal.com" variant="secondary" className="mt-8">
            Contact wholesale
          </Button>
        </div>
      </Section>
    </Container>
  );
}
