'use client'

import { CSSProperties, ReactNode } from 'react'

interface AnimatedShinyTextProps {
  children: ReactNode
  className?: string
  shimmerWidth?: number
}

export default function AnimatedShinyText({
  children,
  className = '',
  shimmerWidth = 100,
}: AnimatedShinyTextProps) {
  return (
    <span
      className={`inline-block bg-clip-text ${className}`}
      style={
        {
          backgroundSize: `${shimmerWidth}px 100%`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '-100px 0',
          backgroundImage:
            'linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.5) 40%, rgba(249,115,22,0.8) 50%, rgba(249,115,22,0.5) 60%, transparent 100%)',
          WebkitBackgroundClip: 'text',
          animation: 'shiny-text 4s ease-in-out infinite',
        } as CSSProperties
      }
    >
      {children}
    </span>
  )
}
