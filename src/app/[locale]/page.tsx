import { ProductCard } from '@/components/commerce/ProductCard';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getFeaturedProducts } from '@/data/products';

type PageProps = {
  params: { locale: string };
};

export default function HomePage({ params }: PageProps) {
  const { locale } = params;
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <section className="border-b border-sand-200 bg-cream">
        <Container className="grid min-h-[72vh] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-honey">
              Deebaj Royal
            </p>
            <h1 className="font-serif text-5xl font-medium leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              Luxury everyday care, refined for modern homes.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-ink-soft">
              A calm, premium foundation for the Deebaj Royal storefront. Phase 1
              keeps the experience minimal while preparing the site for scalable
              commerce pages.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={`/${locale}/shop`}>Shop collection</Button>
              <Button href={`/${locale}/luxury-experience`} variant="secondary">
                Explore the experience
              </Button>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-gold/30 bg-gradient-to-br from-cream-soft via-cream to-gold-pale/50 p-8">
            <div className="flex aspect-[4/5] items-center justify-center rounded-[2rem] border border-gold/30 bg-cream/70 text-center">
              <div>
                <p className="font-logo text-3xl tracking-[0.34em] text-honey">
                  DEEBAJ
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.35em] text-ink-mute">
                  Six layer tissue
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <Section
          eyebrow="Featured products"
          title="A focused foundation for the collection"
          description="Product presentation is intentionally simple in Phase 1. Full product storytelling, imagery, and commerce interactions will follow in later phases."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} locale={locale} />
            ))}
          </div>
        </Section>
      </Container>
    </>
  );
}
