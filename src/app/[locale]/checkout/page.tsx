import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

type PageProps = {
  params: { locale: string };
};

export default function CheckoutPage({ params }: PageProps) {
  return (
    <Container>
      <Section
        eyebrow="Checkout"
        title="Checkout foundation"
        description="Payments and order submission are intentionally not implemented in Phase 1. This page reserves the route and layout for the later commerce phase."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
          <div className="rounded-[2rem] border border-sand-200 bg-cream-soft p-6 sm:p-8">
            <h1 className="font-serif text-3xl font-medium text-ink">
              Secure checkout will be added next.
            </h1>
            <p className="mt-4 leading-8 text-ink-soft">
              Customer details, delivery options, cart review, and payment method
              selection will be implemented after the Phase 1 route structure is
              verified.
            </p>
          </div>

          <aside className="rounded-[2rem] border border-sand-200 bg-cream p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-honey">
              Order summary
            </p>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              Cart state is not connected yet. This placeholder prevents the route
              from being empty while preserving the future checkout surface.
            </p>
            <Button href={`/${params.locale}/shop`} variant="secondary" className="mt-8 w-full">
              Return to shop
            </Button>
          </aside>
        </div>
      </Section>
    </Container>
  );
}
