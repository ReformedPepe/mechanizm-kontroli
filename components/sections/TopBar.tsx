'use client'

import CountdownTimer from '@/components/ui/CountdownTimer'

export default function TopBar() {
  return (
    <div className="bg-bg2/80 border-b border-bg3/50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3 text-xs tracking-wide">
        <span className="text-muted font-sans hidden sm:inline">
          Promocyjna cena kończy się za
        </span>
        <span className="text-muted font-sans sm:hidden">
          Oferta kończy się za
        </span>
        <CountdownTimer className="text-sm" />
      </div>
    </div>
  )
}
