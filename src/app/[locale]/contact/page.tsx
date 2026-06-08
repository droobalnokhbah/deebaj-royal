import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getDictionary } from '@/lib/i18n';
import { isLocale, type Locale } from '@/lib/i18n/types';

type ContactPageProps = {
  params: { locale: string };
};

export default function ContactPage({ params }: ContactPageProps) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'ar';
  const dictionary = getDictionary(locale);

  return (
    <Container>
      <Section
        eyebrow={dictionary.contact.eyebrow}
        title={dictionary.contact.title}
        description={dictionary.contact.description}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-sand-200 bg-cream-soft p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-honey">
              {dictionary.contact.whatsapp}
            </p>
            <p className="mt-4 text-2xl font-semibold text-ink">+966 53 570 8120</p>
          </div>
          <div className="rounded-[2rem] border border-sand-200 bg-cream-soft p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-honey">
              {dictionary.contact.email}
            </p>
            <p className="mt-4 text-2xl font-semibold text-ink">
              info@deebajroyal.com
            </p>
          </div>
        </div>
        <Button href="mailto:info@deebajroyal.com" variant="secondary" className="mt-8">
          {dictionary.contact.cta}
        </Button>
      </Section>
    </Container>
  );
}
