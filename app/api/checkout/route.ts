import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export const dynamic = 'force-dynamic'

export async function POST() {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
      apiVersion: '2025-02-24.acacia',
    })

    const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card', 'p24', 'blik'],
      line_items: [
        {
          price_data: {
            currency: 'pln',
            unit_amount: 4700,
            product_data: {
              name: 'Mechanizm Kontroli — Ebook PDF',
              description:
                'Jak odzyskać kontrolę nad swoją uwagą w świecie zaprojektowanym, by Cię uzależnić',
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/sukces?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: baseUrl,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unknown error occurred'

    return NextResponse.json(
      { error: message },
      { status: 500 }
    )
  }
}
