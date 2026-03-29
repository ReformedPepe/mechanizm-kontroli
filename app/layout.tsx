import type { Metadata } from 'next'
import { JetBrains_Mono, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import ScrollProgressBar from '@/components/ui/ScrollProgressBar'
import './globals.css'

const jetbrains = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mechanizm Kontroli — Odzyskaj 700 godzin rocznie',
  description:
    'Jak odzyskać kontrolę nad swoją uwagą w świecie zaprojektowanym, by Cię uzależnić. System Odzyskiwania Uwagi — bez silnej woli, przez zmianę środowiska.',
  openGraph: {
    title: 'Mechanizm Kontroli — Odzyskaj 700 godzin rocznie',
    description:
      'Mechanizm Kontroli — odzyskasz 700 godzin rocznie bez silnej woli, tylko przez zmianę środowiska.',
    type: 'website',
    locale: 'pl_PL',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

  return (
    <html lang="pl" className={`${jetbrains.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">
        <ScrollProgressBar />
        {children}

        {pixelId && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </body>
    </html>
  )
}
