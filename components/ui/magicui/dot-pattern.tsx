'use client'

import { useId } from 'react'

interface DotPatternProps {
  className?: string
  dotColor?: string
  dotSize?: number
  gap?: number
  opacity?: number
}

export default function DotPattern({
  className = '',
  dotColor = 'rgba(255,255,255,1)',
  dotSize = 1,
  gap = 20,
  opacity = 0.05,
}: DotPatternProps) {
  const id = useId()
  const patternId = `dot-pattern-${id}`

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={gap}
          height={gap}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={dotSize} cy={dotSize} r={dotSize} fill={dotColor} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}
