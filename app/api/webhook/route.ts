import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Resend } from 'resend'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    )
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    return NextResponse.json(
      { error: 'Webhook secret not configured' },
      { status: 500 }
    )
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2025-02-24.acacia',
  })

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Webhook verification failed'
    return NextResponse.json(
      { error: `Webhook Error: ${message}` },
      { status: 400 }
    )
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const email = session.customer_details?.email

    if (email) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY || '')
        const downloadUrl = process.env.EBOOK_DOWNLOAD_URL || ''

        await resend.emails.send({
          from: 'Mechanizm Kontroli <noreply@mechanizmkontroli.pl>',
          to: email,
          subject: 'Twój ebook „Mechanizm Kontroli" jest gotowy 🎉',
          html: `
            <div style="font-family: 'DM Sans', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #0D1117; color: #E2E8F0;">
              <h1 style="color: #F97316; font-family: 'JetBrains Mono', monospace; font-size: 24px;">
                Mechanizm Kontroli
              </h1>
              <p style="font-size: 16px; line-height: 1.6;">
                Dzięki za zakup! Twój ebook jest gotowy do pobrania.
              </p>
              <a href="${downloadUrl}" style="display: inline-block; margin: 24px 0; padding: 16px 32px; background: #F97316; color: #0D1117; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px;">
                Pobierz ebook
              </a>
              <p style="font-size: 14px; color: #8B949E; margin-top: 32px;">
                Link jest ważny przez 48 godzin. Jeśli masz pytania — odpowiedz na tego maila.
              </p>
            </div>
          `,
        })
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Email send failed'
        return NextResponse.json(
          { error: message },
          { status: 500 }
        )
      }
    }
  }

  return NextResponse.json({ received: true })
}
