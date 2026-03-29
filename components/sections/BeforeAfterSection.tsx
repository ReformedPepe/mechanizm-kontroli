'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const leftItems = [
  'Odkładasz telefon na 5 minut — po chwili znów go trzymasz',
  'Czekasz aż „samo się zmieni" — ale mija miesiąc za miesiącem',
  'Wiesz co robić, ale wieczorem nie masz siły zacząć',
  'Kolejne postanowienie pada po 3 dniach',
]

const rightItems = [
  'Masz system który działa nawet kiedy motywacja = zero',
  'Wieczory odzyskane — książka, rozmowa, cisza',
  'Nie walczysz z telefonem — środowisko robi to za Ciebie',
  'Metoda STORE daje Ci reset w 15 minut, kiedy tego potrzebujesz',
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
            04 / DECYZJA NALEŻY DO CIEBIE
          </span>
          <h2 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-purple tracking-[-0.02em] leading-[1.2] mb-5">
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
                <li key={i} className="flex items-start gap-4 text-base font-sans text-muted leading-relaxed">
                  <span className="text-red-500/70 mt-1 flex-shrink-0">✕</span>
                  {item}
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
                <li key={i} className="flex items-start gap-4 text-base font-sans text-text/90 leading-relaxed">
                  <span className="text-green-500/80 mt-1 flex-shrink-0">✓</span>
                  {item}
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
          className="text-center mt-16 md:mt-20"
        >
          <a
            href="#oferta"
            className="group inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange/90 text-bg font-mono font-bold text-base tracking-wider uppercase px-10 py-4 w-full sm:w-auto rounded-xl transition-all hover:shadow-lg hover:shadow-orange/20"
          >
            Przejmij kontrolę
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
