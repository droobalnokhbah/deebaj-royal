import Image from 'next/image';
import { ProductCard } from '@/components/commerce/ProductCard';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PRODUCTS } from '@/data/products';

export default function ShopPage() {
  const categoryLabels = [
    {
      key: 'classic',
      label: 'اليومي الراقي',
      count: PRODUCTS.filter((product) => product.category === 'classic').length,
    },
    {
      key: 'premium',
      label: 'الضيافة المسائية',
      count: PRODUCTS.filter((product) => product.category === 'premium').length,
    },
    {
      key: 'gold',
      label: 'إصدار الهدايا',
      count: PRODUCTS.filter((product) => product.category === 'gold').length,
    },
    {
      key: 'travel',
      label: 'للتنقل',
      count: PRODUCTS.filter((product) => product.category === 'travel').length,
    },
  ];

  const trustItems = ['شحن موثوق داخل المملكة', 'خيارات دفع متعددة لاحقًا', 'ست طبقات حقيقية', 'تغليف يليق بالضيافة'];

  return (
    <>
      <section className="border-b border-champagne/60 bg-champagne-pale">
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.34em] text-honey">
              مجموعة ديباج رويال
            </p>
            <h1 className="font-serif text-5xl font-medium leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              اكتشف النعومة كما تُقدّم في الضيافة الراقية.
            </h1>
            <p className="mt-7 text-lg leading-9 text-ink-soft sm:text-xl sm:leading-10">
              تجربة تسوق هادئة، بلا ازدحام أو خصومات صاخبة. اختر المنتج بحسب اللحظة: المنزل، الضيافة، المكتب، السفر، أو الهدايا.
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
          eyebrow="تصنيف هادئ"
          title="اختر بحسب الاستخدام، لا بحسب الضجيج."
          description="بدل بطاقات مزدحمة وعروض متداخلة، يركّز المتجر على وضوح الاستخدام، جودة الملمس، وحضور التغليف."
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
                <ProductCard product={product} />
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
            تحتاج مساعدة في الاختيار؟
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">
            ابدأ بالمنتج المناسب للمكان الذي تريد أن يترك انطباعًا.
          </h2>
          <Button href="/contact" variant="secondary" className="mt-9">
            استشارة هادئة
          </Button>
        </section>
      </Container>
    </>
  );
}
