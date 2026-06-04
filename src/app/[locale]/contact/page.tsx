import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function ContactPage() {
  return (
    <Container>
      <Section
        eyebrow="Contact"
        title="A focused contact route for support and inquiries"
        description="Forms are not connected in Phase 1. This page establishes the destination for future support, wholesale, and customer service workflows."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-sand-200 bg-cream-soft p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-honey">
              WhatsApp
            </p>
            <p className="mt-4 text-2xl font-semibold text-ink">+966 58 020 9346</p>
          </div>
          <div className="rounded-[2rem] border border-sand-200 bg-cream-soft p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-honey">
              Email
            </p>
            <p className="mt-4 text-2xl font-semibold text-ink">
              info@deebajroyal.com
            </p>
          </div>
        </div>
        <Button href="mailto:info@deebajroyal.com" variant="secondary" className="mt-8">
          Send an email
        </Button>
      </Section>
    </Container>
  );
}
