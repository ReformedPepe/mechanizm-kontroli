import { Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-bg3/30 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-4">
          
          {/* LEWA (1/3) */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="font-mono text-sm tracking-tight">
              <span className="text-orange">MECHANIZM</span>
              <span className="text-text/70">_KONTROLI</span>
            </div>
            <span className="text-[11px] text-muted/50 font-sans tracking-wide">
              © 2025
            </span>
          </div>

          {/* ŚRODEK (1/3) */}
          <div className="flex items-center justify-center gap-4 text-muted">
            <a 
              href="https://facebook.com/UZUPELNIJ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-orange transition-colors duration-200"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://instagram.com/UZUPELNIJ" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-orange transition-colors duration-200"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* PRAWA (1/3) */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-3 md:gap-6 text-sm text-muted font-sans">
            <a href="/regulamin" className="hover:text-white transition-colors duration-200">Regulamin</a>
            <a href="/polityka-prywatnosci" className="hover:text-white transition-colors duration-200">Polityka prywatności</a>
          </div>

        </div>
      </div>
    </footer>
  )
}
