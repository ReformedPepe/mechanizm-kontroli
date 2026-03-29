'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface NumberTickerProps {
  value: number
  direction?: 'up' | 'down'
  delay?: number
  className?: string
  decimalPlaces?: number
  suffix?: string
  prefix?: string
}

export default function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  className = '',
  decimalPlaces = 0,
  suffix = '',
  prefix = '',
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const motionValue = useMotionValue(direction === 'down' ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const [displayValue, setDisplayValue] = useState(
    direction === 'down' ? value : 0
  )

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === 'down' ? 0 : value)
      }, delay * 1000)
      return () => clearTimeout(timer)
    }
  }, [motionValue, isInView, delay, value, direction])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(parseFloat(latest.toFixed(decimalPlaces)))
    })
    return unsubscribe
  }, [springValue, decimalPlaces])

  const formatNumber = (num: number) => {
    if (decimalPlaces > 0) {
      return num.toFixed(decimalPlaces)
    }
    return Math.round(num).toLocaleString('pl-PL')
  }

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {formatNumber(displayValue)}
      {suffix}
    </span>
  )
}
