'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, RefreshCw, Zap } from 'lucide-react'
import type { QuizAnswers } from '@/lib/types'
import { getTopMatches } from '@/lib/matching'
import ChannelCard from './ChannelCard'
import Logo from './Logo'

// Label + color per answer value
const ANSWER_META: Record<string, { label: string; color: string; bg: string; border: string }> = {
  // Energy
  couch:       { label: 'Couch-Modus',        color: '#A78BFA', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.25)' },
  aktiv:       { label: 'Aktiv & neugierig',   color: '#FF3B3B', bg: 'rgba(255,59,59,0.08)',   border: 'rgba(255,59,59,0.30)'   },
  nebenbei:    { label: 'Nebenbei',            color: '#60A5FA', bg: 'rgba(96,165,250,0.08)',  border: 'rgba(96,165,250,0.25)'  },
  fokus:       { label: 'Volle Aufmerksamkeit',color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.30)'  },
  // Goal
  unterhalten: { label: 'Unterhalten',         color: '#FF6B6B', bg: 'rgba(255,107,107,0.08)', border: 'rgba(255,107,107,0.28)' },
  lernen:      { label: 'Schlauer werden',     color: '#60A5FA', bg: 'rgba(96,165,250,0.08)',  border: 'rgba(96,165,250,0.25)'  },
  inspiriert:  { label: 'Inspiriert',          color: '#FCD34D', bg: 'rgba(252,211,77,0.08)', border: 'rgba(252,211,77,0.28)'  },
  abschalten:  { label: 'Abschalten',          color: '#C084FC', bg: 'rgba(192,132,252,0.08)', border: 'rgba(192,132,252,0.25)' },
  // Format
  doku:        { label: 'Doku & Essay',        color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.28)'  },
  talk:        { label: 'Talk & Podcast',      color: '#38BDF8', bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.25)'  },
  entertainment:{ label:'Entertainment',       color: '#FF3B3B', bg: 'rgba(255,59,59,0.08)',  border: 'rgba(255,59,59,0.28)'   },
  tutorial:    { label: 'Tutorial',            color: '#818CF8', bg: 'rgba(129,140,248,0.08)', border: 'rgba(129,140,248,0.25)' },
  // Time
  kurz:        { label: 'Unter 15 Min',        color: '#34D399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.25)'  },
  mittel:      { label: '~30 Minuten',         color: '#A78BFA', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.25)' },
  lang:        { label: '1 Stunde+',           color: '#F87171', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.25)' },
  egal:        { label: 'Egal wie lang',       color: '#94A3B8', bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.20)' },
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

  const answerValues = [answers.energy, answers.goal, answers.format, answers.time]

  return (
    <div className="min-h-screen bg-bg relative overflow-hidden" role="main">

      {/* ── Background glows ── */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: '-10%', left: '-5%',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,59,59,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'orb-1 14s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="fixed pointer-events-none"
        style={{
          bottom: '5%', right: '-5%',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orb-2 18s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="fixed pointer-events-none"
        style={{
          top: '40%', left: '40%',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'orb-1 22s ease-in-out infinite reverse',
        }}
        aria-hidden="true"
      />
      <div className="fixed inset-0 dot-grid-bg opacity-15 pointer-events-none" aria-hidden="true" />

      {/* ── Header ── */}
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 border-b border-border glass sticky top-0">
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

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border mb-6 text-sm text-gray-400">
            <Zap className="w-4 h-4 text-accent" aria-hidden="true" />
            Dein persönlicher YouTube-Match
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl mb-4 leading-tight">
            <span className="gradient-text">Match</span>
            <span className="text-white"> gefunden.</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-lg mx-auto">
            Basierend auf deinen Antworten — hier sind die drei Kanäle, die am besten zu dir passen.
          </p>
        </motion.div>

        {/* ── Answer chips ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          aria-label="Deine Antworten"
        >
          {answerValues.map((val) => {
            const meta = ANSWER_META[val]
            if (!meta) return null
            return (
              <motion.span
                key={val}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="px-4 py-2 rounded-full text-sm font-semibold font-display"
                style={{
                  color: meta.color,
                  background: meta.bg,
                  border: `1px solid ${meta.border}`,
                  boxShadow: `0 0 16px ${meta.color}18`,
                }}
              >
                {meta.label}
              </motion.span>
            )
          })}
        </motion.div>

        {/* ── Channel cards ── */}
        <div
          className="grid md:grid-cols-3 gap-5 mb-12"
          aria-label="Deine Top-3-Matches"
        >
          {results.map((channel, i) => (
            <ChannelCard key={channel.id} channel={channel} rank={i + 1} delay={i} />
          ))}
        </div>

        {/* ── Actions ── */}
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

        {/* ── Source note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-xs text-muted mt-10"
        >
          Kanaldaten basieren auf öffentlichen Informationen ·{' '}
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
