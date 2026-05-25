// ════════════════════════════════════════════
// Moyasar Payment Integration
// File: src/lib/payments/moyasar.ts
// Docs: https://docs.moyasar.com
// ════════════════════════════════════════════

export interface MoyasarPaymentInit {
  amount: number;        // in halalas (1 SAR = 100 halalas)
  currency: 'SAR';
  description: string;
  orderId: string;
  callbackUrl: string;
  methods: Array<'creditcard' | 'mada' | 'applepay' | 'stcpay'>;
  metadata?: Record<string, string>;
}

export interface MoyasarPaymentResponse {
  id: string;
  status: 'initiated' | 'paid' | 'failed' | 'authorized' | 'captured' | 'refunded';
  amount: number;
  amount_format: string;
  currency: string;
  description: string;
  source: {
    type: string;
    company?: string;
    name?: string;
    number?: string;
  };
  created_at: string;
}

// ════════════════════════════════════════════
// Client-side: Initialize Moyasar form
// ════════════════════════════════════════════
export const initMoyasarForm = (config: MoyasarPaymentInit) => {
  if (typeof window === 'undefined' || !(window as any).Moyasar) {
    console.error('Moyasar.js not loaded');
    return;
  }

  (window as any).Moyasar.init({
    element: '#moyasar-form',
    amount: config.amount * 100, // convert to halalas
    currency: config.currency,
    description: config.description,
    publishable_api_key: process.env.NEXT_PUBLIC_MOYASAR_PUBLISHABLE_KEY,
    callback_url: config.callbackUrl,
    methods: config.methods,
    metadata: {
      orderId: config.orderId,
      ...config.metadata,
    },
    on_completed: (payment: MoyasarPaymentResponse) => {
      // Handled by callback URL
      console.log('Payment completed:', payment);
    },
    on_failed: (error: any) => {
      console.error('Payment failed:', error);
    },
  });
};

// ════════════════════════════════════════════
// Server-side: Verify payment status
// API Route: /api/payments/verify/[id]
// ════════════════════════════════════════════
export const verifyPayment = async (
  paymentId: string
): Promise<MoyasarPaymentResponse> => {
  const secretKey = process.env.MOYASAR_SECRET_KEY;
  if (!secretKey) throw new Error('MOYASAR_SECRET_KEY not configured');

  const response = await fetch(
    `https://api.moyasar.com/v1/payments/${paymentId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Basic ${Buffer.from(secretKey + ':').toString('base64')}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Moyasar API error: ${response.statusText}`);
  }

  return response.json();
};

// ════════════════════════════════════════════
// Server-side: Refund payment
// ════════════════════════════════════════════
export const refundPayment = async (
  paymentId: string,
  amount?: number
): Promise<MoyasarPaymentResponse> => {
  const secretKey = process.env.MOYASAR_SECRET_KEY;
  if (!secretKey) throw new Error('MOYASAR_SECRET_KEY not configured');

  const body = amount ? { amount: amount * 100 } : {};

  const response = await fetch(
    `https://api.moyasar.com/v1/payments/${paymentId}/refund`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(secretKey + ':').toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  );

  return response.json();
};

// ════════════════════════════════════════════
// Webhook handler (for /api/webhooks/moyasar)
// ════════════════════════════════════════════
export const handleMoyasarWebhook = async (payload: any) => {
  // Verify webhook signature
  const signature = payload.headers['x-moyasar-signature'];
  // TODO: Verify signature using your webhook secret

  const event = payload.body;
  
  switch (event.type) {
    case 'payment_paid':
      // Update order status in Firebase
      await updateOrderStatus(event.data.metadata.orderId, 'paid');
      break;
    case 'payment_failed':
      await updateOrderStatus(event.data.metadata.orderId, 'failed');
      break;
    case 'payment_refunded':
      await updateOrderStatus(event.data.metadata.orderId, 'refunded');
      break;
  }
};

// Placeholder — implement with Firebase Admin
const updateOrderStatus = async (orderId: string, status: string) => {
  // Use Firebase Admin SDK to update order
  console.log(`Order ${orderId} status: ${status}`);
};
