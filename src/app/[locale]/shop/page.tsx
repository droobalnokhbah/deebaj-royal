import { ProductCard } from '@/components/commerce/ProductCard';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PRODUCTS } from '@/data/products';

type PageProps = {
  params: { locale: string };
};

export default function ShopPage({ params }: PageProps) {
  return (
    <Container>
      <Section
        eyebrow="Shop"
        title="The Deebaj Royal collection"
        description="A minimal product listing for Phase 1. Filtering, sorting, cart actions, and merchandising logic will be added after the foundation is stable."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} locale={params.locale} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
