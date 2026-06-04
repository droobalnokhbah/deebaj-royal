import { ProductCard } from '@/components/commerce/ProductCard';
import { SignaturePackage } from '@/components/brand/SignaturePackage';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PRODUCTS } from '@/data/products';

type PageProps = {
  params: { locale: string };
};

export default function ShopPage({ params }: PageProps) {
  const isArabic = params.locale === 'ar';
  const categoryLabels = [
    {
      key: 'classic',
      label: isArabic ? 'اليومي الراقي' : 'Refined daily care',
      count: PRODUCTS.filter((product) => product.category === 'classic').length,
    },
    {
      key: 'premium',
      label: isArabic ? 'الضيافة المسائية' : 'Evening hospitality',
      count: PRODUCTS.filter((product) => product.category === 'premium').length,
    },
    {
      key: 'gold',
      label: isArabic ? 'إصدار الهدايا' : 'Gifting edition',
      count: PRODUCTS.filter((product) => product.category === 'gold').length,
    },
    {
      key: 'travel',
      label: isArabic ? 'للتنقل' : 'On the go',
      count: PRODUCTS.filter((product) => product.category === 'travel').length,
    },
  ];

  const trustItems = isArabic
    ? ['شحن موثوق داخل المملكة', 'خيارات دفع متعددة لاحقًا', 'ست طبقات حقيقية', 'تغليف يليق بالضيافة']
    : ['Trusted Saudi delivery', 'Multiple payment options later', 'Six genuine layers', 'Hospitality-grade packaging'];

  return (
    <>
      <section className="border-b border-champagne/60 bg-champagne-pale">
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.34em] text-honey">
              {isArabic ? 'مجموعة ديباج رويال' : 'Deebaj Royal collection'}
            </p>
            <h1 className="font-serif text-5xl font-medium leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              {isArabic
                ? 'اكتشف النعومة كما تُقدّم في الضيافة الراقية.'
                : 'Discover softness, presented like refined hospitality.'}
            </h1>
            <p className="mt-7 text-lg leading-9 text-ink-soft sm:text-xl sm:leading-10">
              {isArabic
                ? 'تجربة تسوق هادئة، بلا ازدحام أو خصومات صاخبة. اختر المنتج بحسب اللحظة: المنزل، الضيافة، المكتب، السفر، أو الهدايا.'
                : 'A calm shopping experience without clutter or loud discounts. Choose by moment: home, hospitality, office, travel, or gifting.'}
            </p>
          </div>

          <SignaturePackage
            eyebrow="D E E B A J"
            title={isArabic ? 'المجموعة' : 'COLLECTION'}
            subtitle={isArabic ? 'نفس منطق الفئة، بحضور أكثر فخامة' : 'Familiar category logic, elevated presence'}
          />
        </Container>
      </section>

      <Container>
        <Section
          eyebrow={isArabic ? 'تصنيف هادئ' : 'Quiet discovery'}
          title={isArabic ? 'اختر بحسب الاستخدام، لا بحسب الضجيج.' : 'Choose by use, not by noise.'}
          description={
            isArabic
              ? 'بدل بطاقات مزدحمة وعروض متداخلة، يركّز المتجر على وضوح الاستخدام، جودة الملمس، وحضور التغليف.'
              : 'Instead of crowded cards and competing promos, the shop focuses on use, texture quality, and packaging presence.'
          }
        >
          <div className="mb-12 flex flex-wrap gap-3">
            {categoryLabels.map((category) => (
              <span
                key={category.key}
                className="rounded-full border border-champagne-warm/40 bg-cream px-5 py-3 text-sm font-medium text-ink-soft"
              >
                {category.label}
                <span className="mx-2 text-honey">{category.count}</span>
              </span>
            ))}
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {PRODUCTS.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} locale={params.locale} />
              </div>
            ))}
          </div>
        </Section>
      </Container>

      <section className="bg-cream-warm text-ink-soft">
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
            {isArabic ? 'تحتاج مساعدة في الاختيار؟' : 'Need help choosing?'}
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">
            {isArabic
              ? 'ابدأ بالمنتج المناسب للمكان الذي تريد أن يترك انطباعًا.'
              : 'Start with the product for the space that needs to leave an impression.'}
          </h2>
          <Button href={`/${params.locale}/contact`} variant="secondary" className="mt-9">
            {isArabic ? 'استشارة هادئة' : 'Ask for guidance'}
          </Button>
        </section>
      </Container>
    </>
  );
}
