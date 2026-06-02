import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import HowItWorks from '@/components/HowItWorks'
import FeaturedCreators from '@/components/FeaturedCreators'
import CtaSection from '@/components/CtaSection'
import IkonenTeaser from '@/components/IkonenTeaser'
import LinktreeSection from '@/components/LinktreeSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <HowItWorks />
        <FeaturedCreators />
        <CtaSection />
        <IkonenTeaser />
        <LinktreeSection />
      </main>
      <Footer />
    </>
  )
}
