'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Zap, X } from 'lucide-react'

// Data arrays to avoid "Marek z Warszawy" repetitiveness
const names = [
  'Adam', 'Piotr', 'Marek', 'Krzysztof', 'Jan', 'Kamil', 'Łukasz', 'Marcin', 
  'Julia', 'Anna', 'Maria', 'Magdalena', 'Aleksandra', 'Natalia', 'Karolina',
  'Robert', 'Tomasz', 'Michał', 'Paweł', 'Grzegorz'
]

const cities = [
  'Warszawy', 'Krakowa', 'Wrocławia', 'Poznania', 'Gdańska', 'Szczecina', 
  'Bydgoszczy', 'Lublina', 'Białegostoku', 'Katowic', 'Gdyni', 'Częstochowy', 
  'Radomia', 'Torunia', 'Sosnowca', 'Kielc', 'Rzeszowa', 'Gliwic'
]

interface Notification {
  name: string
  city: string
  isPromo: boolean
  timeAgo: string
}

export default function SalesPopup() {
  const [notification, setNotification] = useState<Notification | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const generateNotification = () => {
    const randomName = names[Math.floor(Math.random() * names.length)]
    const randomCity = cities[Math.floor(Math.random() * cities.length)]
    const isPromo = Math.random() > 0.5
    const randomMinutes = Math.floor(Math.random() * 10) + 1

    return {
      name: randomName,
      city: randomCity,
      isPromo,
      timeAgo: `${randomMinutes} min temu`
    }
  }

  useEffect(() => {
    // Initial delay before first popup
    const firstTimer = setTimeout(() => {
      setNotification(generateNotification())
      setIsVisible(true)
    }, 20000)

    const interval = setInterval(() => {
      // Hide current
      setIsVisible(false)
      
      // Wait for exit animation, then show new one
      setTimeout(() => {
        setNotification(generateNotification())
        setIsVisible(true)
      }, 1000)

    }, 90000) // Każde 90 sekund (rzadsze powiadomienia)

    return () => {
      clearTimeout(firstTimer)
      clearInterval(interval)
    }
  }, [])

  // Auto-hide after 7 seconds
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 5000) // Wyświetlaj przez 5 sekund zamiast 7
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  return (
    <div className="fixed bottom-6 left-6 z-[100] pointer-events-none sm:pointer-events-auto">
      <AnimatePresence>
        {isVisible && notification && (
          <motion.div
            initial={{ x: -100, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -100, opacity: 0, scale: 0.9 }}
            className="bg-[#161B22] border border-orange/20 shadow-2xl shadow-orange/10 rounded-2xl p-4 flex items-start gap-4 max-w-[320px] relative overflow-hidden"
          >
            {/* Animated bar at top */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange via-purple to-orange opacity-40" />
            
            <div className="bg-orange/10 p-2.5 rounded-xl text-orange flex-shrink-0 mt-1">
              {notification.isPromo ? <Zap size={18} /> : <ShoppingCart size={18} />}
            </div>

            <div className="flex flex-col pr-4">
              <p className="font-sans text-xs text-muted mb-1 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Dostępny teraz
              </p>
              <p className="font-sans text-sm text-text leading-tight">
                <span className="font-bold">{notification.name}</span> z {notification.city} 
                {notification.isPromo ? (
                  <> właśnie skorzystał z promocji i <span className="text-orange font-bold uppercase">kupił ebooka ponad 50% taniej</span></>
                ) : (
                  <> właśnie kupił ebooka <span className="text-purple font-bold italic">Mechanizm Kontroli</span></>
                )}
              </p>
              <span className="text-[10px] text-muted/60 mt-1.5 font-mono uppercase tracking-widest leading-none">
                {notification.timeAgo}
              </span>
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="text-muted/40 hover:text-text p-1 transition-colors"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
