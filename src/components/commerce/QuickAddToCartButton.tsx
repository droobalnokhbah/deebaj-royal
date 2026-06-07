'use client';

import { useState } from 'react';
import type { Product } from '@/data/products';
import { useCartStore } from '@/lib/cart-store';

type QuickAddToCartButtonProps = {
  product: Product;
  label: string;
  addedLabel: string;
};

export function QuickAddToCartButton({ product, label, addedLabel }: QuickAddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [wasAdded, setWasAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, 1);
    setWasAdded(true);
    window.setTimeout(() => setWasAdded(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-caramel-deep px-6 text-sm font-semibold text-cream shadow-[0_18px_45px_rgba(51,38,28,0.13)] transition-colors hover:bg-ink focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream"
    >
      {wasAdded ? addedLabel : label}
    </button>
  );
}
