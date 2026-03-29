import TopBar from '@/components/sections/TopBar'
import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import OfferSection from '@/components/sections/OfferSection'
import ProblemSection from '@/components/sections/ProblemSection'
import ForWhoSection from '@/components/sections/ForWhoSection'
import TwoOptionsSection from '@/components/sections/BeforeAfterSection'
import MarqueeSeparator from '@/components/sections/MarqueeSeparator'
import SocialProofSection from '@/components/sections/SocialProofSection'
import MechanismSection from '@/components/sections/MechanismSection'
import ValueStackSection from '@/components/sections/ValueStackSection'
import BonusSection from '@/components/sections/BonusSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTASection from '@/components/sections/FinalCTASection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <HeroSection />
      <OfferSection />
      <ProblemSection />
      <ForWhoSection />
      <TwoOptionsSection />
      <MarqueeSeparator />
      <SocialProofSection />
      <MechanismSection />
      <ValueStackSection />
      <BonusSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
