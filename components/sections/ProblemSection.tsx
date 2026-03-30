'use client'

import { motion } from 'framer-motion'
import { Smartphone, Bell, Brain, Moon } from 'lucide-react'

const problems = [
  {
    icon: <Smartphone size={24} />,
    title: 'Kładziesz się spać i patrzysz w telefon do drugiej w nocy',
    description: (
      <>
        Miałeś pójść spać o 23:00. Ale przewijasz dalej. I dalej. Aż nagle jest 1:30 i <span className="text-purple font-bold">jutro będziesz zmęczony</span> — znowu.
      </>
    ),
  },
  {
    icon: <Bell size={24} />,
    title: 'Twoje dzieci mówią do ciebie, a ty siedzisz w telefonie',
    description: (
      <>
        Kiwasz głową, mówisz „mhm”. Ale <span className="text-purple font-bold">nie słuchasz</span>. I wiesz o tym. I czujesz się z tym źle — ale następnym razem <span className="text-purple font-bold">znowu to robisz</span>.
      </>
    ),
  },
  {
    icon: <Brain size={24} />,
    title: 'Czujesz niepokój i rozrażenienie bez powodu',
    description: (
      <>
        <span className="text-purple font-bold">Jesteś rozdrażniony</span>, trudno ci się skupić, czujesz że coś powinieneś robić ale nie wiesz co. I nie wiesz skąd to przychodzi.
      </>
    ),
  },
  {
    icon: <Moon size={24} />,
    title: 'Wieczory znikają bezpowrotnie',
    description: (
      <>
        Planowałeś porozmawiać z partnerem, przeczytać książkę, poćwiczyć. Zamiast tego — kanapa, telefon, <span className="text-purple font-bold">poczucie winy</span>. Jutro na pewno inaczej.
      </>
    ),
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-28 relative overflow-hidden section-bg-primary">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block font-mono text-sm tracking-wide uppercase text-orange mb-4">
            02 / ROZPOZNAJESZ TO?
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.2] mb-5 uppercase text-gradient">
            Czy tak wygląda Twoja rzeczywistość?
          </h2>
          <p className="font-sans text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Jeśli choć jeden punkt trafia — ten ebook jest dla Ciebie.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="bg-[#161B22] border border-purple/20 shadow-xl shadow-purple/5 rounded-2xl p-8 md:p-10 h-full hover:bg-[#1C2128] transition-colors">
                <span className="text-purple/60 mb-6 block transform scale-125 origin-left">{problem.icon}</span>
                <h3 className="font-mono text-orange text-lg md:text-xl font-bold mb-3 tracking-tight uppercase">
                  {problem.title}
                </h3>
                <p className="font-sans text-muted text-base md:text-lg leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
