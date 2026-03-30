'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ShimmerButton from '@/components/ui/magicui/shimmer-button'

const leftItems = [
  <>
    <span className="text-text font-bold">Odkładasz telefon na 5 minut</span> <span className="text-muted">— po chwili znów go trzymasz</span>
  </>,
  <>
    <span className="text-text font-bold">Czekasz aż „samo się zmieni"</span> <span className="text-muted">— ale mija miesiąc za miesiącem</span>
  </>,
  <>
    <span className="text-text font-bold">Wiesz co robić</span>, <span className="text-muted">ale wieczorem nie masz siły zacząć</span>
  </>,
  <>
    <span className="text-text font-bold">Kolejne postanowienie</span> <span className="text-muted">pada po 3 dniach</span>
  </>,
]

const rightItems = [
  <>
    <span className="text-text font-bold">Masz coś, co działa</span> <span className="text-white/60">nawet kiedy motywacja = zero</span>
  </>,
  <>
    <span className="text-text font-bold">Wieczory odzyskane</span> <span className="text-white/60">— książka, rozmowa, cisza</span>
  </>,
  <>
    <span className="text-text font-bold">Nie walczysz z telefonem</span> <span className="text-white/60">— środowisko robi to za ciebie</span>
  </>,
  <>
    <span className="text-text font-bold">Pierwszy raz od lat</span> <span className="text-white/60">wstajesz rano bez poczucia że poprzedni dzień zmarnowałeś</span>
  </>,
]

export default function TwoOptionsSection() {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden section-bg-primary">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block font-mono text-sm tracking-wide uppercase text-orange mb-4">
            05 / DECYZJA NALEŻY DO CIEBIE
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.2] mb-5 uppercase text-gradient">
            Masz dwie opcje
          </h2>
          <p className="font-sans text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Jedno prowadzi do zmiany. Drugie do kolejnego roku na autopilocie.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-bg2/40 border border-red-500/10 rounded-3xl p-8 md:p-12 shadow-xl shadow-red-500/5"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <h3 className="font-mono text-base font-bold text-red-500/90 tracking-wide uppercase">
                Bierne czekanie
              </h3>
            </div>
            <ul className="space-y-5">
              {leftItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-base font-sans leading-relaxed">
                  <span className="text-red-500/70 mt-1 flex-shrink-0">✕</span>
                  <div>{item}</div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-bg2/40 border border-green-500/10 rounded-3xl p-8 md:p-12 shadow-xl shadow-green-500/5"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <h3 className="font-mono text-base font-bold text-green-500/90 tracking-wide uppercase">
                Przejmujesz kontrolę
              </h3>
            </div>
            <ul className="space-y-5">
              {rightItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-base font-sans leading-relaxed">
                  <span className="text-green-500/80 mt-1 flex-shrink-0">✓</span>
                  <div>{item}</div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12 md:mt-16"
        >
          <ShimmerButton
            onClick={() => window.location.href = '#oferta'}
            className="group inline-flex items-center justify-center gap-2 font-mono font-bold text-base tracking-wider uppercase px-12 py-6 w-full sm:w-auto text-bg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)] active:scale-[0.98]"
          >
            Przejmij kontrolę
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  )
}
