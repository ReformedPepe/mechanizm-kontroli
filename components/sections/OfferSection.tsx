'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  Shield,
  Loader2,
  Zap,
  CreditCard,
} from 'lucide-react'
import { fbViewContent, fbInitiateCheckout } from '@/lib/metaPixel'
import CountdownTimer from '@/components/ui/CountdownTimer'
import BorderBeam from '@/components/ui/magicui/border-beam'
import ShimmerButton from '@/components/ui/magicui/shimmer-button'
import Link from 'next/link'

const bullets = [
  <>
    <span className="text-text font-bold">Przestaniesz tracić wieczory</span> <span className="text-muted/90">których już nie odzyskasz</span>
  </>,
  <>
    <span className="text-text font-bold">Twoje relacje z bliskimi</span> <span className="text-muted/90">przestaną na tym cierpieć</span>
  </>,
  <>
    <span className="text-text font-bold">Skończy się poranne uczucie</span>, <span className="text-muted/90">że znowu dałeś się wciągnąć</span>
  </>,
  <>
    <span className="text-text font-bold">Przestaniesz kłaść się spać</span> <span className="text-muted/90">z poczuciem zmarnowanego dnia</span>
  </>,
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
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.03}
        strokeOpacity={0.03}
        duration={3}
        repeatDelay={1}
        className={cn(
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
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
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.2] mb-5 uppercase text-gradient">
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
          className="max-w-5xl mx-auto group/card"
        >
          {/* Pulsating Neon Glow Wrapper */}
          <div id="oferta" className="relative transition-all duration-300">
            {/* The Neon Pulse */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange to-purple rounded-2xl blur-xl opacity-20 group-hover/card:opacity-40 animate-pulse transition-opacity duration-500" />

            <div className="relative bg-bg2 border border-orange/20 rounded-2xl overflow-hidden shadow-2xl shadow-orange/5">
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
                      <span className="text-muted/60 line-through text-xl font-sans">97 zł</span>
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
                    className="w-full font-mono font-bold text-base md:text-lg tracking-wider uppercase py-6 text-bg flex items-center justify-center gap-2 mb-4 z-10 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)] active:scale-[0.98]"
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
                  {/* bullets */}
                  <ul className="space-y-5 mb-10">
                    {bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-4 text-base md:text-lg font-sans text-text font-medium leading-relaxed">
                        <span className="text-orange mt-1.5 flex-shrink-0 bg-orange/10 p-1 rounded-full"><Zap size={14} /></span>
                        <div>{bullet}</div>
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
                        Masz 14 dni żeby sprawdzić czy to działa. Jeśli nie — piszesz jednego maila, a ja zwracam Ci 100% kwoty. Bez pytania dlaczego.
                      </p>
                    </div>
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
