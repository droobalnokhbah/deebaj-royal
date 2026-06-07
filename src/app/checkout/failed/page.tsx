import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

type CheckoutFailedPageProps = {
  searchParams: {
    reason?: string;
  };
};

export default function CheckoutFailedPage({ searchParams }: CheckoutFailedPageProps) {
  return (
    <Container>
      <Section
        eyebrow="تعذر إتمام الطلب"
        title="لم تكتمل عملية الدفع"
        description="يمكنك العودة إلى صفحة إتمام الطلب واختيار طريقة دفع أخرى، أو استخدام التحويل البنكي والدفع عند الاستلام."
      >
        <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-champagne/60 bg-cream p-8 text-center shadow-[0_22px_70px_rgba(51,38,28,0.05)]">
          {searchParams.reason && (
            <p className="rounded-2xl bg-champagne-pale px-4 py-3 text-sm text-ink-soft">
              {searchParams.reason}
            </p>
          )}

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/checkout"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-caramel-deep px-7 text-sm font-semibold text-cream"
            >
              العودة لإتمام الطلب
            </Link>
            <Link
              href="/shop"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-champagne-warm/40 px-7 text-sm font-semibold text-ink"
            >
              تصفح المنتجات
            </Link>
          </div>
        </div>
      </Section>
    </Container>
  );
}
