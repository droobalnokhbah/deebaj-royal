import { NextResponse } from 'next/server';

const moyasarSources = {
  mada: 'mada',
  creditcard: 'creditcard',
  applepay: 'applepay',
  stcpay: 'stcpay',
} as const;

export async function POST(request: Request) {
  const secretKey = process.env.MOYASAR_SECRET_KEY;
  const publishableKey = process.env.NEXT_PUBLIC_MOYASAR_PUBLISHABLE_KEY;

  if (!secretKey || !publishableKey) {
    return NextResponse.json(
      { message: 'Moyasar is not configured yet' },
      { status: 503 },
    );
  }

  const body = await request.json();
  const method = body.method as keyof typeof moyasarSources;

  if (!moyasarSources[method]) {
    return NextResponse.json({ message: 'Unsupported Moyasar method' }, { status: 400 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deebajroyal.com';
  const locale = body.order?.locale === 'en' ? 'en' : 'ar';
  const amount = Math.round(Number(body.order?.totals?.total || 0) * 100);

  const response = await fetch('https://api.moyasar.com/v1/payments', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${secretKey}:`).toString('base64')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount,
      currency: 'SAR',
      description: `Deebaj Royal order ${body.orderId}`,
      callback_url: `${siteUrl}/${locale}/checkout/success?order=${encodeURIComponent(body.orderId)}`,
      source: {
        type: moyasarSources[method],
      },
      metadata: {
        orderId: body.orderId,
      },
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    return NextResponse.json(
      { message: data?.message || 'Moyasar payment creation failed', details: data },
      { status: response.status },
    );
  }

  return NextResponse.json({
    ok: true,
    payment: data,
    checkoutUrl: data?.transaction_url || data?.source?.transaction_url || null,
  });
}
