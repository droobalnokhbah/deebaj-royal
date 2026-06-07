'use client';

import { create } from 'zustand';
import type { Product } from '@/data/products';

export type CartItem = {
  productId: number;
  slug: string;
  nameAr: string;
  nameEn: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
};

function toCartItem(product: Product, quantity: number): CartItem {
  return {
    productId: product.id,
    slug: product.slug,
    nameAr: product.nameAr,
    nameEn: product.nameEn,
    price: product.price,
    image: product.images[0],
    quantity,
  };
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (product, quantity = 1) => {
    const safeQuantity = Math.max(1, Math.floor(quantity));

    set((state) => {
      const existingItem = state.items.find((item) => item.productId === product.id);

      if (!existingItem) {
        return {
          items: [...state.items, toCartItem(product, safeQuantity)],
        };
      }

      return {
        items: state.items.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + safeQuantity }
            : item,
        ),
      };
    });
  },
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId),
    }));
  },
  updateQuantity: (productId, quantity) => {
    const safeQuantity = Math.floor(quantity);

    set((state) => {
      if (safeQuantity <= 0) {
        return {
          items: state.items.filter((item) => item.productId !== productId),
        };
      }

      return {
        items: state.items.map((item) =>
          item.productId === productId ? { ...item, quantity: safeQuantity } : item,
        ),
      };
    });
  },
  clearCart: () => set({ items: [] }),
}));

export const selectCartItemCount = (state: CartState) =>
  state.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartSubtotal = (state: CartState) =>
  state.items.reduce((total, item) => total + item.price * item.quantity, 0);
