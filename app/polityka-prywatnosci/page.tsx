import TopBar from '@/components/sections/TopBar'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicyPage() {
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
          Polityka Prywatności
        </h1>
        <p className="font-mono text-sm text-muted/80 mb-16">
          Ostatnia aktualizacja:{' '}
          {/* UZUPEŁNIJ datę */}
          [DD.MM.YYYY]
        </p>

        <div className="prose prose-invert prose-p:text-text/80 prose-headings:text-text prose-headings:font-mono prose-a:text-orange hover:prose-a:text-orange/80 max-w-none font-sans text-lg">
          {/* UZUPEŁNIJ: pełna treść polityki prywatności */}
          
          <h2 className="text-2xl mt-12 mb-6 font-bold">1. Administrator danych</h2>
          <p>
            Administratorem danych osobowych jest:
            <br />
            {/* UZUPEŁNIJ: imię, nazwisko/firma, adres, email */}
            [Imię Nazwisko / Nazwa Firmy]
            <br />
            [Adres]
            <br />
            Email: [adres email]
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-bold">2. Jakie dane zbieramy</h2>
          <p>
            [Treść do uzupełnienia — zazwyczaj email, ewentualnie imię podane podczas zamówienia...]
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-bold">3. Cel przetwarzania danych</h2>
          <p>
            [Treść do uzupełnienia — np. realizacja zamówienia, wystawienie rachunku/faktury, kontakt w celach związanych ze zleceniem...]
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-bold">4. Meta Pixel — informacja o śledzeniu</h2>
          <p>
            Nasza witryna korzysta z technologii Meta Pixel. Zbieramy anonimowe dane dotyczące zachowania użytkowników na stronie (np. rozpoczęcie procesu płatności) w celu ulepszania naszych kampanii marketingowych.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-bold">5. Stripe — informacja o płatnościach</h2>
          <p>
            Operatorem płatności jest system Stripe. Nie zbieramy, nie przetwarzamy ani nie przechowujemy danych kart płatniczych po naszej stronie. Całość realizuje bezpiecznie podmiot trzeci zgodnie ze standardem PCI DSS.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-bold">6. Resend — informacja o emailach</h2>
          <p>
            Systemem dystrybucyjnym wysyłającym email z produktem po zakupie jest Resend. W związku z tym powierzamy Twój adres email platformie obsługującej wysyłkę powiadomień.
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-bold">7. Prawa użytkownika (RODO)</h2>
          <p>
            [Treść do uzupełnienia — prawo dostępu, modyfikacji, zapomnienia itd.]
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-bold">8. Pliki cookies</h2>
          <p>
            [Treść do uzupełnienia...]
          </p>

          <h2 className="text-2xl mt-12 mb-6 font-bold">9. Kontakt</h2>
          <p>
            W przypadku pytań odnośnie polityki prywatności prosimy o kontakt na wspomniany wyżej adres email.
          </p>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
