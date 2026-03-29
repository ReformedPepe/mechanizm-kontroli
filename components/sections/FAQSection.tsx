'use client'

import { motion } from 'framer-motion'
import AccordionItem from '@/components/ui/AccordionItem'

const faqs = [
  {
    question: 'Serio, po co mi kolejny ebook skoro już kilka kupiłem?',
    answer:
      'Bo wcześniejsze ebooki dawały Ci listę porad. Ten daje system środowiskowy — nie walczysz ze sobą, tylko zmieniasz warunki. 30 stron bez wypełniaczy. Jeśli uznasz że to lanie wody — zwracam pieniądze bez pytań.',
  },
  {
    question: 'Próbowałem wszystkiego. Limity, detoks, postanowienia. Co sprawia że to nie skończy się tak samo?',
    answer:
      'Bo wcześniej walczyłeś silną wolą z algorytmem zaprojektowanym przez tysiące inżynierów za miliardy dolarów. Mechanizm Kontroli nie pyta o silną wolę — zmienia warunki środowiskowe. To jak zamknąć bar zamiast próbować nie pić.',
  },
  {
    question: 'Mogę to wyguglować za darmo — po co mi to?',
    answer:
      'Możesz. Tak jak możesz wyguglować jak schudnąć. Pytanie ile razy już to robiłeś i gdzie jesteś teraz. Ten ebook to skompresowane 700 godzin researchu w system wdrażalny tego samego wieczoru.',
  },
  {
    question: 'A co jeśli to kolejna pierdolona lista porad które i tak nie zadziałają przy ADHD?',
    answer:
      'Szczególnie przy ADHD „po prostu przestań" nie działa biologicznie — to nie kwestia motywacji. Metoda STORE i protokoły środowiskowe są zaprojektowane pod to jak naprawdę działa mózg z dysfunkcją wykonawczą. Plus masz 14 dni na test — jeśli nie zadziała, zwracam kasę.',
  },
  {
    question: 'Ile zajmuje czytanie? Nie mam czasu na 300 stron teorii.',
    answer:
      '90 minut. Ebook ma ~30 stron bez wypełniaczy. Możesz też wdrożyć sam rozdział 3 (Metoda STORE) w 15 minut i zobaczyć efekt tego samego wieczoru.',
  },
  {
    question: 'Czy to działa przy ADHD?',
    answer:
      'Szczególnie przy ADHD. Przy dysfunkcji wykonawczej „po prostu przestań" nie działa biologicznie. Metoda STORE i protokoły środowiskowe są zaprojektowane właśnie pod to jak działa mózg z ADHD.',
  },
  {
    question: 'Kiedy dostanę dostęp?',
    answer:
      'Natychmiast po zakupie. Email z linkiem do pobrania PDF trafia na Twoją skrzynkę w ciągu 2 minut od płatności.',
  },
  {
    question: 'Jak wygląda gwarancja zwrotu?',
    answer:
      '14 dni, bez pytań, 100% kwoty. Wystarczy jeden email. Nie musisz tłumaczyć dlaczego.',
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden section-bg-secondary">
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
          <h2 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-purple tracking-[-0.02em] leading-[1.2] mb-5">
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
