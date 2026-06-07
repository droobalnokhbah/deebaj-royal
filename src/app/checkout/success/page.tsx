import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

type CheckoutSuccessPageProps = {
  searchParams: {
    order?: string;
    method?: string;
  };
};

export default function CheckoutSuccessPage({ searchParams }: CheckoutSuccessPageProps) {
  const isBankTransfer = searchParams.method === 'bank';
  const isCod = searchParams.method === 'cod';

  return (
    <Container>
      <Section
        eyebrow="تم استلام الطلب"
        title={
          isBankTransfer
            ? 'طلبك بانتظار تأكيد التحويل'
            : isCod
              ? 'تم تأكيد طلب الدفع عند الاستلام'
              : 'تم إنشاء الطلب بنجاح'
        }
        description="سيقوم فريق ديباج رويال بمراجعة الطلب والتواصل معك لتأكيد التفاصيل."
      >
        <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-champagne/60 bg-cream p-8 text-center shadow-[0_22px_70px_rgba(51,38,28,0.05)]">
          {searchParams.order && (
            <p className="text-sm text-ink-soft">
              رقم الطلب
              <span className="mx-2 font-semibold text-caramel">{searchParams.order}</span>
            </p>
          )}

          {isBankTransfer && (
            <p className="mt-5 leading-8 text-ink-soft">
              يرجى إرسال إثبات التحويل عبر واتساب ليتم تأكيد الطلب وتجهيزه.
            </p>
          )}

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-caramel-deep px-7 text-sm font-semibold text-cream"
            >
              العودة للمنتجات
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-champagne-warm/40 px-7 text-sm font-semibold text-ink"
            >
              الصفحة الرئيسية
            </Link>
          </div>
        </div>
      </Section>
    </Container>
  );
}
