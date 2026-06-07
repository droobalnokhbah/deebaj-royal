import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ProductCard } from '@/components/commerce/ProductCard';
import { ProductPurchaseControls } from '@/components/commerce/ProductPurchaseControls';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PRODUCTS, getProductBySlug } from '@/data/products';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const name = product.nameAr;
  const description = product.descAr;
  const features = product.features.ar;
  const heroImage = product.images[0];
  const relatedProducts = PRODUCTS.filter((item) => item.slug !== product.slug)
    .filter((item) => item.usageCategory === product.usageCategory || item.isFeatured)
    .slice(0, 3);
  const categoryLabel = {
    classic: 'الاستخدام اليومي الراقي',
    premium: 'الضيافة الفاخرة',
    eco: 'اختيار مستدام',
    travel: 'للتنقل والسفر',
    gold: 'إصدار الهدايا',
  }[product.usageCategory];

  const occasions = ['المجلس والضيافة', 'غرف النوم الفاخرة', 'المكاتب الراقية', 'الهدايا اليومية'];

  const reviewQuotes = [
    'التغليف فاخر والملمس مختلف من أول استخدام.',
    'أصبح جزءًا من ضيافتنا اليومية.',
    'ناعم وقوي بدون أن يفقد الإحساس الراقي.',
  ];

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
                  السعر شامل الضريبة
                </p>
                <p className="font-serif text-4xl font-medium text-caramel">
                  {product.price} ريال
                </p>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-ink-soft sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="rounded-2xl border border-champagne-warm/40 bg-champagne-pale px-4 py-4">
                    {feature}
                  </div>
                ))}
              </div>

              <ProductPurchaseControls product={product} />
              <div className="mt-4">
                <Button href="/shop" variant="secondary">
                  العودة للمجموعة
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </Container>

      <section className="bg-champagne-pale">
        <Container>
          <Section
            eyebrow="قصة المنتج"
            title="تفصيل صغير يصنع إحساس المكان."
            description="صُمم هذا المنتج ليبتعد عن منطق الاستهلاك السريع. حضوره متزن، ملمسه موثوق، وتغليفه يكمّل طابع المنزل أو مساحة الضيافة."
          >
            <div className="grid gap-5 lg:grid-cols-3">
              {[
                ['الملمس', 'نعومة متوازنة لا تبدو هشة أو مبالغًا فيها.'],
                ['القوة', 'ست طبقات تمنح ثقة الاستخدام اليومي والضيافة.'],
                ['الحضور', 'تغليف أنيق ينسجم مع الديكور لا يزاحمه.'],
              ].map(([title, copy]) => (
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
          eyebrow="المواصفات والاستخدام"
          title="واضح في التفاصيل، راقٍ في العرض."
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2.5rem] border border-champagne-warm/40 bg-champagne-pale p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-honey">
                المواصفات
              </p>
              <dl className="mt-8 grid gap-5">
                <div className="flex items-center justify-between border-b border-honey/10 pb-4">
                  <dt className="text-ink-soft">عدد الطبقات</dt>
                  <dd className="font-semibold text-ink">{product.specs.layers}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-honey/10 pb-4">
                  <dt className="text-ink-soft">عدد المناديل</dt>
                  <dd className="font-semibold text-ink">{product.specs.sheets}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-ink-soft">الفئة</dt>
                  <dd className="font-semibold text-ink">{categoryLabel}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-[2.5rem] border border-champagne/60 bg-cream p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-honey">
                مناسب لـ
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {occasions.map((occasion) => (
                  <div key={occasion} className="rounded-2xl border border-champagne-warm/30 bg-champagne-pale px-5 py-5 text-sm text-ink-soft">
                    {occasion}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </Container>

      <section className="bg-caramel-deep text-cream">
        <Container>
          <Section
            eyebrow="القيمة والتغليف"
            title="ليست علبة مناديل فقط؛ إنها جزء من الضيافة."
            description="القيمة هنا في اجتماع الملمس، السماكة، وسكينة التصميم. منتج يومي بإحساس فندق فاخر أو عطر على طاولة جانبية."
            className="text-cream [&_h2]:text-cream [&_p]:text-cream/75"
          >
            <div className="grid gap-4 md:grid-cols-3">
              {['ملمس فاخر', 'تغليف أنيق', 'حضور متزن'].map((item) => (
                <div key={item} className="rounded-[2rem] border border-champagne/25 bg-cream/5 px-6 py-6 text-center text-sm font-semibold text-cream">
                  {item}
                </div>
              ))}
            </div>
          </Section>
        </Container>
      </section>

      <Container>
        <Section
          eyebrow="آراء مختارة"
          title="انطباع فاخر يتكرر."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {reviewQuotes.map((quote) => (
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
          eyebrow="منتجات قريبة"
          title="استكمل التجربة."
        >
          <div className="grid gap-7 md:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </Section>
      </Container>
    </>
  );
}
