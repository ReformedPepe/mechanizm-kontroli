'use client'

import { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  vertical?: boolean
  repeat?: number
  duration?: string
}

export default function Marquee({
  children,
  className = '',
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  duration = '40s',
}: MarqueeProps) {
  return (
    <div
      className={`group flex overflow-hidden ${
        vertical ? 'flex-col' : ''
      } ${className}`}
      style={{
        maskImage: vertical
          ? 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
          : 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: vertical
          ? 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
          : 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={`flex shrink-0 ${
            vertical ? 'flex-col' : ''
          } items-center justify-around gap-8 ${
            pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
          }`}
          style={{
            animation: `${
              vertical ? 'marquee-vertical' : 'marquee-horizontal'
            } ${duration} linear infinite ${reverse ? 'reverse' : ''}`,
          }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
