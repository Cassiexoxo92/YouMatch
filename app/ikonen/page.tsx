import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Logo from '@/components/Logo'
import IkonenCard from '@/components/IkonenCard'
import { ikonen } from '@/data/ikonen'

export const metadata: Metadata = {
  title: 'YouTube Ikonen — YouMatch',
  description: 'Die 10 deutschen Creator die YouTube geprägt haben. Von Coldmirror bis Rezo — die Geschichte des deutschsprachigen YouTubes.',
}

export default function IkonenPage() {
  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 border-b border-border glass">
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

      <main className="relative z-10 max-w-5xl mx-auto px-4 py-14 sm:py-20">

        {/* Page header */}
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.25)' }}
          >
            ★ Hall of Fame
          </span>

          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl mb-5 leading-tight">
            YouTube{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 50%, #FF6B6B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ikonen
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-4">
            Die deutschen Creator die YouTube nicht nur genutzt haben — sondern geformt, geprägt und für immer verändert.
          </p>

          {/* Timeline span badge */}
          <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2 text-sm text-muted">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: 'linear-gradient(135deg,#F59E0B,#FF6B6B)' }}
              aria-hidden="true"
            />
            2006 → 2019 · 10 Ikonen · 5 Genres · eine Geschichte
          </div>
        </div>

        {/* Timeline marker */}
        <div className="hidden md:flex items-center gap-4 mb-10 px-2">
          {ikonen.map((ik, i) => (
            <div key={ik.id} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ background: ik.color, boxShadow: `0 0 8px ${ik.color}60` }}
                aria-hidden="true"
              />
              <span className="text-xs font-mono text-muted text-center leading-tight">
                {ik.era.split(' ')[0]}
              </span>
              {i < ikonen.length - 1 && (
                <div
                  className="absolute"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {ikonen.map((ik, i) => (
            <IkonenCard key={ik.id} ikone={ik} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-muted mt-14 max-w-lg mx-auto leading-relaxed">
          Diese Liste ist eine redaktionelle Auswahl basierend auf kulturellem Einfluss, Pionierleistung und nachweisbarer Wirkung auf die deutschsprachige YouTube-Szene.
          Bilder via YouTube · Kanaldaten öffentlich verfügbar.
        </p>

        {/* Back to quiz CTA */}
        <div className="flex justify-center mt-10">
          <Link
            href="/quiz"
            className="btn-primary text-sm px-7 py-3 rounded-xl inline-flex items-center gap-2"
          >
            ← Zurück zum Quiz
          </Link>
        </div>
      </main>
    </div>
  )
}
