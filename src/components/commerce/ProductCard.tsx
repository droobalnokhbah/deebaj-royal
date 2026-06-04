import Link from 'next/link';
import Image from 'next/image';
import { SignaturePackage } from '@/components/brand/SignaturePackage';
import type { Product } from '@/data/products';
import { Button } from '@/components/ui/Button';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const name = product.nameAr;
  const tag = product.tagAr;
  const description = product.descAr;
  const href = `/product/${product.slug}`;
  const image = product.images[0];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-champagne/50 bg-cream shadow-[0_26px_80px_rgba(51,38,28,0.055)] transition-colors hover:border-gold/60">
      <Link href={href} className="block">
        <div className="bg-champagne-pale p-5">
          {image ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-champagne-warm/40 bg-cream shadow-inner">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          ) : (
            <SignaturePackage
              eyebrow="D E E B A J"
              title={tag}
              tone={product.category === 'gold' ? 'caramel' : 'ivory'}
              size="small"
            />
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="grid gap-5">
          <div>
            <h3 className="font-serif text-2xl font-medium text-ink">{name}</h3>
            <p className="mt-4 text-sm leading-8 text-ink-soft">{description}</p>
          </div>
          <p className="text-sm font-semibold text-honey">
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
      </div>
    </article>
  );
}
