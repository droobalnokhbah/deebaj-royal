import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PRODUCTS, getProductBySlug } from '@/data/products';

type ProductPageProps = {
  params: {
    locale: string;
    slug: string;
  };
};

export function generateStaticParams() {
  return ['ar', 'en'].flatMap((locale) =>
    PRODUCTS.map((product) => ({
      locale,
      slug: product.slug,
    })),
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const isArabic = params.locale === 'ar';
  const name = isArabic ? product.nameAr : product.nameEn;
  const tag = isArabic ? product.tagAr : product.tagEn;
  const description = isArabic ? product.descAr : product.descEn;
  const features = isArabic ? product.features.ar : product.features.en;

  return (
    <Container>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="rounded-[2.5rem] border border-sand-200 bg-gradient-to-br from-cream-soft via-cream to-gold-pale/50 p-8">
            <div className="flex aspect-square items-center justify-center rounded-[2rem] border border-gold/30 bg-cream/70 text-center">
              <div>
                <p className="font-logo text-3xl tracking-[0.34em] text-honey">
                  DEEBAJ
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.35em] text-ink-mute">
                  {tag}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-honey">
              {tag}
            </p>
            <h1 className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
              {name}
            </h1>
            <p className="mt-5 text-lg leading-9 text-ink-soft">{description}</p>
            <p className="mt-8 text-2xl font-semibold text-honey">
              {product.price} SAR
            </p>

            <ul className="mt-8 grid gap-3 text-sm text-ink-soft">
              {features.map((feature) => (
                <li key={feature} className="rounded-2xl bg-cream-soft px-4 py-3">
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={`/${params.locale}/checkout`}>Continue to checkout</Button>
              <Button href={`/${params.locale}/shop`} variant="secondary">
                Back to shop
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
