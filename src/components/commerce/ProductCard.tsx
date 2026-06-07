import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { QuickAddToCartButton } from '@/components/commerce/QuickAddToCartButton';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const name = product.nameAr;
  const description = product.descAr;
  const href = `/product/${product.slug}`;
  const image = product.images[0];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2.75rem] border border-champagne/55 bg-cream shadow-[0_22px_70px_rgba(51,38,28,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_34px_100px_rgba(51,38,28,0.13)]">
      <Link href={href} className="block">
        <div className="bg-champagne-pale p-4 sm:p-5">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-champagne-warm/40 bg-[#fffaf1] p-5 shadow-inner sm:p-6">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
              className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.025] sm:p-5"
            />
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="grid gap-5">
          <div>
            <h3 className="font-serif text-3xl font-medium leading-tight text-ink">{name}</h3>
            <p className="mt-4 text-sm leading-8 text-ink-soft">{description}</p>
          </div>
          <p className="text-base font-semibold text-honey">
            {product.price} ريال
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2 text-xs text-ink-mute">
          <span className="rounded-full bg-champagne-pale px-3 py-1">
            {product.specs.layers} طبقات
          </span>
          <span className="rounded-full bg-champagne-pale px-3 py-1">
            {product.specs.sheets} منديل
          </span>
        </div>

        <Button href={href} variant="secondary" className="mt-8 w-full">
          عرض المنتج
        </Button>
        <QuickAddToCartButton product={product} />
      </div>
    </article>
  );
}
