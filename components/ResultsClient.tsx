'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, RefreshCw, Sparkles } from 'lucide-react'
import type { QuizAnswers } from '@/lib/types'
import { getTopMatches } from '@/lib/matching'
import ChannelCard from './ChannelCard'
import Logo from './Logo'

const ANSWER_LABELS: Record<string, string> = {
  couch: 'Couch-Modus',
  aktiv: 'Aktiv & neugierig',
  nebenbei: 'Nebenbei',
  fokus: 'Volle Aufmerksamkeit',
  unterhalten: 'Unterhalten',
  lernen: 'Schlauer werden',
  inspiriert: 'Inspiriert',
  abschalten: 'Abschalten',
  doku: 'Doku & Essay',
  talk: 'Talk & Podcast',
  entertainment: 'Entertainment',
  tutorial: 'Tutorial',
  kurz: 'Unter 15 Min',
  mittel: '~30 Minuten',
  lang: '1 Stunde+',
  egal: 'Egal wie lang',
}

interface ResultsClientProps {
  answers: QuizAnswers
}

export default function ResultsClient({ answers }: ResultsClientProps) {
  const results = useMemo(() => getTopMatches(answers), [answers])

  const quizParams = new URLSearchParams({
    e: answers.energy,
    g: answers.goal,
    f: answers.format,
    t: answers.time,
  })

  return (
    <div className="min-h-screen bg-bg" role="main">
      {/* Background */}
      <div className="fixed inset-0 dot-grid-bg opacity-20 pointer-events-none" aria-hidden="true" />
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #FF3B3B 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden="true"
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 border-b border-border glass">
        <Logo size="sm" />
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
          aria-label="Zurück zur Startseite"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Startseite
        </Link>
      </header>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border mb-6 text-sm text-gray-300">
            <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
            Dein persönlicher YouTube-Match
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
            Perfekt gefunden. 🎯
          </h1>
          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Basierend auf deinen Antworten — hier sind die drei Kanäle, die am besten zu dir passen.
          </p>
        </motion.div>

        {/* Answer summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          aria-label="Deine Antworten"
        >
          {Object.values(answers).map((val) => (
            <span
              key={val}
              className="px-3 py-1.5 rounded-full text-xs font-medium glass border border-border text-gray-300"
            >
              {ANSWER_LABELS[val] ?? val}
            </span>
          ))}
        </motion.div>

        {/* Channel cards */}
        <div
          className="grid md:grid-cols-3 gap-5 mb-12"
          aria-label="Deine Top-3-Matches"
        >
          {results.map((channel, i) => (
            <ChannelCard key={channel.id} channel={channel} rank={i + 1} delay={i} />
          ))}
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/quiz"
            className="btn-primary flex items-center gap-2 text-sm px-7 py-3 rounded-xl"
          >
            <RefreshCw className="w-4 h-4" aria-hidden="true" />
            Nochmal versuchen
          </Link>
          <Link href="/" className="btn-secondary text-sm px-7 py-3 rounded-xl">
            Zur Startseite
          </Link>
        </motion.div>

        {/* Source note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-xs text-muted mt-10"
        >
          Kanaldaten basieren auf öffentlichen Informationen.
          Charts-Quelle:{' '}
          <a
            href="https://nindo.de/charts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Nindo Charts
          </a>
        </motion.p>
      </div>
    </div>
  )
}
