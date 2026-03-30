'use client'

import { motion } from 'framer-motion'
import { Sun, Heart, Clock, Smile, TrendingUp } from 'lucide-react'
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"
import { cn } from "@/lib/utils"

const changes = [
  {
    icon: <Smile size={20} />,
    text: (
      <>
        <span className="text-text font-bold">Zniknie to dziwne napięcie w klatce piersiowej</span>, <span className="text-muted">kiedy nie masz telefonu pod ręką.</span>
      </>
    ),
  },
  {
    icon: <Clock size={20} />,
    text: (
      <>
        <span className="text-text font-bold">Weekend przestanie być „znikającym czasem"</span> <span className="text-muted">— poczujesz, że naprawdę odpocząłeś.</span>
      </>
    ),
  },
  {
    icon: <Sun size={20} />,
    text: (
      <>
        <span className="text-text font-bold">Znowu zaczniesz czytać książki</span>, <span className="text-muted">oglądać filmy bez przewijania i słuchać ludzi bez sprawdzania powiadomień.</span>
      </>
    ),
  },
  {
    icon: <Heart size={20} />,
    text: (
      <>
        <span className="text-text font-bold">Odzyskasz szacunek do samego siebie.</span> <span className="text-muted">Poczucie sprawstwa wróci tam, gdzie jego miejsce.</span>
      </>
    ),
  },
  {
    icon: <Smile size={20} />,
    text: (
      <>
        <span className="text-text font-bold">Twój mózg przestanie domagać się „jeszcze jednego filmu"</span> <span className="text-muted">i znowu poczujesz radość z prostych rzeczy.</span>
      </>
    ),
  },
]

const AnimatedChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-[#161B22] border border-green-500/20 shadow-2xl shadow-green-500/10 rounded-2xl p-6 md:p-10 relative overflow-hidden h-full flex flex-col min-h-[400px]"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-transparent pointer-events-none" />

      <div className="flex items-center justify-between mb-8 relative z-10">
        <div>
          <h3 className="font-mono text-green-500 font-bold uppercase text-sm md:text-base tracking-wider">
            Trajektoria Zmiany
          </h3>
          <p className="font-sans text-xs md:text-sm text-muted mt-1">Poziom odzyskanej uwagi</p>
        </div>
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/10 flex items-center justify-center">
          <TrendingUp size={24} className="text-green-500" />
        </div>
      </div>

      <div className="relative w-full flex-grow border-l border-b border-bg3/50 flex flex-col pb-6 pl-2 mt-4">
        {/* Y Axis Labels */}
        <div className="absolute -left-10 top-0 bottom-6 flex flex-col justify-between text-[10px] text-muted font-mono py-2 w-8 text-right">
          <span>MAX</span>
          <span>50%</span>
          <span>MIN</span>
        </div>

        {/* X Axis Labels */}
        <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] md:text-xs text-muted font-mono px-2 pt-2">
          <span>Dziś</span>
          <span>Ebook</span>
          <span>Za 14 dni</span>
        </div>

        <div className="relative w-full h-full pb-4">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 400 250"
            preserveAspectRatio="none"
          >
            {/* Defs for gradient */}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* Grid lines (svg) */}
            <line x1="0" y1="250" x2="400" y2="250" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
            <line x1="0" y1="125" x2="400" y2="125" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
            <line x1="0" y1="0" x2="400" y2="0" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />

            {/* Vertical grid line for 'Ebook' phase */}
            <line x1="120" y1="0" x2="120" y2="250" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />

            {/* The Path */}
            {/* The Path */}
            <motion.path
              d="M 10,230 C 100,230 150,80 380,20"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            />

            {/* Glow effect behind line */}
            <motion.path
              d="M 10,230 C 100,230 150,80 380,20"
              fill="none"
              stroke="#22c55e"
              strokeWidth="12"
              strokeOpacity="0.15"
              className="blur-md"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            />
          </svg>

          {/* Floating Data Points */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.2, type: 'spring' }}
            className="absolute -top-1 right-2 bg-green-500/20 border border-green-500/50 text-green-400 text-[10px] md:text-xs font-mono px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"
          >
            Spokój umysłu
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, type: 'spring' }}
            className="absolute bottom-[20%] left-[25%] bg-orange/10 border border-orange/30 text-orange/80 text-[10px] font-mono px-2 py-1 rounded-full pointer-events-none"
          >
            Wdrożenie systemu
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ValueStackSection() {
  return (
    <section id="co-zyskasz" className="py-20 md:py-28 relative overflow-hidden section-bg-secondary">
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
            07 / CO SIĘ ZMIENI
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.2] mb-5 uppercase text-gradient">
            Jak będzie wyglądać twoje życie
          </h2>
          <p className="font-sans text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Nie obietnice. Konkretne rzeczy które poczujesz w ciągu kilku tygodni.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 max-w-6xl mx-auto items-stretch">
          <div className="space-y-4">
            {changes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5 bg-[#161B22] border border-orange/20 shadow-xl shadow-orange/5 rounded-lg p-5 md:p-6 hover:bg-[#1C2128] transition-colors"
              >
                <span className="text-orange mt-0.5 flex-shrink-0">{item.icon}</span>
                <p className="font-sans text-text text-base md:text-lg leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="w-full lg:h-auto min-h-[400px]">
            <AnimatedChart />
          </div>
        </div>
      </div>
    </section>
  )
}
