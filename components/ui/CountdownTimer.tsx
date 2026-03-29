'use client'

import { useEffect, useState } from 'react'

const DURATION = 48 * 60 * 60 * 1000
const KEY = 'mk_timer_start'

export default function CountdownTimer({ className = '' }: { className?: string }) {
  const [timeLeft, setTimeLeft] = useState<number | null>(null)
  const [expired, setExpired] = useState(false)

  useEffect(() => {
    let start = localStorage.getItem(KEY)

    if (!start) {
      const now = Date.now().toString()
      localStorage.setItem(KEY, now)
      start = now
    }

    const startTime = parseInt(start, 10)

    const tick = () => {
      const remaining = DURATION - (Date.now() - startTime)
      if (remaining <= 0) {
        setExpired(true)
        setTimeLeft(0)
      } else {
        setTimeLeft(remaining)
      }
    }

    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  if (timeLeft === null) {
    return <span className={`font-mono tabular-nums ${className}`}>--:--:--</span>
  }

  if (expired) {
    return <span className={`font-mono text-orange ${className}`}>Oferta wygasła</span>
  }

  const hours = Math.floor(timeLeft / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)
  const pad = (n: number) => n.toString().padStart(2, '0')

  return (
    <span className={`font-mono tabular-nums tracking-wider ${className}`}>
      <span className="text-orange">{pad(hours)}</span>
      <span className="text-muted/50">:</span>
      <span className="text-orange">{pad(minutes)}</span>
      <span className="text-muted/50">:</span>
      <span className="text-orange">{pad(seconds)}</span>
    </span>
  )
}
