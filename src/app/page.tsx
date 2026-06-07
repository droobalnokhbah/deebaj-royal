import Image from 'next/image';
import { ProductCard } from '@/components/commerce/ProductCard';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PRODUCTS } from '@/data/products';

export default function HomePage() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  const trustSignals = [
    ['✦', 'شحن مجاني فوق ٣٠٠ ريال', 'توصيل موثوق داخل المملكة'],
    ['◇', 'جودة فاخرة', 'ست طبقات حقيقية وملمس راقٍ'],
    ['◌', 'توصيل سريع', 'تجهيز بعناية وتجربة مميزة'],
  ];

  const rituals = [
    ['01', 'نعومة لا تُفرض حضورها', 'ملمس فاخر مصمم للعناية اليومية الراقية.'],
    ['02', 'قوة في تفاصيل صغيرة', 'ست طبقات حقيقية تمنحك ثقة الاستخدام دون مبالغة.'],
    ['03', 'ضيافة تُشعر ولا تُقال', 'تغليف أنيق يليق بالمنازل والفنادق والمساحات الراقية.'],
  ];

  return (
    <>
      <section className="relative isolate min-h-[calc(100vh-7.25rem)] overflow-hidden border-b border-champagne/60 bg-cream">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_36%,rgba(215,188,130,0.34),transparent_34%),linear-gradient(135deg,#FBF7EF_0%,#F7EEDB_48%,#EFE1C8_100%)]" />
        <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute left-0 top-16 -z-10 h-96 w-96 rounded-full bg-champagne/25 blur-3xl" />
        <Container className="relative grid min-h-[calc(100vh-7.25rem)] items-center gap-12 py-14 sm:py-16 lg:grid-cols-[0.82fr_1.18fr] lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.38em] text-honey">
              ديباج رويال
            </p>
            <h1 className="font-serif text-3xl font-medium leading-[1.08] text-ink sm:text-4xl lg:text-5xl">
              رفاهية تُرى قبل أن تُلمس.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-9 text-ink-soft sm:text-xl sm:leading-10">
              مناديل فاخرة بست طبقات حقيقية، بتغليف يليق بالمنازل الراقية ومساحات الضيافة التي تهتم بالتفاصيل.
            </p>
            <div className="mt-11">
              <Button href="/shop" className="bg-gold-deep text-cream hover:bg-caramel-deep">
                استكشف المجموعة
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-3xl">
            <div className="rounded-[3.5rem] border border-champagne/70 bg-cream/45 p-3 shadow-[0_54px_140px_rgba(51,38,28,0.18)] backdrop-blur sm:p-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[3rem] border border-champagne-warm/40 bg-cream">
                <Image
                  src="/images/products/deebaj-classic.jpg"
                  alt="ديباج رويال كلاسيك"
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-cream/10" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-champagne/60 bg-champagne-pale text-ink-soft">
        <Container className="grid gap-4 py-8 md:grid-cols-3">
          {trustSignals.map(([icon, title, description]) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-[1.75rem] bg-cream/45 px-5 py-4 shadow-[0_12px_40px_rgba(51,38,28,0.035)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-lg text-honey">
                {icon}
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">{title}</span>
                <span className="mt-1 block text-xs leading-5 text-ink-soft">{description}</span>
              </span>
            </div>
          ))}
        </Container>
      </section>

      <Container>
        <Section
          eyebrow="التجربة"
          title="تُلمس ولا تُحسب"
          description="الرفاهية هنا ليست ازدحامًا بصريًا أو عروضًا صاخبة. إنها إيقاع متزن، ملمس موثوق، وتفاصيل تغليف تجعل المنتج جزءًا من المكان."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {rituals.map(([number, title, description]) => (
              <article
                key={number}
                className="rounded-[2.75rem] border border-champagne/60 bg-cream p-9 shadow-[0_24px_70px_rgba(51,38,28,0.055)]"
              >
                <p className="font-serif text-6xl text-gold">{number}</p>
                <h2 className="mt-10 font-serif text-4xl font-medium leading-tight text-ink">{title}</h2>
                <p className="mt-5 text-base leading-8 text-ink-soft">{description}</p>
              </article>
            ))}
          </div>
        </Section>
      </Container>

      <section className="bg-champagne-pale">
        <Container>
          <Section
            eyebrow="المجموعة"
            title="مجموعة ديباج رويال"
            description="منتجات مختارة بعناية، مرتبة لتبدأ بالحجم الأكبر ثم الاستخدامات اليومية، مع صور حقيقية وتفاصيل واضحة."
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
            <div className="rounded-[3.25rem] border border-champagne/60 bg-champagne-pale p-4 shadow-[0_36px_100px_rgba(51,38,28,0.12)] sm:p-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.65rem] border border-champagne-warm/40 bg-cream">
                <Image
                  src="/images/products/deebaj-classic-both.jpg"
                  alt="تغليف ديباج رويال الفاخر"
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-honey">
                التغليف الفاخر
              </p>
              <h2 className="font-serif text-5xl font-medium leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
                تفاصيل تجعل العلبة جزءًا من الديكور.
              </h2>
              <p className="mt-8 max-w-2xl text-xl leading-10 text-ink-soft">
                الألوان الراقية، اللمسات الذهبية، والمساحات النظيفة تمنح ديباج حضورًا أقرب للعطور الفاخرة والضيافة الراقية من متجر تقليدي للمناديل.
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
            description="الشحن، الضمان، وطرق الدفع ستظهر لاحقًا كعناصر دعم واضحة في مسار الشراء، لا ككتل مزدحمة تضعف الفخامة."
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
