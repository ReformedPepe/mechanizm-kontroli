'use client'

import { motion } from 'framer-motion'
import AccordionItem from '@/components/ui/AccordionItem'
import { BookOpen, BrainCircuit, Cpu, Target, RotateCcw, ShieldCheck } from 'lucide-react'

const chapters = [
  {
    icon: <BookOpen size={16} />,
    title: 'WSTĘP — Ostatni raz, kiedy patrzyłeś w górę',
    content:
      'Cyfrowe kasyno w Twojej kieszeni. Dlaczego „po prostu przestań" nie działa. Co znajdziesz w środku — i dlaczego to nie jest kolejna lista porad.',
  },
  {
    icon: <BrainCircuit size={16} />,
    title: 'Rozdział 1 — Anatomia Pętli',
    content:
      'Dopamina to hormon SZUKANIA, nie przyjemności. Mózg mówi „szukaj dalej", nie „już dosyć". Koszt: 6 000 zł/mies, 73 000 zł/rok. Objawy fizyczne: szyja, głowa z waty, sen.',
  },
  {
    icon: <Cpu size={16} />,
    title: 'Rozdział 2 — Mechanizm Hakerski',
    content:
      'Brain Rot, Infinite Scroll (brak punktów stopu), czerwona kropka, ping, kolory, FOMO, algorytm uczący się na Twoich reakcjach. Poznaj broń przeciwnika.',
  },
  {
    icon: <Target size={16} />,
    title: 'Rozdział 3 — Protokół Przerwania Pętli',
    content:
      'Metoda STORE: reset w 15 minut. Stop → Wejdź w ciało → Jedno zadanie → Odpoczynek → Wybierz co dalej. Plus plan na pierwsze 72 godziny krok po kroku.',
  },
  {
    icon: <RotateCcw size={16} />,
    title: 'Rozdział 4 — Strategia Zastępowania',
    content:
      'Uwaga: produktywna prokrastynacja to ten sam strzał dopaminy co TikTok. Lista ratunkowa: angażuj ręce, minimalna czynność, notatnik, wyjdź bez telefonu.',
  },
  {
    icon: <ShieldCheck size={16} />,
    title: 'Rozdział 5 — Nawroty i Utrzymanie',
    content:
      'Wpadniesz — to pewne. Zasada 1%: tydzień temu 3h, dziś 20 min = postęp. Accountability partner, czas offline z ludźmi, otoczenie które pomaga.',
  },
]

export default function ValueStackSection() {
  return (
    <section id="co-zyskasz" className="py-20 md:py-28 relative overflow-hidden section-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block font-mono text-sm tracking-wide uppercase text-orange mb-4">
            07 / CO DOSTANIESZ
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-purple tracking-[-0.02em] leading-[1.2] mb-5">
            Co znajdziesz w środku
          </h2>
          <p className="font-sans text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            6 rozdziałów. Zero wypełniaczy. Każdy to konkretne narzędzie lub protokół.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {chapters.map((chapter, i) => (
            <AccordionItem key={i} title={chapter.title} index={i} icon={chapter.icon} variant="purple">
              {chapter.content}
            </AccordionItem>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
