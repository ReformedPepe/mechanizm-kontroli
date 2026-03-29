'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield } from 'lucide-react'
import { fbInitiateCheckout } from '@/lib/metaPixel'
import ShimmerButton from '@/components/ui/magicui/shimmer-button'
import CountdownTimer from '@/components/ui/CountdownTimer'

export default function FinalCTASection() {
  const handleCTA = () => {
    fbInitiateCheckout()
    window.location.href = '#oferta'
  }

  return (
    <section className="py-20 md:py-28 relative overflow-hidden section-bg-primary">


      <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-extrabold text-purple tracking-[-0.02em] leading-[1.1] mb-8">
            Za rok będziesz żałować,
            <br />
            <span className="text-orange">że nie zaczął dziś</span>
          </h2>

          <p className="font-sans text-muted text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-[1.8]">
            Ile jeszcze wieczorów stracisz na feedzie? Ile postanowień złamiesz
            w poniedziałek? Masz {' '}
            <span className="text-text font-bold">700 godzin rocznie</span>{' '}
            do odzyskania. Albo do zmarnowania na kolejny rok scrollowania.
          </p>

          <div className="bg-bg2/60 border border-bg3/50 rounded-3xl p-8 md:p-12 mb-8 max-w-xl mx-auto shadow-2xl shadow-orange/5">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap size={24} className="text-orange" />
              <span className="font-mono text-base md:text-lg font-bold text-text">Mechanizm Kontroli</span>
            </div>

            <div className="flex items-baseline justify-center gap-4 mb-5">
              <span className="text-muted/60 line-through text-lg font-sans">97 zł</span>
              <span className="font-mono text-6xl font-extrabold text-orange tracking-tighter">47 zł</span>
            </div>

            <div className="flex items-center justify-center gap-2 mb-8 text-sm text-muted font-sans">
              <span>Cena ważna jeszcze</span>
              <CountdownTimer className="text-sm font-medium text-orange/80" />
            </div>

            <ShimmerButton
              onClick={handleCTA}
              className="w-full font-mono font-bold text-base md:text-lg tracking-wider uppercase py-5 text-bg flex items-center justify-center gap-2 mb-8"
            >
              Odzyskuję swoje 700 godzin
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </ShimmerButton>

            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-muted/60 font-sans">
              <Shield size={16} />
              <span>Gwarancja 14 dni — zero ryzyka</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
