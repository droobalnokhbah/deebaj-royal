import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const faqs = [
  {
    question: 'What makes Deebaj Royal different?',
    answer:
      'The brand focuses on premium materials, six-layer quality, and refined presentation for daily care and hospitality.',
  },
  {
    question: 'Is checkout active in Phase 1?',
    answer:
      'No. This phase creates the route foundation only. Checkout and payment integrations come later.',
  },
  {
    question: 'Will this become bilingual?',
    answer:
      'The structure already uses locale routes so Arabic and English content can be expanded cleanly.',
  },
];

export default function FAQPage() {
  return (
    <Container>
      <Section
        eyebrow="FAQ"
        title="Essential questions, ready for structured content"
        description="The full FAQ and FAQ schema can be added during the SEO phase."
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
