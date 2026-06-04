import { ProductCard } from '@/components/commerce/ProductCard';
import { SignaturePackage } from '@/components/brand/SignaturePackage';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getFeaturedProducts } from '@/data/products';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  const trustSignals = ['شحن مجاني فوق ٢٠٠ ريال', 'ضمان رضا ١٤ يوم', 'معتمد للسوق السعودي'];

  const rituals = [
    ['01', 'نعومة لا تُفرض حضورها', 'ملمس هادئ مصمم للعناية اليومية الراقية.'],
    ['02', 'قوة في تفاصيل صغيرة', 'ست طبقات حقيقية تمنحك ثقة الاستخدام دون مبالغة.'],
    ['03', 'ضيافة تُشعر ولا تُقال', 'تغليف أنيق يليق بالمنازل والفنادق والمساحات الهادئة.'],
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-champagne/60 bg-cream">
        <div className="absolute inset-x-0 top-0 h-56 bg-champagne-pale" />
        <Container className="relative grid min-h-[82vh] items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.34em] text-honey">
              ديباج رويال
            </p>
            <h1 className="font-serif text-6xl font-medium leading-[0.98] text-ink sm:text-7xl lg:text-8xl">
              رفاهية تشعر بها من أول لمسة.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-ink-soft sm:text-xl sm:leading-10">
              مناديل فاخرة بست طبقات حقيقية، صُممت لتمنح تفاصيلك اليومية إحساس الضيافة الراقية وهدوء الفنادق الفاخرة.
            </p>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Button href="/shop">
                استكشف المجموعة
              </Button>
              <Button href="/luxury-experience" variant="secondary">
                قصة النعومة
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl">
            <SignaturePackage
              eyebrow="D E E B A J"
              title="R O Y A L"
              subtitle="نعومة القطن بلمسة الحرير"
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-champagne/50 bg-champagne-pale text-ink-soft">
        <Container className="grid gap-4 py-7 text-center text-sm md:grid-cols-3">
          {trustSignals.map((signal) => (
            <p key={signal}>{signal}</p>
          ))}
        </Container>
      </section>

      <Container>
        <Section
          eyebrow="التجربة"
          title="تُلمس ولا تُحسب"
          description="الرفاهية هنا ليست ازدحامًا بصريًا أو عروضًا صاخبة. إنها إيقاع هادئ، ملمس موثوق، وتفاصيل تغليف تجعل المنتج جزءًا من المكان."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {rituals.map(([number, title, description]) => (
              <article
                key={number}
                className="rounded-[2.5rem] border border-champagne/50 bg-cream p-8 shadow-[0_20px_60px_rgba(51,38,28,0.045)]"
              >
                <p className="font-serif text-5xl text-gold">{number}</p>
                <h2 className="mt-8 font-serif text-3xl font-medium text-ink">{title}</h2>
                <p className="mt-4 text-sm leading-8 text-ink-soft">{description}</p>
              </article>
            ))}
          </div>
        </Section>
      </Container>

      <section className="bg-champagne-pale">
        <Container>
          <Section
            eyebrow="المجموعة"
            title="منتجات مختارة بلا ازدحام"
            description="نقدّم المنتجات بإيقاع هادئ ومساحة كافية لفهم الاستخدام والملمس، بدل بطاقات مزدحمة أو خصومات عالية الصوت."
          >
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Section>
        </Container>
      </section>

      <Container>
        <Section className="lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SignaturePackage
              eyebrow="D E E B A J"
              title="ROYAL HONEY"
              subtitle="واجهة هادئة، حضور لا يُنسى"
              tone="caramel"
            />
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-honey">
                التغليف الفاخر
              </p>
              <h2 className="font-serif text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
                تفاصيل تجعل العلبة جزءًا من الديكور.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-9 text-ink-soft">
                الألوان الهادئة، اللمسات الذهبية، والمساحات النظيفة تمنح ديباج حضورًا أقرب للعطور الفاخرة والضيافة الراقية من متجر تقليدي للمناديل.
              </p>
            </div>
          </div>
        </Section>
      </Container>

      <section className="bg-cream-warm">
        <Container>
          <Section
            eyebrow="للضيافة والمنازل الراقية"
            title="ثقة واضحة بدون ازدحام"
            description="الشحن، الضمان، وطرق الدفع ستظهر لاحقًا كعناصر دعم هادئة في مسار الشراء، لا ككتل مزدحمة تضعف الفخامة."
          >
            <div className="grid gap-4 md:grid-cols-3">
              {['توصيل سريع وآمن', 'ضمان رضا ١٤ يوم', 'مناسب للمنازل والضيافة'].map((item) => (
                <div
                  key={item}
                  className="rounded-[2rem] border border-champagne-warm/40 bg-cream/70 p-7 text-center text-sm font-semibold text-ink shadow-[0_14px_40px_rgba(51,38,28,0.04)]"
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
            ديباج رويال
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            منتج يومي، بإحساس لا يشبه اليومي.
          </h2>
          <div className="mt-10">
            <Button href="/shop" variant="secondary">
              عرض المجموعة
            </Button>
          </div>
        </section>
      </Container>
    </>
  );
}
