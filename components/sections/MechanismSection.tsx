'use client'

import { motion } from 'framer-motion'
import { Repeat, Settings, BrainCircuit } from 'lucide-react'

const mechanisms = [
  {
    icon: <Settings size={24} />,
    step: '01',
    title: 'Zmiana środowiska, nie silnej woli',
    description:
      'Nie walczysz z algorytmem — zmieniasz warunki tak, że nawyk nie ma się czego złapać. Zero motywacji nie jest problemem.',
  },
  {
    icon: <Repeat size={24} />,
    step: '02',
    title: 'Metoda STORE — reset w 15 minut',
    description:
      'Pięć kroków na każdy kryzysowy moment. Stop → ciało → jedno zadanie → odpoczynek → decyzja. Działa nawet o 23:00.',
  },
  {
    icon: <BrainCircuit size={24} />,
    step: '03',
    title: 'Zaprojektowane pod ADHD',
    description:
      'Przy dysfunkcji wykonawczej „po prostu przestań" nie działa biologicznie. Protokoły środowiskowe są zaprojektowane pod to jak naprawdę działa Twój mózg.',
  },
]

export default function MechanismSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden section-bg-primary">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block font-mono text-sm tracking-wide uppercase text-orange mb-4">
            06 / JAK TO DZIAŁA
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-purple tracking-[-0.02em] leading-[1.2] mb-5">
            Dlaczego tym razem zadziała
          </h2>
          <p className="font-sans text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Wcześniej walczyłeś silną wolą z algorytmem zaprojektowanym
            przez tysiące inżynierów za miliardy dolarów. Tu nie walczysz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {mechanisms.map((m, i) => (
          <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-[#161B22] border border-[#F97316]/15 rounded-lg p-8 md:p-10 transition-colors shadow-lg shadow-[#F97316]/5 hover:bg-[#1C2128]"
            >
              <span className="font-mono text-6xl md:text-7xl font-bold text-bg3/80 absolute top-6 right-6 font-extrabold tracking-tighter">
                {m.step}
              </span>
              <span className="text-orange/80 mb-6 block scale-125 origin-left">{m.icon}</span>
              <h3 className="font-mono text-orange text-lg font-bold mb-4 tracking-tight pr-10 relative">
                {m.title}
              </h3>
              <p className="font-sans text-muted text-base leading-relaxed relative">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
