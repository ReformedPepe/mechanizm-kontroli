'use client'

import { motion } from 'framer-motion'
import { Star, Users, ThumbsUp, Quote, ArrowRight } from 'lucide-react'
import NumberTicker from '@/components/ui/magicui/number-ticker'

const stats = [
  { icon: <Users size={20} />, value: 2400, suffix: '+', label: 'czytelników' },
  { icon: <Star size={20} />, value: 4.8, suffix: '/5', label: 'średnia ocena', decimal: 1 },
  { icon: <ThumbsUp size={20} />, value: 94, suffix: '%', label: 'poleca' },
]

const testimonials = [
  {
    quote:
      'Przez pierwsze 3 dni byłem nakręcony. Czwartego wróciłem na Reddita. Ale piątego złapałem się po 10 minutach zamiast po 3 godzinach. Dla mnie to był przełom.',
    name: 'Piotr K.',
    age: '34 l.',
    role: 'project manager',
  },
  {
    quote:
      'Mam ADHD i przez lata myślałam, że jestem po prostu leniwa. Metoda STORE to pierwszy system, który działa z moim mózgiem a nie przeciwko niemu. W pierwszy tydzień odzyskałam wieczory.',
    name: 'Kasia M.',
    age: '29 l.',
    role: 'UX designerka',
  },
  {
    quote:
      'Prowadzę firmę, 12h dziennie w trybie ogarniania. Wieczorem rozpadałem się z telefonem. Po 2 tygodniach z ebookiem czytam książki przed snem. Nie pamiętam kiedy ostatnio.',
    name: 'Tomek R.',
    age: '41 l.',
    role: 'właściciel e-commerce',
  },
]

export default function SocialProofSection() {
  return (
    <section id="opinie" className="py-20 md:py-28 relative overflow-hidden section-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block font-mono text-sm tracking-wide uppercase text-orange mb-4">
            05 / REZULTATY EBOOKA
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-purple tracking-[-0.02em] leading-[1.2]">
            Oni nie zwlekali
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-20 md:mb-24"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <span className="text-orange/80 mb-3 flex justify-center scale-125">{stat.icon}</span>
              <span className="font-mono text-3xl md:text-5xl font-bold text-text block mb-1">
                <NumberTicker
                  value={stat.value}
                  suffix={stat.suffix}
                  decimalPlaces={stat.decimal || 0}
                  delay={0.3 + i * 0.2}
                />
              </span>
              <span className="font-sans text-xs md:text-sm text-muted tracking-widest uppercase">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#161B22] border border-white/[0.06] border-t-2 border-t-[#7C3AED] rounded-lg p-[28px] relative hover:bg-[#1C2128] transition-colors"
            >
              <Quote size={28} className="text-purple/15 absolute top-8 right-8" />
              <p className="font-sans text-text/90 text-base md:text-lg leading-[1.8] mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange/80 to-purple/80 flex items-center justify-center font-mono text-lg font-bold text-bg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <span className="font-sans text-base text-text font-semibold block leading-snug">
                    {t.name}, {t.age}
                  </span>
                  <span className="font-sans text-sm text-muted">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16 md:mt-24"
        >
          <a
            href="#oferta"
            className="group inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange/90 text-bg font-mono font-bold text-base tracking-wider uppercase px-10 py-5 w-full sm:w-auto rounded-xl transition-all hover:shadow-lg hover:shadow-orange/20"
          >
            Dołącz do nich
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
