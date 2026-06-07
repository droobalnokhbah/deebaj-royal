'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useMemo, useState } from 'react';
import {
  selectCartSubtotal,
  useCartStore,
  type CartItem,
} from '@/lib/cart-store';

const WHATSAPP_NUMBER = '9665XXXXXXXX';
const FREE_SHIPPING_THRESHOLD = 200;

const shippingOptions = [
  {
    id: 'express',
    label: 'الرياض / جدة / الدمام — توصيل سريع',
    description: 'توصيل سريع للمدن الرئيسية',
    cost: 25,
  },
  {
    id: 'other',
    label: 'باقي المدن',
    description: 'شحن موثوق لباقي مناطق المملكة',
    cost: 35,
  },
  {
    id: 'pickup',
    label: 'استلام',
    description: 'بدون رسوم شحن',
    cost: 0,
  },
] as const;

type ShippingOptionId = (typeof shippingOptions)[number]['id'];

type CustomerForm = {
  name: string;
  phone: string;
  city: string;
  address: string;
  notes: string;
};

function formatSar(value: number) {
  return `${value.toLocaleString('ar-SA')} ريال`;
}

function buildItemsMessage(items: CartItem[]) {
  return items
    .map(
      (item, index) =>
        `${index + 1}. ${item.nameAr} — الكمية: ${item.quantity} — السعر: ${formatSar(
          item.price * item.quantity,
        )}`,
    )
    .join('\n');
}

