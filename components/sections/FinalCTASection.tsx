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
          <h2 className="font-mono text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] leading-[1.1] mb-8 uppercase text-gradient">
            Za rok będziesz w tym samym miejscu.
            <br />
            <span className="text-orange">Albo nie.</span>
          </h2>

          <p className="font-sans text-muted text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-[1.8]">
            Każdy dzień bez zmiany to kolejny dzień którego <span className="text-purple font-bold">nie odzyskasz</span>. Kolejny wieczór z <span className="text-purple font-bold">poczuciem winy</span>.
            Kolejny rok w którym bliskim <span className="text-purple font-bold">bardziej zależało na tobie</span> niż tobie na nich.
            {' '}
            <span className="text-orange font-bold uppercase">To się nie zmieni samo.</span>
          </p>

          <div className="relative max-w-xl mx-auto group/card">
            {/* The Neon Pulse */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange to-purple rounded-3xl blur-xl opacity-20 group-hover/card:opacity-40 animate-pulse transition-opacity duration-500" />

            <div className="relative bg-bg2 border border-orange/20 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl shadow-orange/10 overflow-hidden">

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
                className="w-full font-mono font-bold text-base md:text-lg tracking-wider uppercase py-6 text-bg flex items-center justify-center gap-2 mb-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)] active:scale-[0.98]"
              >
                Chcę zmienić to już dziś
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </ShimmerButton>

              <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-muted/60 font-sans">
                <Shield size={16} />
                <span>Gwarancja 14 dni — zero ryzyka</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
