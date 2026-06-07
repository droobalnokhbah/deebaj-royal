'use client';

import { useState } from 'react';
import type { Product } from '@/data/products';
import { useCartStore } from '@/lib/cart-store';

type ProductPurchaseControlsProps = {
  product: Product;
};

export function ProductPurchaseControls({ product }: ProductPurchaseControlsProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [confirmation, setConfirmation] = useState('');

  const decrease = () => setQuantity((current) => Math.max(1, current - 1));
  const increase = () => setQuantity((current) => current + 1);

  const handleAdd = () => {
    addItem(product, quantity);
    setConfirmation(`تمت إضافة ${quantity} × ${product.nameAr} إلى السلة`);
    window.setTimeout(() => setConfirmation(''), 2400);
  };

  return (
    <div className="mt-10 rounded-[2rem] border border-champagne-warm/40 bg-cream/80 p-5 shadow-[0_18px_50px_rgba(51,38,28,0.05)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex min-h-12 items-center justify-between rounded-full border border-champagne-warm/50 bg-champagne-pale px-3 sm:w-40">
          <button
            type="button"
            onClick={decrease}
            aria-label="تقليل الكمية"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-xl text-ink transition-colors hover:bg-champagne"
          >
            -
          </button>
          <span className="min-w-10 text-center text-base font-semibold text-ink">
            {quantity}
          </span>
          <button
            type="button"
            onClick={increase}
            aria-label="زيادة الكمية"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-xl text-ink transition-colors hover:bg-champagne"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-caramel-deep px-7 text-sm font-semibold text-cream shadow-[0_18px_45px_rgba(51,38,28,0.13)] transition-colors hover:bg-ink focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream"
        >
          أضف إلى السلة
        </button>
      </div>

      {confirmation && (
        <p className="mt-4 rounded-2xl bg-champagne-pale px-4 py-3 text-sm text-ink-soft">
          {confirmation}
        </p>
      )}
    </div>
  );
}
