'use client'

import { motion } from 'framer-motion'
import { Smartphone, Bell, Brain, Moon } from 'lucide-react'

const problems = [
  {
    icon: <Smartphone size={24} />,
    title: 'Scrollujesz bez celu',
    description:
      'Otwierasz telefon „na chwilę" i nagle minęła godzina. Feed nigdy się nie kończy — tak został zaprojektowany.',
  },
  {
    icon: <Bell size={24} />,
    title: 'Powiadomienia rządzą dniem',
    description:
      'Każdy ping to 20 minut utraconego skupienia. Przy 30 pingach dziennie nie masz szans cokolwiek skończyć.',
  },
  {
    icon: <Brain size={24} />,
    title: 'Wiesz co powinieneś robić. I tak nie robisz.',
    description:
      'To nie lenistwo — to biologia. Twój mózg wybiera łatwy strzał dopaminy bo tak został zaprogramowany przez algorytmy.',
  },
  {
    icon: <Moon size={24} />,
    title: 'Wieczory znikają bezpowrotnie',
    description:
      'Planujesz przeczytać książkę, potrenować, porozmawiać. Zamiast tego — kanapa, telefon, poczucie winy.',
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-28 relative overflow-hidden section-bg-primary">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block font-mono text-sm tracking-wide uppercase text-orange mb-4">
            02 / ROZPOZNAJESZ TO?
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-purple tracking-[-0.02em] leading-[1.2] mb-5">
            Czy tak wygląda Twoja rzeczywistość?
          </h2>
          <p className="font-sans text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Jeśli choć jeden punkt trafia — ten ebook jest dla Ciebie.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="bg-bg2/40 border border-bg3/50 rounded-2xl p-8 md:p-10 h-full hover:border-purple/20 transition-colors">
                <span className="text-purple/60 mb-6 block transform scale-125 origin-left">{problem.icon}</span>
                <h3 className="font-mono text-orange text-lg md:text-xl font-bold mb-3 tracking-tight">
                  {problem.title}
                </h3>
                <p className="font-sans text-muted text-base md:text-lg leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
