import Link from 'next/link';
import type { Product } from '@/data/products';
import { Button } from '@/components/ui/Button';

type ProductCardProps = {
  product: Product;
  locale: string;
};

export function ProductCard({ product, locale }: ProductCardProps) {
  const isArabic = locale === 'ar';
  const name = isArabic ? product.nameAr : product.nameEn;
  const tag = isArabic ? product.tagAr : product.tagEn;
  const description = isArabic ? product.descAr : product.descEn;
  const href = `/${locale}/product/${product.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2.25rem] border border-gold/15 bg-cream shadow-[0_24px_70px_rgba(61,38,20,0.07)] transition-colors hover:border-gold/50">
      <Link href={href} className="block">
        <div className="flex aspect-[4/3] items-center justify-center bg-[#f7ecd1] p-6">
          <div className="flex h-full w-full items-center justify-center rounded-[1.75rem] border border-gold/25 bg-cream/75 text-center shadow-inner">
            <div>
              <p className="font-logo text-xl tracking-[0.34em] text-honey">D E E B A J</p>
              <div className="mx-auto my-4 h-px w-20 bg-gold/50" />
              <p className="text-xs uppercase tracking-[0.32em] text-ink-mute">
              {tag}
              </p>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="grid gap-4">
          <div>
            <h3 className="font-serif text-2xl font-medium text-ink">{name}</h3>
            <p className="mt-3 text-sm leading-7 text-ink-soft">{description}</p>
          </div>
          <p className="text-sm font-semibold text-honey">
            {product.price} {isArabic ? 'ريال' : 'SAR'}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-ink-mute">
          <span className="rounded-full bg-cream-soft px-3 py-1">
            {isArabic ? `${product.specs.layers} طبقات` : `${product.specs.layers} layers`}
          </span>
          <span className="rounded-full bg-cream-soft px-3 py-1">
            {isArabic ? `${product.specs.sheets} منديل` : `${product.specs.sheets} sheets`}
          </span>
        </div>

        <Button href={href} variant="secondary" className="mt-8 w-full">
          {isArabic ? 'عرض المنتج' : 'View product'}
        </Button>
      </div>
    </article>
  );
}
