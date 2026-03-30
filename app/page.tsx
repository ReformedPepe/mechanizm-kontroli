import TopBar from '@/components/sections/TopBar'
import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import OfferSection from '@/components/sections/OfferSection'
import ProblemSection from '@/components/sections/ProblemSection'
import HealthStatsSection from '@/components/sections/HealthStatsSection'
import ForWhoSection from '@/components/sections/ForWhoSection'
import TwoOptionsSection from '@/components/sections/BeforeAfterSection'
import MarqueeSeparator from '@/components/sections/MarqueeSeparator'
import SocialProofSection from '@/components/sections/SocialProofSection'
import ValueStackSection from '@/components/sections/ValueStackSection'
import BonusSection from '@/components/sections/BonusSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTASection from '@/components/sections/FinalCTASection'
import Footer from '@/components/sections/Footer'
import SalesPopup from '@/components/ui/SalesPopup'

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <HeroSection />
      <OfferSection />
      <ProblemSection />
      <HealthStatsSection />
      <ForWhoSection />
      <TwoOptionsSection />
      <MarqueeSeparator />
      <SocialProofSection />
      <ValueStackSection />
      <BonusSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <SalesPopup />
    </main>
  )
}
