import TopBar from '@/components/sections/TopBar'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function RegulaminPage() {
  return (
    <main className="bg-bg text-text min-h-screen">
      <TopBar />
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 py-20 md:py-32">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-orange transition-colors font-mono text-sm mb-12 uppercase tracking-wide"
        >
          <ArrowLeft size={16} />
          Wróć na stronę główną
        </Link>
        
        <h1 className="font-mono text-4xl md:text-5xl font-bold text-purple tracking-[-0.02em] leading-[1.2] mb-4">
          Regulamin
        </h1>
          <p className="font-mono text-sm text-muted/80 mb-16">
            Ostatnia aktualizacja:{' '}
            11.04.2026
          </p>

          <div className="prose prose-invert prose-p:text-text/80 prose-headings:text-text prose-headings:font-mono prose-a:text-orange hover:prose-a:text-orange/80 max-w-none font-sans text-lg">
            {/* UZUPEŁNIJ: pełna treść regulaminu */}
            
            <h2 className="text-2xl mt-12 mb-6 font-bold">§ 1. Postanowienia ogólne</h2>
            <p>
              1. Niniejszy regulamin określa zasady sprzedaży produktów cyfrowych za pośrednictwem strony internetowej mechanizmkontroli.pl.
            </p>
            <p>
              2. Sprzedawcą jest:
              <br />
              Wiktor Walinski
              <br />
              Email: walinski.wiktor@protonmail.com
            </p>

          <h2 className="text-2xl mt-12 mb-6 font-bold">§ 2. Przedmiot sprzedaży</h2>
          <p>
            Przedmiotem sprzedaży jest produkt cyfrowy w postaci e-booka "Mechanizm Kontroli" wraz z materiałami dodatkowymi.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-bold">§ 3. Warunki zakupu</h2>
          <p>
            [Treść do uzupełnienia...]
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-bold">§ 4. Dostawa produktu cyfrowego</h2>
          <p>
            Dostawa produktu następuje niemal natychmiast po udanym przetworzeniu płatności, poprzez wysłanie linku do pobrania plików na adres email podany podczas zamówienia.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-bold">§ 5. Prawo do odstąpienia od umowy (14 dni)</h2>
          <p>
            Gwarantujemy bezwarunkowe prawo do odstąpienia od umowy w terminie 14 dni od momentu zakupu bez podawania przyczyny. 
            Wystarczy wysłać wiadomość email na podany wyżej adres. Środki zostaną zwrócone w całości.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-bold">§ 6. Reklamacje</h2>
          <p>
            [Treść do uzupełnienia...]
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-bold">§ 7. Dane osobowe</h2>
          <p>
            Szczegółowe informacje dotyczące przetwarzania danych osobowych znajdują się w <Link href="/polityka-prywatnosci">Polityce Prywatności</Link>.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-bold">§ 8. Postanowienia końcowe</h2>
          <p>
            [Treść do uzupełnienia...]
          </p>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
