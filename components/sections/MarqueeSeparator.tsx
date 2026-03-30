'use client'

import Marquee from '@/components/ui/magicui/marquee'

const items = [
  '700 GODZIN ROCZNIE',
  'ODZYSKANE WIECZORY',
  'BEZ SILNEJ WOLI',
  'KONIEC Z POCZUCIEM WINY',
  'DZIAŁA PRZY ADHD',
  '2400+ CZYTELNIKÓW',
  'NATYCHMIASTOWY DOSTĘP',
  'GWARANCJA 14 DNI',
]

export default function MarqueeSeparator() {
  return (
    <div className="py-5 bg-bg2/50 border-y border-bg3/30 overflow-hidden">
      <Marquee duration="50s" pauseOnHover repeat={5}>
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 font-mono text-[11px] tracking-[0.2em] uppercase whitespace-nowrap px-2"
          >
            <span className="text-muted/60">{item}</span>
            <span className="text-orange/40">·</span>
          </span>
        ))}
      </Marquee>
    </div>
  )
}
