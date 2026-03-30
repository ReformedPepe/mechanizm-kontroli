'use client'

import { motion } from 'framer-motion'
import { Star, Users, ThumbsUp, Quote, ArrowRight } from 'lucide-react'
import NumberTicker from '@/components/ui/magicui/number-ticker'
import ShimmerButton from '@/components/ui/magicui/shimmer-button'
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"
import { cn } from "@/lib/utils"

const stats = [
  { icon: <Users size={20} />, value: 2400, suffix: '+', label: 'czytelników' },
  { icon: <Star size={20} />, value: 4.8, suffix: '/5', label: 'średnia ocena', decimal: 1 },
  { icon: <ThumbsUp size={20} />, value: 94, suffix: '%', label: 'poleca' },
]

const testimonials = [
  {
    quote: (
      <>
        <span className="text-text font-bold uppercase tracking-tight">Odzyskałem 3 godziny dziennie.</span> Dawniej scrollowałem do nocy, teraz wieczory spędzam na własnych projektach. Mechanizm Kontroli pozwolił mi odzyskać czas bez walki.
      </>
    ),
    name: 'Piotr K.',
    age: '34 l.',
    role: 'project manager',
    date: '3 dni temu',
    color: 'from-purple/80 to-blue/80',
  },
  {
    quote: (
      <>
        <span className="text-text font-bold uppercase tracking-tight">To pierwszy system, który działa z moim ADHD.</span> Przez lata myślałam, że jestem po prostu leniwa. W pierwszym tygodniu odzyskałam spokój i poczucie kontroli nad wieczorami.
      </>
    ),
    name: 'Kasia M.',
    age: '29 l.',
    role: 'UX designerka',
    date: '1 tydzień temu',
    color: 'from-orange/80 to-rose-500/80',
  },
  {
    quote: (
      <>
        <span className="text-text font-bold uppercase tracking-tight">Wreszcie śpię normalnie.</span> Jako właściciel firmy byłem w ciągłym trybie &bdquo;czuwania&rdquo;. Teraz telefon ląduje w szafce przed snem, a ja czytam książki bez rozpraszaczy.
      </>
    ),
    name: 'Tomek R.',
    age: '41 l.',
    role: 'właściciel e-commerce',
    date: '2 tygodnie temu',
    color: 'from-blue/80 to-emerald-500/80',
  },
  {
    quote: (
      <>
        <span className="text-text font-bold uppercase tracking-tight">Koniec z brain fogiem.</span> Moja koncentracja w pracy skoczyła o 100%. Nie wierzyłam, że świadome projektowanie środowiska ma aż taki wpływ na moją wydajność i spokój.
      </>
    ),
    name: 'Ania L.',
    age: '26 l.',
    role: 'programistka',
    date: '4 dni temu',
    color: 'from-indigo-500/80 to-purple/80',
  },
  {
    quote: (
      <>
        <span className="text-text font-bold uppercase tracking-tight">Zdałem sesję bez stresu.</span> Zamiast scrollować co 10 minut, stosuję protokoły z ebooka. Mózg przestał błagać o szybką dopaminę, a nauka stała się głębsza i szybsza.
      </>
    ),
    name: 'Michał B.',
    age: '22 l.',
    role: 'student IT',
    date: 'Wczoraj',
    color: 'from-amber-500/80 to-orange/80',
  },
  {
    quote: (
      <>
        <span className="text-text font-bold uppercase tracking-tight">Jestem bardziej obecna dla dzieci.</span> Telefon przestał być moją ucieczką. Dzięki Mechanizmowi Kontroli nauczyłam się odpoczywać bez ekranu i być tu i teraz.
      </>
    ),
    name: 'Magda S.',
    age: '38 l.',
    role: 'mama dwójki dzieci',
    date: '5 dni temu',
    color: 'from-rose-500/80 to-purple/80',
  },
]

export default function SocialProofSection() {
  return (
    <section id="opinie" className="py-20 md:py-28 relative overflow-hidden section-bg-secondary">
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
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block font-mono text-sm tracking-wide uppercase text-orange mb-4">
            06 / REZULTATY EBOOKA
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.2] uppercase text-gradient">
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
              <span className="font-mono text-3xl md:text-5xl font-bold text-orange block mb-1">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#161B22] border border-purple/20 border-b-2 border-b-purple shadow-xl shadow-purple/5 rounded-2xl p-6 relative hover:bg-[#1C2128] transition-colors flex flex-col items-center text-center group"
            >
              <Quote size={20} className="text-purple/10 absolute top-6 right-6 group-hover:text-purple/20 transition-colors" />

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center font-mono text-xl font-black text-bg mb-6 shadow-lg shadow-purple/10`}>
                {t.name.charAt(0)}
              </div>

              <div className="font-sans text-text text-sm leading-[1.6] mb-4 flex-grow">
                &ldquo;<span className="text-muted italic">{t.quote}</span>&rdquo;
              </div>

              <div className="w-full pt-4 border-t border-bg3/50">
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-orange fill-orange" />
                  ))}
                </div>
                <div>
                  <span className="font-sans text-sm text-text font-bold block leading-snug">
                    {t.name}, {t.age}
                  </span>
                  <div className="flex flex-col items-center">
                    <span className="font-sans text-[10px] text-muted uppercase tracking-wider mb-0.5">{t.role}</span>
                    <span className="font-mono text-[8px] text-orange/50 uppercase tracking-widest">{t.date}</span>
                  </div>
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
          className="text-center mt-12 md:mt-16"
        >
          <ShimmerButton
            onClick={() => window.location.href = '#oferta'}
            className="group inline-flex items-center justify-center gap-2 font-mono font-bold text-base tracking-wider uppercase px-12 py-6 w-full sm:w-auto text-bg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)] active:scale-[0.98]"
          >
            Dołącz do nich
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  )
}
