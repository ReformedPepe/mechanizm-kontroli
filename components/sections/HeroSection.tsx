'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Clock, BrainCircuit, Zap } from 'lucide-react'
import { fbInitiateCheckout } from '@/lib/metaPixel'
import AnimatedShinyText from '@/components/ui/magicui/animated-shiny-text'
import NumberTicker from '@/components/ui/magicui/number-ticker'
import ShimmerButton from '@/components/ui/magicui/shimmer-button'
import BackgroundPaths from '@/components/ui/magicui/background-paths'

const stats = [
  { icon: <Clock size={18} />, value: 700, suffix: 'h', label: 'życia traconego rocznie' },
  { icon: <BrainCircuit size={18} />, value: 6000, prefix: '', suffix: ' zł', label: 'wartość zmarnowanego czasu / mies.' },
  { icon: <Zap size={18} />, value: 67, suffix: '%', label: 'osób odczuwa lęk bez telefonu' },
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const handleCTA = () => {
    fbInitiateCheckout()
    window.location.href = '#oferta'
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden min-h-[100svh] flex flex-col justify-center py-20 md:py-24 section-bg-primary">
      {/* Dynamic Paths Background */}
      <BackgroundPaths />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="w-full max-w-[900px] mx-auto text-center">
          {/* Badge with shimmer effect */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-orange/5 border border-orange/10 rounded-full px-4 py-1.5 mb-10">
              <AnimatedShinyText className="font-mono text-[10px] tracking-[0.2em] uppercase text-orange/80">
                // MECHANIZM KONTROLI v1.0
              </AnimatedShinyText>
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-[-0.02em] mb-8 uppercase text-gradient"
          >
            Twój telefon{' '}
            <span className="text-orange">niszczy ci życie.</span>
            <br />
            <span className="text-purple">I wiesz o tym.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-muted max-w-2xl mx-auto mb-14 leading-[1.6]"
          >
            Wieczory których już <span className="text-purple font-bold">nie odzyskasz</span>. Relacje które <span className="text-purple font-bold">na tym cierpią</span>.
            Poranne poczucie, że <span className="text-purple font-bold">znowu dałeś się wciągnąć</span>.{' '}
            <span className="text-orange font-bold uppercase">Jest jeden sposób żeby to zatrzymać.</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
          >
            <ShimmerButton
              onClick={handleCTA}
              className="w-full sm:w-auto font-mono font-bold text-base md:text-lg tracking-wider uppercase px-12 py-6 text-bg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)] active:scale-[0.98]"
            >
              Chcę to zatrzymać
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </ShimmerButton>
            <span className="text-muted text-base font-sans">
              <span className="line-through text-muted/50">97 zł</span>{' '}
              <span className="text-orange font-mono font-bold text-2xl">47 zł</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-bg2/40 backdrop-blur-sm border border-bg3/50 rounded-xl p-5 flex flex-col items-center gap-2"
              >
                <span className="text-purple/70">{stat.icon}</span>
                <span className="font-mono text-xl font-bold text-orange">
                  <NumberTicker
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    delay={0.5 + i * 0.2}
                  />
                </span>
                <span className="font-sans text-xs text-muted tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom section fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent pointer-events-none z-10" />
    </section>
  )
}
