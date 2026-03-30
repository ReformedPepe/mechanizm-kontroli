'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Brain, Moon, Heart, Battery, Focus } from 'lucide-react'
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"
import { cn } from "@/lib/utils"

const stats = [
  {
    icon: <Brain size={22} />,
    percent: '67%',
    label: 'osób nadużywających telefonu',
    consequence: (
      <>
        doświadcza objawów <span className="text-purple font-bold">depresji</span> lub przewlekłego <span className="text-purple font-bold">lęku</span>
      </>
    ),
    detail: 'Badania wykazują bezpośredni związek między czasem spędzonym na ekranie a poziomem kortyzolu — hormonu stresu.',
  },
  {
    icon: <Moon size={22} />,
    percent: '89%',
    label: 'użytkowników telefonów wieczorami',
    consequence: (
      <>
        ma problem z <span className="text-purple font-bold">zasypianiem</span> i snem głębokim
      </>
    ),
    detail: 'Ekspozycja na ekran przed snem opóźnia zasypianie średnio o 1,5 godziny. Przez rok to ponad 500 godzin utraconego odpoczynku.',
  },
  {
    icon: <Heart size={22} />,
    percent: '52%',
    label: 'par, w których jeden partner uważa',
    consequence: (
      <>
        że telefon <span className="text-purple font-bold">niszczy ich związek</span>
      </>
    ),
    detail: 'Nieobecność psychiczna podczas wspólnego czasu jest przez psychologów określana jako jeden z głównych powodów rozpadów związków.',
  },
  {
    icon: <Focus size={22} />,
    percent: '40%',
    label: 'spadek zdolności koncentracji',
    consequence: (
      <>
        u osób spędzających ponad <span className="text-purple font-bold">4h dziennie</span> z telefonem
      </>
    ),
    detail: 'Ciągłe przełączanie uwagi fizycznie zmienia strukturę mózgu. Efekty są niemal identyczne z objawami ADHD.',
  },
  {
    icon: <Battery size={22} />,
    percent: '3x',
    label: 'większe ryzyko',
    consequence: (
      <>
        chronicznego <span className="text-purple font-bold">zmęczenia</span> i wypalenia zawodowego
      </>
    ),
    detail: 'Mózg który nie ma chwili bez bodźców nie regeneruje się w nocy tak jak powinien. Budzisz się zmęczony bo byłeś zmęczony zanim zasnąłeś.',
  },
]

export default function HealthStatsSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden section-bg-secondary">
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
            03 / NIKT CI TEGO NIE POWIE WPROST
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.2] mb-5 uppercase text-gradient">
            Co ci grozi jeśli nic się nie zmieni
          </h2>
          <p className="font-sans text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            To nie straszenie. To dane. Przeczytaj jak czytasz ulotkę leku — uważnie.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-[#161B22] border border-orange/20 shadow-xl shadow-orange/5 rounded-lg p-8 overflow-hidden hover:bg-[#1C2128] transition-colors"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange/0 via-orange/40 to-orange/0" />
              <div className="flex items-center gap-3 mb-6">
                <span className="text-orange/70">{stat.icon}</span>
                <AlertTriangle size={14} className="text-orange/40" />
              </div>
              <div className="font-mono text-5xl font-extrabold text-orange tracking-tighter mb-2">
                {stat.percent}
              </div>
              <p className="font-sans text-xs text-muted uppercase tracking-widest mb-1">
                {stat.label}
              </p>
              <p className="font-sans text-text font-semibold text-base mb-4 leading-snug">
                {stat.consequence}
              </p>
              <p className="font-sans text-muted text-sm leading-relaxed border-t border-bg3/60 pt-4">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 max-w-2xl mx-auto text-center"
        >
          <p className="font-sans text-muted text-base leading-relaxed bg-[#161B22] border border-orange/20 shadow-xl shadow-orange/5 rounded-xl p-6 hover:bg-[#1C2128] transition-colors">
            <span className="text-orange font-semibold">Uwaga:</span>{' '}
            Te skutki nie pojawiają się nagle. Narastają powoli, niezauważalnie —
            aż pewnego dnia orientujesz się, że jesteś w miejscu z którego trudno wyjść.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
