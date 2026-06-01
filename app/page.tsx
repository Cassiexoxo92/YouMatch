import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import HowItWorks from '@/components/HowItWorks'
import FeaturedCreators from '@/components/FeaturedCreators'
import CtaSection from '@/components/CtaSection'
import LinktreeSection from '@/components/LinktreeSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorks />
        <FeaturedCreators />
        <CtaSection />
        <LinktreeSection />
      </main>
      <Footer />
    </>
  )
}
