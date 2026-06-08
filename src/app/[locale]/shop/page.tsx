import Image from 'next/image';
import { ProductCard } from '@/components/commerce/ProductCard';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PRODUCTS } from '@/data/products';
import { getDictionary, localizedPath } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/i18n/types';

type ShopPageProps = {
  params: { locale: string };
};

export default function ShopPage({ params }: ShopPageProps) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ar';
  const dictionary = getDictionary(locale);
  const singleProductOrder = [
    'deebaj-classic',
    'deebaj-family',
    'deebaj-night',
    'deebaj-eco',
    'deebaj-travel',
    'deebaj-office',
  ];
  const bundleProductOrder = ['deebaj-gold', 'deebaj-kitchen'];
  const productsBySlug = new Map(PRODUCTS.map((product) => [product.slug, product]));
  const singleProducts = singleProductOrder
    .map((slug) => productsBySlug.get(slug))
    .filter((product): product is (typeof PRODUCTS)[number] => Boolean(product));
  const bundleProducts = bundleProductOrder
    .map((slug) => productsBySlug.get(slug))
    .filter((product): product is (typeof PRODUCTS)[number] => Boolean(product));
  const trustItems = dictionary.shop.trustItems;

  return (
    <>
      <section className="border-b border-champagne/60 bg-white">
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.34em] text-honey">
              {dictionary.shop.eyebrow}
            </p>
            <h1 className="font-serif text-5xl font-medium leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              {dictionary.shop.title}
            </h1>
            <p className="mt-7 text-lg leading-9 text-ink-soft sm:text-xl sm:leading-10">
              {dictionary.shop.description}
            </p>
          </div>

          <div className="rounded-[3rem] border border-champagne/60 bg-cream p-4 shadow-[0_34px_90px_rgba(51,38,28,0.1)] sm:p-6">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2.35rem] border border-champagne-warm/40 bg-cream">
              <Image
                src="/images/products/deebaj-family.jpg"
                alt="مجموعة ديباج رويال"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <Section
          eyebrow={dictionary.shop.sectionEyebrow}
          title={dictionary.shop.sectionTitle}
          description={dictionary.shop.sectionDescription}
        >
          <div className="space-y-20">
            <section>
              <div className="mb-8 flex flex-col gap-3 border-b border-champagne/60 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-honey">
                    {dictionary.shop.singleEyebrow}
                  </p>
                  <h2 className="mt-3 font-serif text-4xl font-medium text-ink sm:text-5xl">
                    {dictionary.shop.singleLabel}
                  </h2>
                </div>
                <p className="text-sm text-ink-soft">{singleProducts.length} {dictionary.shop.productCount}</p>
              </div>

              <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
                {singleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} locale={locale} dictionary={dictionary.common} />
                ))}
              </div>
            </section>

            <section>
              <div className="mb-8 flex flex-col gap-3 border-b border-champagne/60 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-honey">
                    {dictionary.shop.bundleEyebrow}
                  </p>
                  <h2 className="mt-3 font-serif text-4xl font-medium text-ink sm:text-5xl">
                    {dictionary.shop.bundleLabel}
                  </h2>
                </div>
                <p className="text-sm text-ink-soft">{bundleProducts.length} {dictionary.shop.productCount}</p>
              </div>

              <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
                {bundleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} locale={locale} dictionary={dictionary.common} />
                ))}
              </div>
            </section>
          </div>
        </Section>
      </Container>

      <section className="bg-white text-ink-soft">
        <Container className="grid gap-4 py-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item} className="rounded-full border border-champagne-warm/40 bg-cream/60 px-5 py-3 text-center">
              {item}
            </div>
          ))}
        </Container>
      </section>

      <Container>
        <section className="py-20 text-center sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-honey">
            {dictionary.shop.helpEyebrow}
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">
            {dictionary.shop.helpTitle}
          </h2>
          <Button href={localizedPath(locale, '/contact')} variant="secondary" className="mt-9">
            {dictionary.shop.helpCta}
          </Button>
        </section>
      </Container>
    </>
  );
}
