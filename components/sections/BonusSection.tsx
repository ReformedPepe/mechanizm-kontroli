'use client'

import { motion } from 'framer-motion'
import { CheckSquare, Layers, Calendar } from 'lucide-react'

const bonuses = [
  {
    icon: <CheckSquare size={24} />,
    number: '#1',
    title: 'Coś co zajmuje 10 minut i sprawia że telefon przestań cię wciągać tak jak wcześniej',
    description: 'Lista konkretnych zmian w swoim telefonie i komputerze gotowa do zrobienia dziś wieczorem. Bez teorii, krok po kroku.',
    value: '27 zł',
  },
  {
    icon: <Layers size={24} />,
    number: '#2',
    title: 'Jedna kartka którą kładziesz przy łóżku — i po tygodniu śpisz spokojniej',
    description: 'Pięć kroków na każdy moment kiedy czujesz że zaraz znowu wpadniesz. Format do wydruku lub tapeta telefonu.',
    value: '19 zł',
  },
  {
    icon: <Calendar size={24} />,
    number: '#3',
    title: 'Sposób żeby zobaczyć czy naprawdę idzie ci lepiej — bez oszukiwania siebie',
    description: 'Codzienne pytania do siebie żeby zobaczyć postęp. Nie dasz rady nie zauważyć że coś się zmienia.',
    value: '19 zł',
  },
]

export default function BonusSection() {
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
          <span className="inline-block font-mono text-sm tracking-wide uppercase text-blue/80 mb-4">
            08 / W CENIE EBOOKA
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.2] uppercase text-gradient">
            Dostajesz więcej niż ebook
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#161B22] border-[#38BDF8]/20 border rounded-lg p-8 md:p-10 relative overflow-hidden transition-colors shadow-xl shadow-[#38BDF8]/5 hover:bg-[#1C2128]"
            >
              <div className="absolute top-0 right-0 bg-blue/10 font-mono text-blue/80 text-xs tracking-wider font-bold px-4 py-2 rounded-bl-2xl uppercase">
                Gratis
              </div>
              <span className="text-blue/70 mb-6 block scale-125 origin-left">{bonus.icon}</span>
              <span className="font-mono text-sm text-muted/60 tracking-widest uppercase mb-2 block">
                Bonus {bonus.number}
              </span>
              <h3 className="font-mono text-orange text-lg md:text-xl font-bold mb-4 tracking-tight uppercase">
                {bonus.title}
              </h3>
              <p className="font-sans text-muted text-base leading-relaxed mb-6">
                {bonus.description}
              </p>
              <div className="flex items-center gap-3 text-sm font-sans">
                <span className="text-muted/50 line-through">{bonus.value}</span>
                <span className="text-blue/70 font-mono font-bold tracking-wider text-base">0 zł</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
