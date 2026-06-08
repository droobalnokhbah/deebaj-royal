'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  selectCartSubtotal,
  useCartStore,
  type CartItem,
} from '@/lib/cart-store';
import { localizedPath, type Dictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n/types';

const FREE_SHIPPING_THRESHOLD = 200;
const BANK_NAME = 'مصرف الراجحي';
const BANK_NAME_EN = 'Al Rajhi Bank';
const BANK_ACCOUNT_NAME = 'مؤسسة دروب الرقمية الحديثة للخدمات التسويقية';
const BANK_IBAN_PLACEHOLDER = '__IBAN__';
const WHATSAPP_RECEIPT_URL = 'https://wa.me/966580209346';

type PaymentAvailability = {
  moyasar: boolean;
  tabby: boolean;
  tamara: boolean;
};

type CheckoutClientProps = {
  locale: Locale;
  dictionary: Dictionary['checkout'];
  paymentAvailability: PaymentAvailability;
};

const shippingCompanies = [
  {
    id: 'aramex',
    label: 'أرامكس',
    labelEn: 'Aramex',
    description: 'شركة شحن موثوقة داخل المملكة',
    cost: 30,
  },
  {
    id: 'smsa',
    label: 'سمسا',
    labelEn: 'SMSA',
    description: 'توصيل سريع للمدن الرئيسية وباقي المناطق',
    cost: 30,
  },
  {
    id: 'spl',
    label: 'البريد السعودي (سبل)',
    labelEn: 'SPL',
    description: 'خدمة وطنية مناسبة لمختلف المناطق',
    cost: 30,
  },
  {
    id: 'dhl',
    label: 'DHL',
    labelEn: 'DHL',
    description: 'خيار شحن سريع عند توفره',
    cost: 30,
  },
] as const;

const paymentMethods = [
  {
    id: 'mada',
    label: 'مدى',
    logo: 'mada',
    gateway: 'moyasar',
    note: 'عبر Moyasar',
  },
  {
    id: 'creditcard',
    label: 'فيزا / ماستركارد',
    logo: 'VISA',
    gateway: 'moyasar',
    note: 'بطاقات ائتمانية',
  },
  {
    id: 'applepay',
    label: 'Apple Pay',
    logo: 'Pay',
    gateway: 'moyasar',
    note: 'دفع سريع',
  },
  {
    id: 'stcpay',
    label: 'STC Pay',
    logo: 'STC',
    gateway: 'moyasar',
    note: 'محفظة رقمية',
  },
  {
    id: 'tabby',
    label: 'Tabby',
    logo: 'tabby',
    gateway: 'tabby',
    note: 'تقسيط',
  },
  {
    id: 'tamara',
    label: 'Tamara',
    logo: 'tamara',
    gateway: 'tamara',
    note: 'تقسيط',
  },
  {
    id: 'bank',
    label: 'التحويل البنكي',
    logo: 'IBAN',
    gateway: 'manual',
    note: 'بانتظار تأكيد التحويل',
  },
  {
    id: 'cod',
    label: 'الدفع عند الاستلام',
    logo: 'COD',
    gateway: 'manual',
    note: 'يؤكد الطلب مباشرة',
  },
] as const;

type ShippingCompanyId = (typeof shippingCompanies)[number]['id'];
type PaymentMethodId = (typeof paymentMethods)[number]['id'];

type CustomerForm = {
  name: string;
  phone: string;
  city: string;
  address: string;
  notes: string;
};

type OrderPayload = {
  locale: Locale;
  items: CartItem[];
  customer: CustomerForm;
  shipping: {
    id: ShippingCompanyId;
    label: string;
    cost: number;
  };
  payment: {
    id: PaymentMethodId;
    label: string;
    status: string;
  };
  totals: {
    subtotal: number;
    shipping: number;
    total: number;
  };
};

function formatSar(value: number) {
  return `${value.toLocaleString('ar-SA')} ريال`;
}

function getItemName(item: CartItem, locale: Locale) {
  return locale === 'ar' ? item.nameAr : item.nameEn;
}

function isMethodEnabled(
  method: (typeof paymentMethods)[number],
  availability: PaymentAvailability,
) {
  if (method.gateway === 'manual') {
    return true;
  }

  return availability[method.gateway];
}

async function saveOrder(order: OrderPayload) {
  try {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      return { orderId: `DR-${Date.now()}`, saved: false };
    }

    return response.json() as Promise<{ orderId: string; saved: boolean }>;
  } catch {
    return { orderId: `DR-${Date.now()}`, saved: false };
  }
}

