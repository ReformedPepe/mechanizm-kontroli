'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Shield,
  Loader2,
  BookOpen,
  Zap,
  Clock,
  CheckSquare,
  Layers,
  Calendar,
  CreditCard,
} from 'lucide-react'
import { fbViewContent, fbInitiateCheckout } from '@/lib/metaPixel'
import CountdownTimer from '@/components/ui/CountdownTimer'
import BorderBeam from '@/components/ui/magicui/border-beam'
import ShimmerButton from '@/components/ui/magicui/shimmer-button'
import Link from 'next/link'

const bullets = [
  'Odzyskasz 700 godzin rocznie bez silnej woli',
  'Wdrożysz system tego samego wieczoru',
  'Dostaniesz plan na pierwsze 72 godziny krok po kroku',
]

const included = [
  { icon: <BookOpen size={16} />, text: 'Ebook „Mechanizm Kontroli" — PDF, ~30–35 stron' },
  { icon: <Zap size={16} />, text: 'Metoda STORE — reset w 15 minut' },
  { icon: <Clock size={16} />, text: 'Plan na pierwsze 72 godziny krok po kroku' },
  { icon: <CheckSquare size={16} />, text: 'Checklista Środowiska Cyfrowego (wartość 27 zł)' },
  { icon: <Layers size={16} />, text: 'Karta Metody STORE do wydruku (wartość 19 zł)' },
  { icon: <Calendar size={16} />, text: 'Tracker 30-dniowy (wartość 19 zł)' },
  { icon: <Shield size={16} />, text: 'Gwarancja zwrotu 14 dni — bez pytań' },
]

