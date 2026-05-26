import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/commerce/ProductCard';
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
  const relatedProducts = PRODUCTS.filter((item) => item.slug !== product.slug)
    .filter((item) => item.category === product.category || item.isFeatured)
    .slice(0, 3);
  const categoryLabel = {
    classic: isArabic ? 'الاستخدام اليومي الراقي' : 'Refined daily use',
    premium: isArabic ? 'الضيافة الفاخرة' : 'Premium hospitality',
    eco: isArabic ? 'اختيار مستدام' : 'Sustainable choice',
    travel: isArabic ? 'للتنقل والسفر' : 'Travel and movement',
    gold: isArabic ? 'إصدار الهدايا' : 'Gifting edition',
  }[product.category];

  const occasions = isArabic
    ? ['المجلس والضيافة', 'غرف النوم الهادئة', 'المكاتب الراقية', 'الهدايا اليومية']
    : ['Majlis and hospitality', 'Quiet bedrooms', 'Refined offices', 'Everyday gifting'];

  const reviewQuotes = isArabic
    ? [
        'التغليف فاخر والملمس مختلف من أول استخدام.',
        'أصبح جزءًا من ضيافتنا اليومية.',
        'ناعم وقوي بدون أن يفقد الإحساس الراقي.',
      ]
    : [
        'The packaging feels luxurious and the texture is different from first use.',
        'It became part of our daily hospitality.',
        'Soft and strong without losing its refined feel.',
      ];

  return (
    <>
      <Container>
        <Section>
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="rounded-[3rem] border border-gold/20 bg-[#f7ecd1] p-5 shadow-[0_36px_100px_rgba(61,38,20,0.1)] sm:p-8">
              <div className="flex aspect-square items-center justify-center rounded-[2.5rem] border border-gold/25 bg-cream/75 text-center shadow-inner">
                <div>
                  <div className="mx-auto mb-10 h-12 w-20 border-x border-t border-gold/60" />
                  <p className="font-logo text-4xl tracking-[0.38em] text-honey">
                    D E E B A J
                  </p>
                  <div className="mx-auto my-7 h-px w-32 bg-gold/60" />
                  <p className="text-xs uppercase tracking-[0.35em] text-ink-mute">
                    {tag}
                  </p>
                </div>
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
                  {isArabic ? 'السعر شامل الضريبة' : 'VAT included'}
                </p>
                <p className="font-serif text-4xl font-medium text-honey">
                  {product.price} {isArabic ? 'ريال' : 'SAR'}
                </p>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-ink-soft sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="rounded-2xl border border-honey/15 bg-cream-soft px-4 py-4">
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href={`/${params.locale}/checkout`}>
                  {isArabic ? 'ابدأ الطلب بهدوء' : 'Begin order'}
                </Button>
                <Button href={`/${params.locale}/shop`} variant="secondary">
                  {isArabic ? 'العودة للمجموعة' : 'Back to collection'}
                </Button>
              </div>
              <p className="mt-5 text-xs leading-6 text-ink-mute">
                {isArabic
                  ? 'الدفع الفعلي غير مفعّل في هذه المرحلة. سيتم ربط تجربة الشراء لاحقًا.'
                  : 'Real payment is not active in this phase. Checkout integration will be connected later.'}
              </p>
            </div>
          </div>
        </Section>
      </Container>

      <section className="bg-[#fbf5e8]">
        <Container>
          <Section
            eyebrow={isArabic ? 'قصة المنتج' : 'Product story'}
            title={isArabic ? 'تفصيل صغير يصنع إحساس المكان.' : 'A small detail that shapes the room.'}
            description={
              isArabic
                ? 'صُمم هذا المنتج ليبتعد عن منطق الاستهلاك السريع. حضوره هادئ، ملمسه موثوق، وتغليفه يكمّل طابع المنزل أو مساحة الضيافة.'
                : 'Designed away from fast-consumption logic, this product is quiet in presence, trusted in texture, and considered in packaging.'
            }
          >
            <div className="grid gap-5 lg:grid-cols-3">
              {(isArabic
                ? [
                    ['الملمس', 'نعومة متوازنة لا تبدو هشة أو مبالغًا فيها.'],
                    ['القوة', 'ست طبقات تمنح ثقة الاستخدام اليومي والضيافة.'],
                    ['الحضور', 'تغليف هادئ ينسجم مع الديكور لا يزاحمه.'],
                  ]
                : [
                    ['Texture', 'Balanced softness that does not feel fragile or overstated.'],
                    ['Strength', 'Six layers for confident daily and hospitality use.'],
                    ['Presence', 'Quiet packaging that complements the room rather than competing with it.'],
                  ]
              ).map(([title, copy]) => (
                <article key={title} className="rounded-[2.5rem] border border-gold/15 bg-cream p-8">
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
          eyebrow={isArabic ? 'المواصفات والاستخدام' : 'Specs and occasions'}
          title={isArabic ? 'واضح في التفاصيل، هادئ في العرض.' : 'Clear in detail, quiet in presentation.'}
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2.5rem] border border-honey/15 bg-cream-soft p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-honey">
                {isArabic ? 'المواصفات' : 'Specifications'}
              </p>
              <dl className="mt-8 grid gap-5">
                <div className="flex items-center justify-between border-b border-honey/10 pb-4">
                  <dt className="text-ink-soft">{isArabic ? 'عدد الطبقات' : 'Layers'}</dt>
                  <dd className="font-semibold text-ink">{product.specs.layers}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-honey/10 pb-4">
                  <dt className="text-ink-soft">{isArabic ? 'عدد المناديل' : 'Sheets'}</dt>
                  <dd className="font-semibold text-ink">{product.specs.sheets}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-ink-soft">{isArabic ? 'الفئة' : 'Category'}</dt>
                  <dd className="font-semibold text-ink">{categoryLabel}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-[2.5rem] border border-gold/15 bg-cream p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-honey">
                {isArabic ? 'مناسب لـ' : 'Usage occasions'}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {occasions.map((occasion) => (
                  <div key={occasion} className="rounded-2xl border border-honey/10 bg-[#fbf5e8] px-5 py-5 text-sm text-ink-soft">
                    {occasion}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </Container>

      <section className="bg-honey-deep text-cream">
        <Container>
          <Section
            eyebrow={isArabic ? 'القيمة والتغليف' : 'Packaging and value'}
            title={isArabic ? 'ليست علبة مناديل فقط؛ إنها جزء من الضيافة.' : 'Not just a tissue box; part of hospitality.'}
            description={
              isArabic
                ? 'القيمة هنا في اجتماع الملمس، السماكة، وسكينة التصميم. منتج يومي بإحساس فندق فاخر أو عطر على طاولة جانبية.'
                : 'Value lives in the meeting of texture, thickness, and quiet design: an everyday product with the feeling of a luxury hotel or fragrance object.'
            }
            className="text-cream [&_h2]:text-cream [&_p]:text-cream/75"
          >
            <div className="grid gap-4 md:grid-cols-3">
              {(isArabic ? ['ملمس فاخر', 'تغليف أنيق', 'حضور هادئ'] : ['Premium texture', 'Elegant packaging', 'Quiet presence']).map((item) => (
                <div key={item} className="rounded-[2rem] border border-gold/25 bg-cream/5 px-6 py-6 text-center text-sm font-semibold text-cream">
                  {item}
                </div>
              ))}
            </div>
          </Section>
        </Container>
      </section>

      <Container>
        <Section
          eyebrow={isArabic ? 'آراء مختارة' : 'Reviews preview'}
          title={isArabic ? 'انطباع هادئ يتكرر.' : 'A quiet impression, repeated.'}
        >
          <div className="grid gap-5 md:grid-cols-3">
            {reviewQuotes.map((quote) => (
              <figure key={quote} className="rounded-[2.25rem] border border-gold/15 bg-cream p-7 shadow-[0_18px_60px_rgba(61,38,20,0.05)]">
                <div className="text-gold">★★★★★</div>
                <blockquote className="mt-5 text-sm leading-8 text-ink-soft">
                  "{quote}"
                </blockquote>
              </figure>
            ))}
          </div>
        </Section>

        <Section
          eyebrow={isArabic ? 'منتجات قريبة' : 'Related products'}
          title={isArabic ? 'استكمل التجربة.' : 'Complete the experience.'}
        >
          <div className="grid gap-7 md:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} locale={params.locale} />
            ))}
          </div>
        </Section>
      </Container>
    </>
  );
}
