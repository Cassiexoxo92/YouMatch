'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import Logo from './Logo'
import { useVisitorCount } from '@/lib/useVisitorCount'

const stats = [
  { value: '200+', label: 'Kanäle' },
  { value: '4',    label: 'Fragen' },
  { value: '∞',    label: 'Matches' },
]

export default function HeroSection() {
  const visitorCount = useVisitorCount()

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden"
      aria-label="Hero-Bereich"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid-bg opacity-40" aria-hidden="true" />

      {/* Section-level glow orbs (desktop only via CSS) */}
      <div className="hero-glow orb-1 hidden md:block w-96 h-96 bg-primary/20 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="hero-glow orb-2 hidden md:block w-80 h-80 bg-secondary/20 bottom-1/3 right-1/4 translate-x-1/2" aria-hidden="true" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border mb-8 text-sm text-gray-300"
        >
          <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
          <span>200+ deutsche Creator · Kein Login · 100% kostenlos</span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <Logo size="xl" asLink={false} className="block mb-6" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium mb-4 text-balance"
        >
          Finde deinen perfekten YouTube-Kanal.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18 }}
          className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10 text-balance"
        >
          4 Fragen zu deiner Stimmung. Kein Account, kein Tracking, kein Bullshit.
          Nur der nächste Kanal, den du lieben wirst.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href="/quiz" className="btn-primary text-base group">
            Jetzt starten
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link href="#how-it-works" className="btn-secondary text-base">
            Wie es funktioniert
          </Link>
        </motion.div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto"
          aria-label="Statistiken"
        >
          {[...stats, { value: visitorCount, label: 'Besucher' }].map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
              className="glass rounded-2xl p-4 text-center"
            >
              <p className="font-display font-bold text-2xl gradient-text">{value}</p>
              <p className="text-xs text-muted mt-1">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-muted">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
      </motion.div>
    </section>
  )
}
