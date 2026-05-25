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
  const isArabic = locale === 'ar';
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  const trustSignals = isArabic
    ? ['شحن مجاني فوق ٢٠٠ ريال', 'ضمان رضا ١٤ يوم', 'معتمد للسوق السعودي']
    : ['Free shipping over 200 SAR', '14-day satisfaction guarantee', 'Certified for Saudi market'];

  const rituals = isArabic
    ? [
        ['01', 'نعومة لا تُفرض حضورها', 'ملمس هادئ مصمم للعناية اليومية الراقية.'],
        ['02', 'قوة في تفاصيل صغيرة', 'ست طبقات حقيقية تمنحك ثقة الاستخدام دون مبالغة.'],
        ['03', 'ضيافة تُشعر ولا تُقال', 'تغليف أنيق يليق بالمنازل والفنادق والمساحات الهادئة.'],
      ]
    : [
        ['01', 'Softness without noise', 'A quiet texture designed for elevated daily care.'],
        ['02', 'Strength in small details', 'Six genuine layers for confident use without excess.'],
        ['03', 'Hospitality you can feel', 'Elegant packaging suited to homes, hotels, and calm spaces.'],
      ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-gold/15 bg-cream">
        <div className="absolute inset-x-0 top-0 h-48 bg-[#f8efd9]" />
        <Container className="relative grid min-h-[82vh] items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.34em] text-honey">
              {isArabic ? 'ديباج رويال' : 'Deebaj Royal'}
            </p>
            <h1 className="font-serif text-6xl font-medium leading-[0.98] text-ink sm:text-7xl lg:text-8xl">
              {isArabic ? 'رفاهية تشعر بها من أول لمسة.' : 'Luxury in every touch.'}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-ink-soft sm:text-xl sm:leading-10">
              {isArabic
                ? 'مناديل فاخرة بست طبقات حقيقية، صُممت لتمنح تفاصيلك اليومية إحساس الضيافة الراقية وهدوء الفنادق الفاخرة.'
                : 'Six genuine layers, crafted to bring the calm of luxury hospitality into everyday care.'}
            </p>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Button href={`/${locale}/shop`}>
                {isArabic ? 'استكشف المجموعة' : 'Explore collection'}
              </Button>
              <Button href={`/${locale}/luxury-experience`} variant="secondary">
                {isArabic ? 'قصة النعومة' : 'The softness story'}
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl">
            <div className="rounded-[3rem] border border-gold/25 bg-[#f7ecd1] p-5 shadow-[0_40px_100px_rgba(61,38,20,0.12)] sm:p-7">
              <div className="flex aspect-[4/5] items-center justify-center rounded-[2.5rem] border border-gold/25 bg-cream/80 text-center">
                <div>
                  <div className="mx-auto mb-10 h-12 w-20 border-x border-t border-gold/60" />
                  <p className="font-logo text-4xl tracking-[0.38em] text-honey">
                    D E E B A J
                  </p>
                  <div className="mx-auto my-7 h-px w-32 bg-gold/60" />
                  <p className="text-sm uppercase tracking-[0.35em] text-ink-mute">
                    {isArabic ? 'نعومة القطن بلمسة الحرير' : 'Softness you remember'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-gold/10 bg-honey-deep text-cream">
        <Container className="grid gap-4 py-6 text-center text-sm text-cream/85 md:grid-cols-3">
          {trustSignals.map((signal) => (
            <p key={signal}>{signal}</p>
          ))}
        </Container>
      </section>

      <Container>
        <Section
          eyebrow={isArabic ? 'التجربة' : 'The experience'}
          title={isArabic ? 'تُلمس ولا تُحسب' : 'Felt, not counted'}
          description={
            isArabic
              ? 'الرفاهية هنا ليست ازدحامًا بصريًا أو عروضًا صاخبة. إنها إيقاع هادئ، ملمس موثوق، وتفاصيل تغليف تجعل المنتج جزءًا من المكان.'
              : 'Luxury here is not noise or aggressive offers. It is quiet rhythm, trusted texture, and packaging that belongs in the room.'
          }
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {rituals.map(([number, title, description]) => (
              <article
                key={number}
                className="rounded-[2.5rem] border border-gold/15 bg-cream-soft p-8 shadow-[0_20px_60px_rgba(61,38,20,0.05)]"
              >
                <p className="font-serif text-5xl text-gold">{number}</p>
                <h2 className="mt-8 font-serif text-3xl font-medium text-ink">{title}</h2>
                <p className="mt-4 text-sm leading-8 text-ink-soft">{description}</p>
              </article>
            ))}
          </div>
        </Section>
      </Container>

      <section className="bg-[#fbf5e8]">
        <Container>
          <Section
            eyebrow={isArabic ? 'المجموعة' : 'The collection'}
            title={isArabic ? 'منتجات مختارة بلا ازدحام' : 'A focused collection, without clutter'}
            description={
              isArabic
                ? 'نقدّم المنتجات بإيقاع هادئ ومساحة كافية لفهم الاستخدام والملمس، بدل بطاقات مزدحمة أو خصومات عالية الصوت.'
                : 'Products are presented with space to understand use and texture, not crowded cards or loud discount blocks.'
            }
          >
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} locale={locale} />
              ))}
            </div>
          </Section>
        </Container>
      </section>

      <Container>
        <Section className="lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="rounded-[3rem] border border-gold/20 bg-honey-deep p-8 text-cream shadow-[0_30px_90px_rgba(61,38,20,0.12)] sm:p-10">
              <div className="flex aspect-[4/5] items-center justify-center rounded-[2.25rem] border border-gold/30 bg-[#4a2f13]/35 text-center">
                <div>
                  <p className="font-logo text-3xl tracking-[0.38em] text-gold-light">
                    D E E B A J
                  </p>
                  <p className="mt-5 text-xs uppercase tracking-[0.35em] text-cream/70">
                    Royal Honey Edition
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-honey">
                {isArabic ? 'التغليف الفاخر' : 'Luxury packaging'}
              </p>
              <h2 className="font-serif text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
                {isArabic
                  ? 'تفاصيل تجعل العلبة جزءًا من الديكور.'
                  : 'Packaging that belongs in the space.'}
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-9 text-ink-soft">
                {isArabic
                  ? 'الألوان الهادئة، اللمسات الذهبية، والمساحات النظيفة تمنح ديباج حضورًا أقرب للعطور الفاخرة والضيافة الراقية من متجر تقليدي للمناديل.'
                  : 'Quiet colors, gold details, and clean spacing give Deebaj the presence of luxury fragrance and hospitality brands, not a typical tissue store.'}
              </p>
            </div>
          </div>
        </Section>
      </Container>

      <section className="bg-[#f8efd9]">
        <Container>
          <Section
            eyebrow={isArabic ? 'للضيافة والمنازل الراقية' : 'For hospitality and refined homes'}
            title={isArabic ? 'ثقة واضحة بدون ازدحام' : 'Trust, without visual noise'}
            description={
              isArabic
                ? 'الشحن، الضمان، وطرق الدفع ستظهر لاحقًا كعناصر دعم هادئة في مسار الشراء، لا ككتل مزدحمة تضعف الفخامة.'
                : 'Shipping, guarantees, and payment reassurance should support the purchase path calmly, not overwhelm the luxury experience.'
            }
          >
            <div className="grid gap-4 md:grid-cols-3">
              {(isArabic
                ? ['توصيل سريع وآمن', 'ضمان رضا ١٤ يوم', 'مناسب للمنازل والضيافة']
                : ['Fast, secure delivery', '14-day satisfaction guarantee', 'For homes and hospitality']
              ).map((item) => (
                <div
                  key={item}
                  className="rounded-[2rem] border border-honey/15 bg-cream/70 p-7 text-center text-sm font-semibold text-ink shadow-[0_14px_40px_rgba(61,38,20,0.05)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </Section>
        </Container>
      </section>

      <Container>
        <section className="py-20 text-center sm:py-24 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-honey">
            {isArabic ? 'ديباج رويال' : 'Deebaj Royal'}
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            {isArabic
              ? 'منتج يومي، بإحساس لا يشبه اليومي.'
              : 'An everyday product, with a feeling beyond everyday.'}
          </h2>
          <div className="mt-10">
            <Button href={`/${locale}/shop`} variant="secondary">
              {isArabic ? 'عرض المجموعة' : 'View collection'}
            </Button>
          </div>
        </section>
      </Container>
    </>
  );
}
