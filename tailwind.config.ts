import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0D1117',
        bg2: '#161B22',
        bg3: '#1C2128',
        orange: '#F97316',
        purple: '#7C3AED',
        blue: '#38BDF8',
        text: '#E2E8F0',
        muted: '#8B949E',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
        sans: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
      },
      spacing: {
        section: '140px',
      },
      keyframes: {
        'shiny-text': {
          '0%, 100%': { backgroundPosition: '-200px 0' },
          '50%': { backgroundPosition: '200px 0' },
        },
        'shimmer-slide': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'border-beam-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'marquee-horizontal': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-vertical': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'shiny-text': 'shiny-text 4s ease-in-out infinite',
        'shimmer-slide': 'shimmer-slide 2.5s ease-in-out infinite',
        'border-beam-spin': 'border-beam-spin 12s linear infinite',
        'marquee-horizontal': 'marquee-horizontal 40s linear infinite',
        'marquee-vertical': 'marquee-vertical 40s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
