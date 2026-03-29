import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || '')

export async function sendEbookEmail(email: string) {
  const downloadUrl = process.env.EBOOK_DOWNLOAD_URL

  if (!downloadUrl) {
    throw new Error('EBOOK_DOWNLOAD_URL is not set')
  }

  const { data, error } = await resend.emails.send({
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

  if (error) {
    throw new Error(`Failed to send email: ${error.message}`)
  }

  return data
}
