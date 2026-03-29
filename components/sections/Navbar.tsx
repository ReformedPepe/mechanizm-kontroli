'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Oferta', href: '#oferta' },
  { label: 'Co zyskasz', href: '#co-zyskasz' },
  { label: 'Opinie', href: '#opinie' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-bg/70 backdrop-blur-2xl border-b border-bg3/30">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-base font-bold tracking-tight">
          <span className="text-orange">MECHANIZM</span>
          <span className="text-text/90">_KONTROLI</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-text transition-colors text-[13px] font-sans tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#oferta"
            className="bg-orange hover:bg-orange/90 text-bg font-mono font-bold text-xs tracking-wider uppercase px-6 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-orange/20 inline-block"
          >
            Chcę to
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-bg2/95 backdrop-blur-xl border-b border-bg3/30"
          >
            <div className="px-4 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted hover:text-text transition-colors text-sm font-sans text-left"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#oferta"
                onClick={() => setIsOpen(false)}
                className="bg-orange hover:bg-orange/90 text-bg font-mono font-bold text-sm px-6 py-3 rounded-lg transition-colors text-center block"
              >
                Chcę to
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
