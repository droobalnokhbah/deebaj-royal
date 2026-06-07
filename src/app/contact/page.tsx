import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function ContactPage() {
  return (
    <Container>
      <Section
        eyebrow="تواصل معنا"
        title="يسعدنا مساعدتك في اختيار ما يليق بمكانك."
        description="سواء كنت تبحث عن طلب منزلي، اشتراك منتظم، أو توريد لمنشأة ضيافة، فريق ديباج رويال جاهز للإجابة وتقديم الاقتراح الأنسب."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-sand-200 bg-cream-soft p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-honey">
              واتساب
            </p>
            <p className="mt-4 text-2xl font-semibold text-ink">+966 58 020 9346</p>
          </div>
          <div className="rounded-[2rem] border border-sand-200 bg-cream-soft p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-honey">
              البريد الإلكتروني
            </p>
            <p className="mt-4 text-2xl font-semibold text-ink">
              info@deebajroyal.com
            </p>
          </div>
        </div>
        <Button href="mailto:info@deebajroyal.com" variant="secondary" className="mt-8">
          راسلنا الآن
        </Button>
      </Section>
    </Container>
  );
}
