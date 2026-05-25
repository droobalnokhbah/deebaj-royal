// ════════════════════════════════════════════
// Tamara Integration — 3 Installments
// File: src/lib/payments/tamara.ts
// Docs: https://docs.tamara.co
// ════════════════════════════════════════════

// Production: https://api.tamara.co
// Sandbox:    https://api-sandbox.tamara.co
const TAMARA_API_URL = process.env.NODE_ENV === 'production'
  ? 'https://api.tamara.co'
  : 'https://api-sandbox.tamara.co';

export interface TamaraCheckoutRequest {
  order_reference_id: string;
  total_amount: {
    amount: number;
    currency: 'SAR';
  };
  description: string;
  country_code: 'SA';
  payment_type: 'PAY_BY_INSTALMENTS'; // 3 installments
  instalments: 3;
  locale: 'ar_SA' | 'en_US';
  items: Array<{
    reference_id: string;
    type: string;
    name: string;
    sku: string;
    quantity: number;
    unit_price: { amount: number; currency: 'SAR' };
    total_amount: { amount: number; currency: 'SAR' };
  }>;
  consumer: {
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
  };
  shipping_address: {
    first_name: string;
    last_name: string;
    line1: string;
    city: string;
    country_code: 'SA';
    phone_number: string;
  };
  billing_address: any; // same as shipping
  merchant_url: {
    success: string;
    failure: string;
    cancel: string;
    notification: string;
  };
}

// ════════════════════════════════════════════
// Create Tamara Checkout
// API Route: /api/payments/tamara/create
// ════════════════════════════════════════════
export const createTamaraCheckout = async (
  request: TamaraCheckoutRequest
): Promise<{ checkout_id: string; checkout_url: string; order_id: string }> => {
  const apiToken = process.env.TAMARA_API_TOKEN;
  if (!apiToken) throw new Error('TAMARA_API_TOKEN not configured');

  const response = await fetch(`${TAMARA_API_URL}/checkout`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Tamara checkout failed: ${error}`);
  }

  return response.json();
};

// ════════════════════════════════════════════
// Authorize order after payment
// ════════════════════════════════════════════
export const authorizeTamaraOrder = async (orderId: string) => {
  const apiToken = process.env.TAMARA_API_TOKEN;
  const response = await fetch(`${TAMARA_API_URL}/orders/${orderId}/authorise`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiToken}` },
  });
  return response.json();
};

// ════════════════════════════════════════════
// Get installment text for product pages
// ════════════════════════════════════════════
export const getTamaraInstallmentText = (price: number, lang: 'ar' | 'en') => {
  const installment = Math.ceil(price / 3);
  if (lang === 'ar') {
    return `أو ٣ دفعات بدون فوائد بقيمة ${installment} ريال`;
  }
  return `or 3 interest-free payments of ${installment} SAR`;
};
