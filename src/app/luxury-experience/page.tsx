import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const pillars = [
  ['الملمس', 'نعومة متوازنة تمنح كل استخدام إحساسًا فاخرًا من أول لمسة.'],
  ['القوة', 'ست طبقات حقيقية تجمع بين السماكة والثبات من دون خشونة.'],
  ['الامتصاص', 'أداء موثوق يناسب الاستخدام اليومي والضيافة والمكاتب الراقية.'],
  ['الحضور', 'تغليف أنيق يجعل العلبة جزءًا من ديكور المكان لا مجرد منتج استهلاكي.'],
];

export default function LuxuryExperiencePage() {
  return (
    <Container>
      <Section
        eyebrow="تجربة ديباج"
        title="تفاصيل صغيرة تصنع ضيافة لا تُنسى."
        description="ديباج رويال ليست مجرد مناديل. إنها جزء من طقس العناية اليومي: ملمس فاخر، حضور بصري راقٍ، وجودة تمنح المنزل والمجلس والمكتب انطباعًا أكثر اكتمالًا."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(([pillar, description]) => (
            <div
              key={pillar}
              className="rounded-[2rem] border border-sand-200 bg-cream-soft p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-honey">
                {pillar}
              </p>
              <p className="mt-5 text-sm leading-7 text-ink-soft">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}
