import { NextResponse } from 'next/server';
import { createTabbyCheckout } from '@/lib/payments/tabby';

export async function POST(request: Request) {
  if (
    !process.env.TABBY_SECRET_KEY ||
    !(process.env.TABBY_PUBLIC_KEY || process.env.NEXT_PUBLIC_TABBY_PUBLIC_KEY)
  ) {
    return NextResponse.json(
      { message: 'Tabby is not configured yet' },
      { status: 503 },
    );
  }

  const body = await request.json();
  const order = body.order;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deebajroyal.com';
  const locale = order?.locale === 'en' ? 'en' : 'ar';

  try {
    const session = await createTabbyCheckout({
      payment: {
        amount: String(order.totals.total),
        currency: 'SAR',
        buyer: {
          phone: order.customer.phone,
          email: 'orders@deebajroyal.com',
          name: order.customer.name,
        },
        shipping_address: {
          city: order.customer.city,
          address: order.customer.address,
        },
        order: {
          reference_id: body.orderId,
          items: order.items.map((item: any) => ({
            title: item.nameAr,
            quantity: item.quantity,
            unit_price: String(item.price),
            reference_id: String(item.productId),
            category: 'tissues',
          })),
        },
      },
      lang: locale,
      merchant_code: process.env.NEXT_PUBLIC_TABBY_MERCHANT_CODE || 'SAU',
      merchant_urls: {
        success: `${siteUrl}/${locale}/checkout/success?order=${encodeURIComponent(body.orderId)}`,
        cancel: `${siteUrl}/${locale}/checkout/failed?order=${encodeURIComponent(body.orderId)}`,
        failure: `${siteUrl}/${locale}/checkout/failed?order=${encodeURIComponent(body.orderId)}`,
      },
    });

    return NextResponse.json({
      ok: true,
      session,
      checkoutUrl: session.web_url,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Tabby checkout creation failed';

    return NextResponse.json({ message }, { status: 500 });
  }
}
