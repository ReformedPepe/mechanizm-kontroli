'use client'

interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  borderWidth?: number
  colorFrom?: string
  colorTo?: string
  delay?: number
}

export default function BorderBeam({
  className = '',
  size = 200,
  duration = 12,
  borderWidth = 1.5,
  colorFrom = '#F97316',
  colorTo = '#7C3AED',
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 rounded-[inherit] ${className}`}
      style={{
        WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        padding: `${borderWidth}px`,
      }}
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, transparent 25%, ${colorFrom} 30%, ${colorTo} 45%, transparent 50%, transparent 100%)`,
          animation: `border-beam-spin ${duration}s linear ${delay}s infinite`,
          width: `${size}%`,
          height: `${size}%`,
          top: `${-(size - 100) / 2}%`,
          left: `${-(size - 100) / 2}%`,
        }}
      />
    </div>
  )
}
