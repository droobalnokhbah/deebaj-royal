import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ProductCard } from '@/components/commerce/ProductCard';
import { ProductPurchaseControls } from '@/components/commerce/ProductPurchaseControls';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PRODUCTS, getProductBySlug } from '@/data/products';
import { getDictionary, localizedPath } from '@/lib/i18n';
import { getText, isLocale, type Locale } from '@/lib/i18n/types';

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

  const locale: Locale = isLocale(params.locale) ? params.locale : 'ar';
  const dictionary = getDictionary(locale);
  const name = getText(locale, { ar: product.nameAr, en: product.nameEn });
  const description = getText(locale, { ar: product.descAr, en: product.descEn });
  const features = getText(locale, product.features);
  const heroImage = product.images[0];
  const relatedProducts = PRODUCTS.filter((item) => item.slug !== product.slug)
    .filter((item) => item.usageCategory === product.usageCategory || item.isFeatured)
    .slice(0, 3);
  const categoryLabel = {
    classic: dictionary.product.categories.classic,
    premium: dictionary.product.categories.premium,
    eco: dictionary.product.categories.eco,
    travel: dictionary.product.categories.travel,
    gold: dictionary.product.categories.gold,
  }[product.usageCategory];

  return (
    <>
      <Container>
        <Section>
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="rounded-[3rem] border border-champagne/50 bg-champagne-pale p-5 shadow-[0_42px_110px_rgba(51,38,28,0.11)] sm:p-7">
              <div className="relative aspect-square overflow-hidden rounded-[2.35rem] border border-champagne-warm/40 bg-cream">
                <Image
                  src={heroImage}
                  alt={name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:sticky lg:top-36">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-honey">
                {categoryLabel}
              </p>
              <h1 className="font-serif text-5xl font-medium leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
                {name}
              </h1>
              <p className="mt-7 text-lg leading-9 text-ink-soft sm:text-xl sm:leading-10">
                {description}
              </p>
              <div className="mt-9 flex items-end justify-between gap-6 border-y border-gold/15 py-6">
                <p className="text-sm text-ink-mute">
                  {dictionary.product.priceIncludesVat}
                </p>
                <p className="font-serif text-4xl font-medium text-caramel">
                  {product.price} {dictionary.common.sar}
                </p>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-ink-soft sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="rounded-2xl border border-champagne-warm/40 bg-champagne-pale px-4 py-4">
                    {feature}
                  </div>
                ))}
              </div>

              <ProductPurchaseControls product={product} locale={locale} dictionary={dictionary.product} common={dictionary.common} />
              <div className="mt-4">
                <Button href={localizedPath(locale, '/shop')} variant="secondary">
                  {dictionary.common.backToShop}
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </Container>

      <section className="bg-white">
        <Container>
          <Section
            eyebrow={dictionary.product.storyEyebrow}
            title={dictionary.product.storyTitle}
            description={dictionary.product.storyDescription}
          >
            <div className="grid gap-5 lg:grid-cols-3">
              {dictionary.product.storyCards.map(([title, copy]) => (
                <article key={title} className="rounded-[2.5rem] border border-champagne/60 bg-cream p-8">
                  <h2 className="font-serif text-3xl font-medium text-ink">{title}</h2>
                  <p className="mt-4 text-sm leading-8 text-ink-soft">{copy}</p>
                </article>
              ))}
            </div>
          </Section>
        </Container>
      </section>

      <Container>
        <Section
          eyebrow={dictionary.product.specsEyebrow}
          title={dictionary.product.specsTitle}
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2.5rem] border border-champagne-warm/40 bg-champagne-pale p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-honey">
                {dictionary.product.specs}
              </p>
              <dl className="mt-8 grid gap-5">
                <div className="flex items-center justify-between border-b border-honey/10 pb-4">
                  <dt className="text-ink-soft">{dictionary.product.layers}</dt>
                  <dd className="font-semibold text-ink">{product.specs.layers}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-honey/10 pb-4">
                  <dt className="text-ink-soft">{dictionary.product.sheets}</dt>
                  <dd className="font-semibold text-ink">{product.specs.sheets}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-ink-soft">{dictionary.product.category}</dt>
                  <dd className="font-semibold text-ink">{categoryLabel}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-[2.5rem] border border-champagne/60 bg-cream p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-honey">
                {dictionary.product.occasionsLabel}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {dictionary.product.occasions.map((occasion) => (
                  <div key={occasion} className="rounded-2xl border border-champagne-warm/30 bg-champagne-pale px-5 py-5 text-sm text-ink-soft">
                    {occasion}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </Container>

      <section className="bg-white text-ink">
        <Container>
          <Section
            eyebrow={dictionary.product.valueEyebrow}
            title={dictionary.product.valueTitle}
            description={dictionary.product.valueDescription}
            className="text-ink [&_h2]:text-ink [&_p]:text-ink-soft"
          >
            <div className="grid gap-4 md:grid-cols-3">
              {dictionary.product.valueItems.map((item) => (
                <div key={item} className="rounded-[2rem] border border-champagne/60 bg-white px-6 py-6 text-center text-sm font-semibold text-ink shadow-[0_14px_40px_rgba(51,38,28,0.04)]">
                  {item}
                </div>
              ))}
            </div>
          </Section>
        </Container>
      </section>

      <Container>
        <Section
          eyebrow={dictionary.product.reviewsEyebrow}
          title={dictionary.product.reviewsTitle}
        >
          <div className="grid gap-5 md:grid-cols-3">
            {dictionary.product.reviews.map((quote) => (
              <figure key={quote} className="rounded-[2.25rem] border border-champagne/60 bg-cream p-7 shadow-[0_18px_60px_rgba(51,38,28,0.04)]">
                <div className="text-gold">★★★★★</div>
                <blockquote className="mt-5 text-sm leading-8 text-ink-soft">
                  "{quote}"
                </blockquote>
              </figure>
            ))}
          </div>
        </Section>

        <Section
          eyebrow={dictionary.product.relatedEyebrow}
          title={dictionary.product.relatedTitle}
        >
          <div className="grid gap-7 md:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} locale={locale} dictionary={dictionary.common} />
            ))}
          </div>
        </Section>
      </Container>
    </>
  );
}
