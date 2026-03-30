'use client'

import { motion } from 'framer-motion'
import AccordionItem from '@/components/ui/AccordionItem'
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: 'SERIO, PO CO MI KOLEJNY EBOOK SKORO JUŻ KILKA KUPIŁEM?',
    answer: (
      <>
        Bo poprzednie dawały ci poznaną listę porad. Ten mówi ci dlaczego one nie działały — i co zamiast tego. Jeśli po przeczytaniu uznasz że to lanie wody — <span className="font-bold text-orange">zwracam pieniądze bez pytań</span>.
      </>
    ),
  },
  {
    question: 'PRÓBOWAŁEM WSZYSTKIEGO. LIMITY, DETOKS, POSTANOWIENIA. CO SPRAWIA ŻE TO NIE SKOŃCZY SIĘ TAK SAMO?',
    answer: (
      <>
        Bo wcześniej walczyłeś wolą z czymś, co zostało zaprojektowane żeby ciągnąć cię z powrotem. Tu nie walczysz — <span className="text-text font-bold">zmieniasz warunki tak, żeby pułapka po prostu przestała działać</span>. To jak zamknąć bar zamiast próbować nie pić.
      </>
    ),
  },
  {
    question: 'MOGĘ TO WYGUGLOWAĆ ZA DARMO — PO CO MI TO?',
    answer:
      'Możesz. Tak jak możesz wyguglować jak schudnać. Pytanie ile razy już to robiłeś i gdzie jesteś teraz.',
  },
  {
    question: 'A CO JEŚLI TO KOLEJNA LISTA PORAD KTÓRE I TAK NIE ZADZIAŁAJĄ PRZY ADHD?',
    answer: (
      <>
        Przy ADHD „po prostu przestań" nie działa biologicznie — to nie kwestia motywacji. Ten materiał jest napisany właśnie pod to, jak funkcjonuje głowa która robi dokładnie co chce, a nie co planowała. Plus masz <span className="font-bold text-orange">14 dni na test</span> — jeśli nie zadziała, zwracam kasę.
      </>
    ),
  },
  {
    question: 'ILE ZAJMUJE CZYTANIE? NIE MAM CZASU NA 300 STRON TEORII.',
    answer: (
      <>
        <span className="text-orange font-bold">Ok. 90 minut.</span> Około 30 stron, żadnych dygresji. Możesz też zacząć od jednego rozdziału i zobaczyć efekt tego samego wieczoru.
      </>
    ),
  },
  {
    question: 'KIEDY DOSTANĘ DOSTĘP?',
    answer:
      'Natychmiast po zakupie. Email z linkiem do pobrania trafia na twoją skrzynkę w ciągu 2 minut od płatności.',
  },
  {
    question: 'JAK WYGLĄDA GWARANCJA ZWROTU?',
    answer: (
      <>
        <span className="text-orange font-bold">14 dni, bez pytań, 100% kwoty.</span> Wystarczy jeden email. Nie musisz tłumaczyć dlaczego.
      </>
    ),
  },
  {
    question: 'NA CZYM MOGĘ CZYTAĆ?',
    answer:
      'PDF działa na każdym urządzeniu — telefon, tablet, komputer, czytnik. Możesz też wydrukować.',
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden section-bg-secondary">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.03}
        strokeOpacity={0.03}
        duration={3}
        repeatDelay={1}
        className={cn(
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block font-mono text-sm tracking-wide uppercase text-orange mb-4">
            09 / FAQ
          </span>
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.02em] leading-[1.2] mb-5 uppercase text-gradient">
            Najczęstsze pytania
          </h2>
          <p className="font-sans text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Odpowiedzieliśmy zanim zdążysz zapytać.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, i) => (
            <AccordionItem key={i} title={faq.question} variant="orange">
              {faq.answer}
            </AccordionItem>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
