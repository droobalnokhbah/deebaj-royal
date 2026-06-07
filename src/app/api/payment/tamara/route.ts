import { NextResponse } from 'next/server';
import { createTamaraCheckout } from '@/lib/payments/tamara';

export async function POST(request: Request) {
  if (
    !process.env.TAMARA_API_TOKEN ||
    !(process.env.TAMARA_PUBLIC_KEY || process.env.NEXT_PUBLIC_TAMARA_PUBLIC_KEY)
  ) {
    return NextResponse.json(
      { message: 'Tamara is not configured yet' },
      { status: 503 },
    );
  }

  const body = await request.json();
  const order = body.order;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deebajroyal.com';
  const [firstName, ...lastNameParts] = String(order.customer.name).split(' ');
  const lastName = lastNameParts.join(' ') || firstName;

  try {
    const checkout = await createTamaraCheckout({
      order_reference_id: body.orderId,
      total_amount: {
        amount: order.totals.total,
        currency: 'SAR',
      },
      description: `Deebaj Royal order ${body.orderId}`,
      country_code: 'SA',
      payment_type: 'PAY_BY_INSTALMENTS',
      instalments: 3,
      locale: 'ar_SA',
      items: order.items.map((item: any) => ({
        reference_id: String(item.productId),
        type: 'physical',
        name: item.nameAr,
        sku: item.slug,
        quantity: item.quantity,
        unit_price: { amount: item.price, currency: 'SAR' },
        total_amount: { amount: item.price * item.quantity, currency: 'SAR' },
      })),
      consumer: {
        first_name: firstName,
        last_name: lastName,
        phone_number: order.customer.phone,
        email: 'orders@deebajroyal.com',
      },
      shipping_address: {
        first_name: firstName,
        last_name: lastName,
        line1: order.customer.address,
        city: order.customer.city,
        country_code: 'SA',
        phone_number: order.customer.phone,
      },
      billing_address: {
        first_name: firstName,
        last_name: lastName,
        line1: order.customer.address,
        city: order.customer.city,
        country_code: 'SA',
        phone_number: order.customer.phone,
      },
      merchant_url: {
        success: `${siteUrl}/checkout/success?order=${encodeURIComponent(body.orderId)}`,
        failure: `${siteUrl}/checkout/failed?order=${encodeURIComponent(body.orderId)}`,
        cancel: `${siteUrl}/checkout/failed?order=${encodeURIComponent(body.orderId)}`,
        notification: `${siteUrl}/api/payment/tamara`,
      },
    });

    return NextResponse.json({
      ok: true,
      checkout,
      checkoutUrl: checkout.checkout_url,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Tamara checkout creation failed';

    return NextResponse.json({ message }, { status: 500 });
  }
}
