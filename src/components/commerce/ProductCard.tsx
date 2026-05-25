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
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-sand-200 bg-cream shadow-sm transition-colors hover:border-gold">
      <Link href={href} className="block">
        <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-cream-soft via-cream to-gold-pale/50">
          <div className="text-center">
            <p className="font-logo text-xl tracking-[0.34em] text-honey">D E E B A J</p>
            <p className="mt-2 text-xs uppercase tracking-[0.32em] text-ink-mute">
              {tag}
            </p>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl font-medium text-ink">{name}</h3>
            <p className="mt-2 text-sm leading-7 text-ink-soft">{description}</p>
          </div>
          <p className="shrink-0 text-sm font-semibold text-honey">
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
