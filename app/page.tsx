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

      {/* ── Persistent full-page glow layer ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
        {/* Top-left: primary red */}
        <div style={{
          position: 'absolute', top: '5%', left: '-8%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,59,59,0.09) 0%, transparent 65%)',
          filter: 'blur(80px)',
          animation: 'orb-1 14s ease-in-out infinite',
        }} />
        {/* Top-right: secondary purple */}
        <div style={{
          position: 'absolute', top: '10%', right: '-10%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)',
          filter: 'blur(90px)',
          animation: 'orb-2 18s ease-in-out infinite',
        }} />
        {/* Center: accent amber */}
        <div style={{
          position: 'absolute', top: '38%', left: '35%',
          width: '700px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(245,158,11,0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'orb-1 22s ease-in-out infinite reverse',
        }} />
        {/* Lower-left: purple */}
        <div style={{
          position: 'absolute', top: '60%', left: '-5%',
          width: '550px', height: '550px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)',
          filter: 'blur(80px)',
          animation: 'orb-2 20s ease-in-out infinite reverse',
        }} />
        {/* Lower-right: red */}
        <div style={{
          position: 'absolute', top: '72%', right: '-5%',
          width: '480px', height: '480px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,59,59,0.07) 0%, transparent 65%)',
          filter: 'blur(80px)',
          animation: 'orb-1 16s ease-in-out infinite',
        }} />
        {/* Bottom: ambient purple */}
        <div style={{
          position: 'absolute', bottom: '2%', left: '25%',
          width: '800px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(167,139,250,0.05) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'orb-2 25s ease-in-out infinite',
        }} />
      </div>

      <main style={{ position: 'relative', zIndex: 1 }}>
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
