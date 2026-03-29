'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Clock, BrainCircuit, Zap } from 'lucide-react'
import { fbInitiateCheckout } from '@/lib/metaPixel'
import AnimatedShinyText from '@/components/ui/magicui/animated-shiny-text'
import NumberTicker from '@/components/ui/magicui/number-ticker'
import ShimmerButton from '@/components/ui/magicui/shimmer-button'
import DotPattern from '@/components/ui/magicui/dot-pattern'

const stats = [
  { icon: <Clock size={18} />, value: 700, suffix: 'h', label: 'zmarnowanych rocznie' },
  { icon: <BrainCircuit size={18} />, value: 6000, prefix: '', suffix: ' zł', label: 'wartość uwagi / mies.' },
  { icon: <Zap size={18} />, value: 20, suffix: ' min', label: 'fokus stracony na 1 ping' },
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const meshScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  const handleCTA = () => {
    fbInitiateCheckout()
    window.location.href = '#oferta'
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28 min-h-screen section-bg-primary">
      {/* Dot pattern background */}
      <DotPattern opacity={0.05} gap={24} dotSize={1} />

      {/* Grid lines background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Parallax gradient mesh */}
      <motion.div
        style={{ y: bgY, scale: meshScale }}
        className="absolute inset-0 pointer-events-none [transform:translateZ(0)]"
      >
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[160px]"
          style={{ background: 'rgba(124,58,237,0.12)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ background: 'rgba(249,115,22,0.08)' }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 mt-8 md:mt-16">
        <div className="max-w-[800px] mx-auto text-center">
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
            className="font-mono text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-[-0.02em] mb-8"
          >
            Twój mózg nie jest{' '}
            <span className="text-orange">zepsuty</span>
            <br />
            <span className="text-purple">— jest zhakowany</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-muted max-w-2xl mx-auto mb-14 leading-[1.6]"
          >
            Tracisz <span className="text-text font-medium">700 godzin rocznie</span> na
            scrollowanie bez celu. To nie kwestia silnej woli — to kwestia
            środowiska. Nawet jeśli masz ADHD.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24"
          >
            <ShimmerButton
              onClick={handleCTA}
              className="w-full sm:w-auto font-mono font-bold text-base md:text-lg tracking-wider uppercase px-12 py-5 text-bg flex items-center justify-center gap-2"
            >
              Odzyskuję swój czas
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </ShimmerButton>
            <span className="text-muted text-base font-sans">
              <span className="line-through text-muted/50">97 zł</span>{' '}
              <span className="text-orange font-mono font-bold text-2xl">47 zł</span>
            </span>
          </motion.div>

          {/* Stats with NumberTicker */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-bg2/40 backdrop-blur-sm border border-bg3/50 rounded-xl p-5 flex flex-col items-center gap-2"
              >
                <span className="text-purple/70">{stat.icon}</span>
                <span className="font-mono text-xl font-bold text-text">
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
