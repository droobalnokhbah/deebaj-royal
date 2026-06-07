import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const faqs = [
  {
    question: 'ما الذي يميز ديباج رويال؟',
    answer:
      'تركّز ديباج رويال على خامات مختارة، جودة ست طبقات، وتقديم بصري راقٍ يليق بالعناية اليومية والضيافة الراقية.',
  },
  {
    question: 'هل الدفع مفعّل الآن؟',
    answer:
      'الدفع الفعلي غير مفعّل في هذه المرحلة. سيتم ربط تجربة الشراء والدفع لاحقًا.',
  },
  {
    question: 'هل تعمل الروابط بدون بادئة لغة؟',
    answer:
      'نعم. الموقع عربي فقط الآن ويعمل مباشرة من الروابط النظيفة مثل /shop و /product/[slug].',
  },
];

export default function FAQPage() {
  return (
    <Container>
      <Section
        eyebrow="الأسئلة الشائعة"
        title="إجابات راقية وواضحة"
        description="سيتم توسيع الأسئلة وإضافة البيانات المنظمة خلال مرحلة تحسين SEO."
      >
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[2rem] border border-sand-200 bg-cream p-6"
            >
              <h1 className="text-lg font-semibold text-ink">{faq.question}</h1>
              <p className="mt-3 leading-8 text-ink-soft">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}