export function CheckoutClient() {
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore(selectCartSubtotal);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  const [shippingId, setShippingId] = useState<ShippingOptionId>('express');
  const [customer, setCustomer] = useState<CustomerForm>({
    name: '',
    phone: '',
    city: '',
    address: '',
    notes: '',
  });

  const selectedShipping = shippingOptions.find((option) => option.id === shippingId)!;
  const shippingCost = useMemo(() => {
    if (selectedShipping.id === 'pickup') {
      return 0;
    }

    return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : selectedShipping.cost;
  }, [selectedShipping, subtotal]);
  const total = subtotal + shippingCost;

  const handleCustomerChange = (field: keyof CustomerForm, value: string) => {
    setCustomer((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (items.length === 0) {
      return;
    }

    const message = [
      'طلب جديد من موقع ديباج رويال',
      '',
      'المنتجات:',
      buildItemsMessage(items),
      '',
      `المجموع الفرعي: ${formatSar(subtotal)}`,
      `الشحن: ${shippingCost === 0 ? 'مجاني' : formatSar(shippingCost)} (${selectedShipping.label})`,
      `الإجمالي: ${formatSar(total)}`,
      '',
      'بيانات العميل:',
      `الاسم: ${customer.name}`,
      `الجوال: ${customer.phone}`,
      `المدينة: ${customer.city}`,
      `العنوان: ${customer.address}`,
      customer.notes ? `ملاحظات: ${customer.notes}` : 'ملاحظات: لا يوجد',
    ].join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-8">
        <section className="rounded-[2.5rem] border border-champagne/60 bg-cream p-5 shadow-[0_22px_70px_rgba(51,38,28,0.05)] sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-honey">
                السلة
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
                مراجعة الطلب
              </h2>
            </div>
            {items.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                className="rounded-full border border-champagne-warm/40 px-4 py-2 text-sm text-ink-soft transition-colors hover:border-honey hover:text-honey"
              >
                تفريغ السلة
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="mt-8 rounded-[2rem] bg-champagne-pale p-6 text-center">
              <p className="text-ink-soft">السلة فارغة حاليًا.</p>
              <Link
                href="/shop"
                className="mt-5 inline-flex rounded-full bg-caramel-deep px-6 py-3 text-sm font-semibold text-cream"
              >
                العودة للمنتجات
              </Link>
            </div>
          ) : (
            <div className="mt-8 grid gap-5">
              {items.map((item) => (
                <article
                  key={item.productId}
                  className="grid gap-4 rounded-[2rem] border border-champagne-warm/40 bg-champagne-pale p-4 sm:grid-cols-[96px_1fr] sm:items-center"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-cream">
                    <Image
                      src={item.image}
                      alt={item.nameAr}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div>
                      <h3 className="font-serif text-2xl font-medium text-ink">
                        {item.nameAr}
                      </h3>
                      <p className="mt-2 text-sm text-ink-soft">
                        {formatSar(item.price)} للقطعة
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex h-11 items-center rounded-full border border-champagne-warm/50 bg-cream px-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-ink hover:bg-champagne-pale"
                        >
                          -
                        </button>
                        <span className="min-w-9 text-center text-sm font-semibold text-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-ink hover:bg-champagne-pale"
                        >
                          +
                        </button>
                      </div>

                      <p className="min-w-24 text-sm font-semibold text-caramel">
                        {formatSar(item.price * item.quantity)}
                      </p>

                      <button
                        type="button"
                        onClick={() => removeItem(item.productId)}
                        className="rounded-full px-3 py-2 text-sm text-ink-mute hover:bg-cream hover:text-honey"
                      >
                        إزالة
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="rounded-[2.5rem] border border-champagne/60 bg-cream p-5 shadow-[0_22px_70px_rgba(51,38,28,0.05)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-honey">
            التوصيل
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
            اختر طريقة الشحن
          </h2>
          <div className="mt-7 grid gap-4">
            {shippingOptions.map((option) => {
              const displayCost =
                option.id !== 'pickup' && subtotal >= FREE_SHIPPING_THRESHOLD
                  ? 'مجاني'
                  : option.cost === 0
                    ? 'مجاني'
                    : formatSar(option.cost);

              return (
                <label
                  key={option.id}
                  className="flex cursor-pointer items-start gap-4 rounded-[2rem] border border-champagne-warm/40 bg-champagne-pale p-5 transition-colors has-[:checked]:border-honey has-[:checked]:bg-cream"
                >
                  <input
                    type="radio"
                    name="shipping"
                    value={option.id}
                    checked={shippingId === option.id}
                    onChange={() => setShippingId(option.id)}
                    className="mt-1"
                  />
                  <span className="flex-1">
                    <span className="block font-semibold text-ink">{option.label}</span>
                    <span className="mt-1 block text-sm text-ink-soft">
                      {option.description}
                    </span>
                  </span>
                  <span className="text-sm font-semibold text-caramel">{displayCost}</span>
                </label>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-ink-mute">
            الشحن مجاني للطلبات فوق {FREE_SHIPPING_THRESHOLD} ريال.
          </p>
        </section>

        <section className="rounded-[2.5rem] border border-champagne/60 bg-cream p-5 shadow-[0_22px_70px_rgba(51,38,28,0.05)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-honey">
            بيانات العميل
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
            معلومات التوصيل
          </h2>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-ink-soft">
              الاسم الكامل
              <input
                required
                value={customer.name}
                onChange={(event) => handleCustomerChange('name', event.target.value)}
                className="min-h-12 rounded-2xl border border-champagne-warm/40 bg-champagne-pale px-4 text-ink outline-none focus:border-honey"
              />
            </label>

            <label className="grid gap-2 text-sm text-ink-soft">
              رقم الجوال
              <input
                required
                type="tel"
                value={customer.phone}
                onChange={(event) => handleCustomerChange('phone', event.target.value)}
                className="min-h-12 rounded-2xl border border-champagne-warm/40 bg-champagne-pale px-4 text-ink outline-none focus:border-honey"
              />
            </label>

            <label className="grid gap-2 text-sm text-ink-soft">
              المدينة
              <input
                required
                value={customer.city}
                onChange={(event) => handleCustomerChange('city', event.target.value)}
                className="min-h-12 rounded-2xl border border-champagne-warm/40 bg-champagne-pale px-4 text-ink outline-none focus:border-honey"
              />
            </label>

            <label className="grid gap-2 text-sm text-ink-soft sm:col-span-2">
              العنوان التفصيلي
              <input
                required
                value={customer.address}
                onChange={(event) => handleCustomerChange('address', event.target.value)}
                className="min-h-12 rounded-2xl border border-champagne-warm/40 bg-champagne-pale px-4 text-ink outline-none focus:border-honey"
              />
            </label>

            <label className="grid gap-2 text-sm text-ink-soft sm:col-span-2">
              ملاحظات
              <textarea
                rows={4}
                value={customer.notes}
                onChange={(event) => handleCustomerChange('notes', event.target.value)}
                className="rounded-2xl border border-champagne-warm/40 bg-champagne-pale px-4 py-3 text-ink outline-none focus:border-honey"
              />
            </label>
          </div>
        </section>
      </div>

      <aside className="h-fit rounded-[2.5rem] border border-champagne/60 bg-champagne-pale p-5 shadow-[0_22px_70px_rgba(51,38,28,0.06)] sm:p-8 lg:sticky lg:top-32">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-honey">
          الإجمالي
        </p>
        <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
          ملخص الطلب
        </h2>

        <div className="mt-8 grid gap-4 text-sm text-ink-soft">
          <div className="flex justify-between gap-4">
            <span>المجموع الفرعي</span>
            <span className="font-semibold text-ink">{formatSar(subtotal)}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span>الشحن</span>
            <span className="font-semibold text-ink">
              {shippingCost === 0 ? 'مجاني' : formatSar(shippingCost)}
            </span>
          </div>
          <div className="border-t border-champagne-warm/40 pt-4">
            <div className="flex items-end justify-between gap-4">
              <span className="text-base text-ink">الإجمالي</span>
              <span className="font-serif text-4xl font-medium text-caramel">
                {formatSar(total)}
              </span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={items.length === 0}
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-caramel-deep px-7 text-sm font-semibold text-cream shadow-[0_18px_45px_rgba(51,38,28,0.13)] transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:bg-ink-mute"
        >
          إتمام الطلب عبر واتساب
        </button>

        <p className="mt-4 text-center text-xs leading-6 text-ink-mute">
          سيتم فتح واتساب برسالة جاهزة تحتوي على تفاصيل الطلب.
        </p>
      </aside>
    </form>
  );
}
