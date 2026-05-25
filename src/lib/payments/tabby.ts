// ════════════════════════════════════════════
// Tabby Integration — 4 Installments
// File: src/lib/payments/tabby.ts
// Docs: https://docs.tabby.ai
// ════════════════════════════════════════════

const TABBY_API_URL = 'https://api.tabby.ai/api/v2';

export interface TabbyCheckoutSession {
  payment: {
    amount: string;
    currency: 'SAR';
    buyer: {
      phone: string;
      email: string;
      name: string;
    };
    shipping_address: {
      city: string;
      address: string;
      zip?: string;
    };
    order: {
      reference_id: string;
      items: Array<{
        title: string;
        quantity: number;
        unit_price: string;
        reference_id: string;
        category: string;
      }>;
    };
  };
  lang: 'ar' | 'en';
  merchant_code: string;
  merchant_urls: {
    success: string;
    cancel: string;
    failure: string;
  };
}

// ════════════════════════════════════════════
// Create Tabby Checkout Session
// API Route: /api/payments/tabby/create
// ════════════════════════════════════════════
export const createTabbyCheckout = async (
  session: TabbyCheckoutSession
): Promise<{ id: string; web_url: string; status: string }> => {
  const secretKey = process.env.TABBY_SECRET_KEY;
  if (!secretKey) throw new Error('TABBY_SECRET_KEY not configured');

  const response = await fetch(`${TABBY_API_URL}/checkout`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${secretKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(session),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Tabby checkout failed: ${error}`);
  }

  return response.json();
};

// ════════════════════════════════════════════
// Tabby Promo Snippet (display installment info)
// Use in product pages and checkout
// ════════════════════════════════════════════
export const getTabbyInstallmentText = (price: number, lang: 'ar' | 'en') => {
  const installment = Math.ceil(price / 4);
  if (lang === 'ar') {
    return `أو ٤ دفعات بدون فوائد بقيمة ${installment} ريال`;
  }
  return `or 4 interest-free payments of ${installment} SAR`;
};

// ════════════════════════════════════════════
// Verify webhook signature
// ════════════════════════════════════════════
export const verifyTabbyWebhook = (
  signature: string,
  body: string
): boolean => {
  const crypto = require('crypto');
  const secret = process.env.TABBY_SECRET_KEY!;
  const expected = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');
  return signature === expected;
};
