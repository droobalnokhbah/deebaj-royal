import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function WholesalePage() {
  return (
    <Container>
      <Section
        eyebrow="للشركات والضيافة"
        title="توريد راقٍ يرفع تفاصيل المكان."
        description="نوفر حلول توريد مناسبة للفنادق، المطاعم، المكاتب، العيادات، وقاعات الضيافة التي تبحث عن منتج عملي بجودة ثابتة وحضور بصري يليق بتجربتها."
      >
        <div className="rounded-[2rem] border border-sand-200 bg-cream-soft p-8 sm:p-10">
          <h1 className="font-serif text-3xl font-medium text-ink">
            جودة يومية تليق بضيوفك وفريقك وعملائك.
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-ink-soft">
            احصل على كميات مخصصة، وتوريد منتظم، وخيارات تناسب حجم استهلاكك الشهري. ديباج رويال يمنح منشأتك منتجًا موثوقًا بتغليف أنيق يعكس مستوى المكان.
          </p>
          <Button href="mailto:info@deebajroyal.com" variant="secondary" className="mt-8">
            اطلب عرض سعر
          </Button>
        </div>
      </Section>
    </Container>
  );
}
