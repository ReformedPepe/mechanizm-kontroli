'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  index?: number
  icon?: React.ReactNode
  variant?: 'purple' | 'orange'
}

export default function AccordionItem({ title, children, index, icon, variant = 'purple' }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  const activeStyles =
    variant === 'purple'
      ? 'bg-[#7C3AED]/[0.08] border-[#7C3AED]/30'
      : 'bg-[#F97316]/[0.06] border-[#F97316]/20'
      
  const baseStyles = 'bg-[#161B22] border-white/[0.06]'

  return (
    <div className={`border rounded overflow-hidden transition-colors duration-200 ${isOpen ? activeStyles : baseStyles}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-[#1C2128] transition-colors"
      >
        <div className="flex items-center gap-3">
          {index !== undefined && (
            <span className="font-mono text-orange/70 text-xs font-bold tracking-wider">
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
          {icon && <span className="text-purple/80">{icon}</span>}
          <span className="font-sans text-text font-medium text-sm md:text-[15px] leading-snug">
            {title}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-muted/60 flex-shrink-0"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 md:px-6 md:pb-6 text-muted text-sm leading-relaxed font-sans">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