export default function OfferSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const checkboxRef = useRef<HTMLDivElement>(null)
  const [viewTracked, setViewTracked] = useState(false)
  const [loading, setLoading] = useState(false)
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !viewTracked) {
          fbViewContent()
          setViewTracked(true)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [viewTracked])

  const handleCheckout = async () => {
    if (!accepted) {
      if (checkboxRef.current) {
        checkboxRef.current.classList.add('shake')
        setTimeout(() => {
          checkboxRef.current?.classList.remove('shake')
        }, 600)
      }
      return
    }
    setLoading(true)
    fbInitiateCheckout()
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch {
      setLoading(false)
    }
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden section-bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block font-mono text-sm tracking-wide uppercase text-orange mb-4">
            01 / Pełny pakiet
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-purple tracking-[-0.02em] leading-[1.2] mb-5">
            Mechanizm Kontroli
          </h2>
          <p className="font-sans text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Wszystko czego potrzebujesz żeby odzyskać kontrolę nad swoją uwagą.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Offer card with BorderBeam */}
          <div id="oferta" className="relative bg-bg2 border border-orange/20 rounded-2xl overflow-hidden shadow-2xl shadow-orange/5">
            <BorderBeam size={250} duration={10} />

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] divide-y lg:divide-y-0 lg:divide-x divide-bg3/60">
              {/* Left Column (2fr ~ 40%) */}
              <div className="p-8 md:p-10 lg:p-12 flex flex-col items-center relative overflow-hidden bg-gradient-to-br from-bg3/20 to-bg2/20">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-48 h-48 bg-orange/10 rounded-full blur-[80px]" />
                </div>

                {/* Ebook Mockup */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
                  className="relative w-44 md:w-52 mb-10 z-10"
                >
                  <div style={{ perspective: '800px' }}>
                    <div
                      className="bg-gradient-to-br from-bg3 via-bg2 to-bg3 rounded-lg border border-bg3/80 shadow-2xl shadow-orange/10 p-8 md:p-10"
                      style={{ transform: 'rotateY(-8deg)' }}
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-orange/40 via-purple/30 to-orange/40 rounded-l-lg" />
                      <div className="space-y-4">
                        <Zap className="text-orange" size={28} />
                        <h3 className="font-mono text-sm font-bold text-orange leading-tight">
                          Mechanizm
                          <br />
                          Kontroli
                        </h3>
                        <div className="w-8 h-px bg-purple/40" />
                        <p className="font-sans text-[10px] text-muted leading-tight">
                          System Odzyskiwania Uwagi
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Price */}
                <div className="flex flex-col items-center mb-6 z-10 w-full">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-muted/60 line-through text-xl font-sans">162 zł</span>
                    <span className="font-mono text-6xl md:text-7xl font-extrabold text-orange tracking-tighter">47 zł</span>
                  </div>
                </div>

                {/* Timer */}
                <div className="flex items-center gap-2 mb-8 text-xs text-muted font-sans z-10 bg-bg3/20 px-4 py-2 rounded-full border border-bg3/40">
                  <span>Cena ważna jeszcze</span>
                  <CountdownTimer className="text-xs text-orange" />
                </div>

                {/* CTA */}
                <ShimmerButton
                  onClick={handleCheckout}
                  disabled={loading}
                  className="w-full font-mono font-bold text-base tracking-wider uppercase py-5 text-bg flex items-center justify-center gap-2 mb-4 z-10"
                >
                  {loading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <>
                      Chcę odzyskać kontrolę
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </ShimmerButton>

                {/* Checkbox */}
                <div ref={checkboxRef} className="flex items-start gap-3 mb-6 text-[11px] text-muted/80 font-sans leading-tight bg-bg3/10 p-4 rounded-xl border border-bg3/30 z-10 w-full">
                  <input
                    type="checkbox"
                    id="legal-accept-offer"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    className="mt-0.5 accent-orange w-3.5 h-3.5 flex-shrink-0 cursor-pointer"
                  />
                  <label htmlFor="legal-accept-offer" className="cursor-pointer">
                    Akceptuję{' '}
                    <Link href="/regulamin" className="text-orange hover:underline">regulamin</Link>{' '}
                    oraz{' '}
                    <Link href="/polityka-prywatnosci" className="text-orange hover:underline">politykę prywatności</Link>.
                    Wyrażam zgodę na dostarczenie treści cyfrowych przed upływem 14 dni.
                  </label>
                </div>

                {/* Payment Icons */}
                <div className="flex items-center justify-center gap-4 text-[11px] text-muted/60 font-sans z-10">
                  <div className="flex items-center gap-1">
                    <CreditCard size={14} />
                    <span>Karta</span>
                  </div>
                  <span>·</span>
                  <span>BLIK</span>
                  <span>·</span>
                  <span>Przelewy24</span>
                </div>
              </div>

              {/* Right Column (3fr ~ 60%) */}
              <div className="p-8 md:p-10 lg:p-14 flex flex-col justify-center">
                {/* 3 bullets */}
                <ul className="space-y-5 mb-10">
                  {bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-4 text-base md:text-lg font-sans text-text font-medium leading-relaxed">
                      <span className="text-orange mt-1.5 flex-shrink-0 bg-orange/10 p-1 rounded-full"><Zap size={14} /></span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="h-px bg-bg3/60 mb-10" />

                {/* Included List */}
                <h4 className="font-mono text-sm tracking-wider uppercase text-muted mb-6">W cenie otrzymujesz:</h4>
                <ul className="space-y-4 mb-10">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-[15px] md:text-base font-sans text-text/80">
                      <span className="text-blue/80 mt-1 flex-shrink-0">{item.icon}</span>
                      <span className="leading-snug">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="h-px bg-bg3/60 mb-10" />

                {/* Guarantee */}
                <div className="flex items-start gap-4 bg-orange/5 border border-orange/10 p-6 rounded-2xl">
                  <Shield className="text-orange flex-shrink-0 mt-0.5" size={28} />
                  <div>
                    <h5 className="font-sans font-bold text-text mb-2 text-lg">Gwarancja Zwrotu bez Pytań</h5>
                    <p className="font-sans text-sm text-muted leading-relaxed">
                      Masz 14 dni na wdrożenie systemu. Jeśli uznasz, że to nie działa i nie odzyskujesz czasu — piszesz jednego maila, a ja zwracam Ci 100% kwoty. Bez pytania dlaczego.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
