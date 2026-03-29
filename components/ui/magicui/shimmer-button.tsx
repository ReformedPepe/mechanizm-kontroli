'use client'

import { CSSProperties, ReactNode } from 'react'

interface ShimmerButtonProps {
  children: ReactNode
  className?: string
  shimmerColor?: string
  shimmerSize?: string
  shimmerDuration?: string
  background?: string
  borderRadius?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit'
}

export default function ShimmerButton({
  children,
  className = '',
  shimmerColor = 'rgba(255,255,255,0.15)',
  shimmerSize = '0.08em',
  shimmerDuration = '2.5s',
  background = '#F97316',
  borderRadius = '12px',
  onClick,
  disabled = false,
  type = 'button',
}: ShimmerButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group relative overflow-hidden disabled:opacity-70 transition-all ${className}`}
      style={
        {
          borderRadius,
          '--shimmer-color': shimmerColor,
          '--shimmer-size': shimmerSize,
          '--shimmer-duration': shimmerDuration,
          '--shimmer-bg': background,
          background,
        } as CSSProperties
      }
    >
      {/* Shimmer overlay */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[inherit]"
        style={{ borderRadius }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, transparent 0%, transparent 35%, ${shimmerColor} 50%, transparent 65%, transparent 100%)`,
            backgroundSize: '200% 100%',
            animation: `shimmer-slide ${shimmerDuration} ease-in-out infinite`,
          }}
        />
      </div>

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]"
        style={{
          boxShadow: `0 8px 32px ${background}40, 0 0 60px ${background}20`,
          borderRadius,
        }}
      />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </button>
  )
}
