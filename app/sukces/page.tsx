'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle, Mail, Download, ArrowRight } from 'lucide-react'
import { fbPurchase } from '@/lib/metaPixel'

function SukcesContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [tracked, setTracked] = useState(false)

  useEffect(() => {
    if (sessionId && !tracked) {
      fbPurchase()
      setTracked(true)
    }
  }, [sessionId, tracked])

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center"
      >
        {/* Success icon */}
        <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={40} className="text-green-500" />
        </div>

        <h1 className="font-mono text-3xl md:text-4xl font-bold text-text mb-4">
          Dziękuję za zakup! 🎉
        </h1>

        <p className="font-sans text-muted text-lg mb-8 leading-relaxed">
          Właśnie podjąłeś najlepszą decyzję tego miesiąca. Twój ebook
          &ldquo;Mechanizm Kontroli&rdquo; jest w drodze.
        </p>

        {/* Steps */}
        <div className="bg-bg2 border border-bg3 rounded-2xl p-6 md:p-8 text-left space-y-5 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center flex-shrink-0">
              <Mail size={20} className="text-blue" />
            </div>
            <div>
              <h3 className="font-mono text-sm font-bold text-orange mb-1">
                Sprawdź skrzynkę email
              </h3>
              <p className="font-sans text-sm text-muted">
                Link do pobrania PDF trafi na Twój email w ciągu 2 minut.
                Sprawdź też folder spam.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center flex-shrink-0">
              <Download size={20} className="text-blue" />
            </div>
            <div>
              <h3 className="font-mono text-sm font-bold text-orange mb-1">
                Pobierz i zacznij
              </h3>
              <p className="font-sans text-sm text-muted">
                Zacznij od Rozdziału 3 — Protokół Przerwania Pętli. Możesz
                go wdrożyć jeszcze dziś wieczorem.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center flex-shrink-0">
              <ArrowRight size={20} className="text-blue" />
            </div>
            <div>
              <h3 className="font-mono text-sm font-bold text-orange mb-1">
                Plan na 72 godziny
              </h3>
              <p className="font-sans text-sm text-muted">
                Wdróż plan ze strony 25 — pierwsze 72 godziny to fundament
                zmiany. Dzień po dniu.
              </p>
            </div>
          </div>
        </div>

        <a
          href="/"
          className="text-muted hover:text-text text-sm font-sans transition-colors"
        >
          ← Wróć na stronę główną
        </a>
      </motion.div>
    </div>
  )
}

export default function SukcesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-bg flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-orange border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <SukcesContent />
    </Suspense>
  )
}
