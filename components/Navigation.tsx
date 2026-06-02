'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Logo from './Logo'

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border"
      role="navigation"
      aria-label="Hauptnavigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Logo size="sm" />

        <div className="flex items-center gap-6">
          <Link
            href="/#how-it-works"
            className="hidden sm:block text-sm text-muted hover:text-white transition-colors duration-200"
          >
            Wie es funktioniert
          </Link>
          <Link
            href="/#linktree"
            className="hidden sm:block text-sm text-muted hover:text-white transition-colors duration-200"
          >
            Links
          </Link>
          <Link
            href="/ikonen"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
            style={{ color: '#F59E0B' }}
          >
            ★ Ikonen
          </Link>
          <Link
            href="/quiz"
            className="btn-primary text-sm px-5 py-2.5 rounded-xl"
          >
            Quiz starten
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
