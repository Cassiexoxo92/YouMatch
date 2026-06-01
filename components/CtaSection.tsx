'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      <div
        className="hero-glow w-[600px] h-[400px] bg-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <p className="text-sm text-accent font-semibold tracking-widest uppercase mb-4">
          Bereit?
        </p>
        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 text-balance leading-tight">
          Dein nächster{' '}
          <br className="hidden sm:block" />
          <span className="gradient-text">Lieblingskanal</span>
          {' '}wartet.
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto text-balance">
          4 ehrliche Fragen. Kein Account. Kein Algorithmus der dich abhängig machen will.
          Nur die Kanäle, die wirklich zu dir passen.
        </p>
        <Link
          href="/quiz"
          className="btn-primary text-lg px-10 py-5 rounded-2xl group inline-flex"
        >
          Quiz starten — kostenlos
          <ArrowRight
            className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </motion.div>
    </section>
  )
}
