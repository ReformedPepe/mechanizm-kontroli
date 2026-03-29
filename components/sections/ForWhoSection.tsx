'use client'

import { motion } from 'framer-motion'
import { Check, X, UserCheck, UserX } from 'lucide-react'

const forWho = [
  'Zarządzasz zespołem lub prowadzisz firmę i wiesz że twoja uwaga to twój najcenniejszy zasób',
  'Pracujesz na etacie z odpowiedzialnością — raporty, deadliny, spotkania — i wieczorami „wyłączasz się" w telefonie zamiast odpoczywać',
  'Jesteś managerem, specjalistą, freelancerem który „w pracy daje radę" ale po godzinach traci się w scrollu',
  'Masz ADHD lub podejrzewasz dysfunkcję wykonawczą i wiesz że zwykłe porady nie działają na twój mózg',
  'Próbowałeś już limitów ekranu, detoksów i postanowień — i za każdym razem wróciłeś',
]

const notForWho = [
  'Szukasz motywacyjnego przemówienia i cytatów o dyscyplinie',
  'Chcesz żeby ktoś zrobił za ciebie wszystko bez żadnego wysiłku z twojej strony',
  'Twój scrolling nie jest problemem i masz pełną kontrolę nad swoim czasem',
  'Kupujesz ebooki i chowasz je do szuflady bez wdrożenia',
]

export default function ForWhoSection() {
  return (
    <section id="dla-kogo" className="py-20 md:py-28 relative overflow-hidden section-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block font-mono text-sm tracking-wide uppercase text-orange mb-4">
            03 / KWALIFIKACJA
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-purple tracking-[-0.02em] leading-[1.2]">
            Dla kogo to jest
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#161B22] border border-white/[0.06] border-t-2 border-t-[#4ADE80] rounded-lg p-8 shadow-xl shadow-[#4ADE80]/5 hover:bg-[#1C2128] transition-colors"
          >
            <h3 className="font-mono text-base font-bold text-text/90 mb-8 flex items-center gap-3 tracking-wide">
              <div className="w-8 h-8 rounded-lg bg-green-500/15 flex items-center justify-center">
                <UserCheck size={16} className="text-green-500/90" />
              </div>
              To jest dla Ciebie, jeśli:
            </h3>
            <ul className="space-y-5">
              {forWho.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-base font-sans text-text/80 leading-relaxed">
                  <Check size={18} className="text-green-500/80 mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#161B22] border border-white/[0.06] border-t-2 border-t-[#F87171] rounded-lg p-8 shadow-xl shadow-[#F87171]/5 hover:bg-[#1C2128] transition-colors"
          >
            <h3 className="font-mono text-base font-bold text-text/90 mb-8 flex items-center gap-3 tracking-wide">
              <div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center">
                <UserX size={16} className="text-red-500/90" />
              </div>
              To NIE jest dla Ciebie, jeśli:
            </h3>
            <ul className="space-y-5">
              {notForWho.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-base font-sans text-muted leading-relaxed">
                  <X size={18} className="text-red-500/70 mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