export function CheckoutClient({ locale, dictionary, paymentAvailability }: CheckoutClientProps) {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore(selectCartSubtotal);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  const [shippingId, setShippingId] = useState<ShippingCompanyId>('aramex');
  const [paymentId, setPaymentId] = useState<PaymentMethodId>('cod');
  const [customer, setCustomer] = useState<CustomerForm>({
    name: '',
    phone: '',
    city: '',
    address: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const selectedShipping = shippingCompanies.find((option) => option.id === shippingId)!;
  const selectedPayment = paymentMethods.find((method) => method.id === paymentId)!;
  const shippingCost = useMemo(() => {
    return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : selectedShipping.cost;
  }, [selectedShipping, subtotal]);
  const total = subtotal + shippingCost;

  const handleCustomerChange = (field: keyof CustomerForm, value: string) => {
    setCustomer((current) => ({ ...current, [field]: value }));
  };

  const createOrderPayload = (paymentStatus: string): OrderPayload => ({
    locale,
    items,
    customer,
    shipping: {
      id: selectedShipping.id,
      label: dictionary.shippingOptions[selectedShipping.id][0],
      cost: shippingCost,
    },
    payment: {
      id: selectedPayment.id,
      label: dictionary.paymentMethods[selectedPayment.id][0],
      status: paymentStatus,
    },
    totals: {
      subtotal,
      shipping: shippingCost,
      total,
    },
  });

  const handleGatewayPayment = async (orderId: string, order: OrderPayload) => {
    const gatewayPath =
      selectedPayment.gateway === 'moyasar'
        ? '/api/payment/moyasar'
        : selectedPayment.gateway === 'tabby'
          ? '/api/payment/tabby'
          : '/api/payment/tamara';

    const response = await fetch(gatewayPath, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId,
        method: selectedPayment.id,
        order,
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data?.message || dictionary.failedError);
    }

    if (data.checkoutUrl) {
      window.location.href = data.checkoutUrl;
      return;
    }

    clearCart();
    router.push(`${localizedPath(locale, '/checkout/success')}?order=${encodeURIComponent(orderId)}`);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (items.length === 0) {
      setError(dictionary.emptyError);
      return;
    }

    if (!isMethodEnabled(selectedPayment, paymentAvailability)) {
      setError(dictionary.inactivePaymentError);
      return;
    }

    setIsSubmitting(true);

    try {
      const paymentStatus =
        selectedPayment.id === 'bank'
          ? dictionary.paymentStatus.bank
          : selectedPayment.id === 'cod'
            ? dictionary.paymentStatus.cod
            : dictionary.paymentStatus.online;
      const order = createOrderPayload(paymentStatus);
      const savedOrder = await saveOrder(order);
      const orderId = savedOrder.orderId || `DR-${Date.now()}`;

      if (selectedPayment.id === 'bank' || selectedPayment.id === 'cod') {
        clearCart();
        router.push(`${localizedPath(locale, '/checkout/success')}?order=${encodeURIComponent(orderId)}&method=${selectedPayment.id}`);
        return;
      }

      await handleGatewayPayment(orderId, order);
    } catch (caughtError) {
      const message =
        caughtError instanceof Error ? caughtError.message : dictionary.failedError;
      router.push(`${localizedPath(locale, '/checkout/failed')}?reason=${encodeURIComponent(message)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-8">
        <section className="rounded-[2.5rem] border border-champagne/60 bg-cream p-5 shadow-[0_22px_70px_rgba(51,38,28,0.05)] sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-honey">
                {dictionary.cart}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
                {dictionary.reviewOrder}
              </h2>
            </div>
            {items.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                className="rounded-full border border-champagne-warm/40 px-4 py-2 text-sm text-ink-soft transition-colors hover:border-honey hover:text-honey"
              >
                {dictionary.clearCart}
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="mt-8 rounded-[2rem] bg-champagne-pale p-6 text-center">
              <p className="text-ink-soft">{dictionary.emptyCart}</p>
              <Link
                href={localizedPath(locale, '/shop')}
                className="mt-5 inline-flex rounded-full bg-caramel-deep px-6 py-3 text-sm font-semibold text-cream"
              >
                {dictionary.backToProducts}
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
                        {getItemName(item, locale)}
                      </h3>
                      <p className="mt-2 text-sm text-ink-soft">
                        {formatSar(item.price)} {dictionary.perItem}
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
                      {dictionary.remove}
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
            {dictionary.shippingCompany}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
            {dictionary.chooseShipping}
          </h2>
          <div className="mt-7 grid gap-4">
            {shippingCompanies.map((option) => {
              const displayCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 'مجاني' : formatSar(option.cost);

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
                    <span className="block font-semibold text-ink">
                      {dictionary.shippingOptions[option.id][0]}{' '}
                      <span className="text-ink-mute">{dictionary.shippingOptions[option.id][1]}</span>
                    </span>
                    <span className="mt-1 block text-sm text-ink-soft">
                      {dictionary.shippingOptions[option.id][2]}
                    </span>
                  </span>
                  <span className="text-sm font-semibold text-caramel">{displayCost}</span>
                </label>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-ink-mute">
            {dictionary.freeShippingOver}
          </p>
        </section>

        <section className="rounded-[2.5rem] border border-champagne/60 bg-cream p-5 shadow-[0_22px_70px_rgba(51,38,28,0.05)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-honey">
            {dictionary.paymentMethod}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
            {dictionary.choosePayment}
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {paymentMethods.map((method) => {
              const enabled = isMethodEnabled(method, paymentAvailability);

              return (
                <label
                  key={method.id}
                  className={`relative flex min-h-28 cursor-pointer flex-col justify-between rounded-[2rem] border p-5 transition-colors ${
                    enabled
                      ? 'border-champagne-warm/40 bg-champagne-pale has-[:checked]:border-honey has-[:checked]:bg-cream'
                      : 'cursor-not-allowed border-sand-200 bg-sand-100/60 opacity-70'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method.id}
                    checked={paymentId === method.id}
                    disabled={!enabled}
                    onChange={() => setPaymentId(method.id)}
                    className="sr-only"
                  />
                  <span className="flex items-start justify-between gap-4">
                    <span className="text-lg font-semibold text-ink">{dictionary.paymentMethods[method.id][0]}</span>
                    <span className="rounded-full border border-champagne-warm/50 bg-cream px-3 py-1 text-xs font-semibold text-caramel">
                      {method.logo}
                    </span>
                  </span>
                  <span className="mt-4 text-sm text-ink-soft">
                    {enabled ? dictionary.paymentMethods[method.id][1] : dictionary.activating}
                  </span>
                </label>
              );
            })}
          </div>

          {paymentId === 'bank' && (
            <div className="mt-6 rounded-[2rem] border border-champagne-warm/40 bg-champagne-pale p-5 text-sm leading-8 text-ink-soft">
              <p className="font-semibold text-ink">{dictionary.bankDetails}</p>
              <dl className="mt-4 grid gap-3">
                <div className="rounded-2xl bg-cream/70 px-4 py-3">
                  <dt className="text-xs font-semibold text-honey">{dictionary.bankName}</dt>
                  <dd className="mt-1 font-semibold text-ink">
                    {BANK_NAME} <span className="text-ink-mute">({BANK_NAME_EN})</span>
                  </dd>
                </div>
                <div className="rounded-2xl bg-cream/70 px-4 py-3">
                  <dt className="text-xs font-semibold text-honey">{dictionary.accountName}</dt>
                  <dd className="mt-1 font-semibold text-ink">{BANK_ACCOUNT_NAME}</dd>
                </div>
                <div className="rounded-2xl bg-cream/70 px-4 py-3">
                  <dt className="text-xs font-semibold text-honey">{dictionary.iban}</dt>
                  <dd className="mt-1 font-mono text-base font-semibold tracking-wide text-ink" dir="ltr">
                    {BANK_IBAN_PLACEHOLDER}
                  </dd>
                </div>
              </dl>
              <p className="mt-4">
                {dictionary.bankInstructions}
              </p>
              <a
                href={WHATSAPP_RECEIPT_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-caramel-deep px-5 text-sm font-semibold text-cream transition-colors hover:bg-ink"
              >
                {dictionary.sendReceipt}
              </a>
            </div>
          )}
        </section>

        <section className="rounded-[2.5rem] border border-champagne/60 bg-cream p-5 shadow-[0_22px_70px_rgba(51,38,28,0.05)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-honey">
            {dictionary.customerDetails}
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
            {dictionary.deliveryInfo}
          </h2>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-ink-soft">
              {dictionary.name}
              <input
                required
                value={customer.name}
                onChange={(event) => handleCustomerChange('name', event.target.value)}
                className="min-h-12 rounded-2xl border border-champagne-warm/40 bg-champagne-pale px-4 text-ink outline-none focus:border-honey"
              />
            </label>

            <label className="grid gap-2 text-sm text-ink-soft">
              {dictionary.phone}
              <input
                required
                type="tel"
                value={customer.phone}
                onChange={(event) => handleCustomerChange('phone', event.target.value)}
                className="min-h-12 rounded-2xl border border-champagne-warm/40 bg-champagne-pale px-4 text-ink outline-none focus:border-honey"
              />
            </label>

            <label className="grid gap-2 text-sm text-ink-soft">
              {dictionary.city}
              <input
                required
                value={customer.city}
                onChange={(event) => handleCustomerChange('city', event.target.value)}
                className="min-h-12 rounded-2xl border border-champagne-warm/40 bg-champagne-pale px-4 text-ink outline-none focus:border-honey"
              />
            </label>

            <label className="grid gap-2 text-sm text-ink-soft sm:col-span-2">
              {dictionary.address}
              <input
                required
                value={customer.address}
                onChange={(event) => handleCustomerChange('address', event.target.value)}
                className="min-h-12 rounded-2xl border border-champagne-warm/40 bg-champagne-pale px-4 text-ink outline-none focus:border-honey"
              />
            </label>

            <label className="grid gap-2 text-sm text-ink-soft sm:col-span-2">
              {dictionary.notes}
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
          {dictionary.totalEyebrow}
        </p>
        <h2 className="mt-3 font-serif text-3xl font-medium text-ink">
          {dictionary.orderSummary}
        </h2>

        <div className="mt-8 grid gap-4 text-sm text-ink-soft">
          <div className="flex justify-between gap-4">
            <span>{dictionary.subtotal}</span>
            <span className="font-semibold text-ink">{formatSar(subtotal)}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span>{dictionary.shippingOptions[selectedShipping.id][0]}</span>
            <span className="font-semibold text-ink">
              {shippingCost === 0 ? 'مجاني' : formatSar(shippingCost)}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span>{dictionary.payment}</span>
            <span className="font-semibold text-ink">{dictionary.paymentMethods[selectedPayment.id][0]}</span>
          </div>
          <div className="border-t border-champagne-warm/40 pt-4">
            <div className="flex items-end justify-between gap-4">
              <span className="text-base text-ink">{dictionary.total}</span>
              <span className="font-serif text-4xl font-medium text-caramel">
                {formatSar(total)}
              </span>
            </div>
          </div>
        </div>

        {error && (
          <p className="mt-5 rounded-2xl bg-cream px-4 py-3 text-sm text-caramel-deep">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={items.length === 0 || isSubmitting}
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-caramel-deep px-7 text-sm font-semibold text-cream shadow-[0_18px_45px_rgba(51,38,28,0.13)] transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:bg-ink-mute"
        >
          {isSubmitting ? dictionary.submitting : dictionary.submit}
        </button>

        <p className="mt-4 text-center text-xs leading-6 text-ink-mute">
          {dictionary.footerNote}
        </p>
      </aside>
    </form>
  );
}
