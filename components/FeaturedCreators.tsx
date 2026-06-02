'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const creators = [
  { name: 'Jules', category: 'Entertainment', color: '#A78BFA' },
  { name: 'Gronkh', category: 'Gaming', color: '#A78BFA' },
  { name: 'Capital Bra', category: 'Musik', color: '#F87171' },
  { name: 'Pamela Reif', category: 'Fitness', color: '#F472B6' },
  { name: 'Kurzgesagt', category: 'Bildung', color: '#60A5FA' },
  { name: 'Simplicissimus', category: 'Essay', color: '#FB923C' },
  { name: 'Montana Black', category: 'Entertainment', color: '#FBBF24' },
  { name: 'Apache 207', category: 'Musik', color: '#818CF8' },
  { name: 'Rezo', category: 'Kommentar', color: '#C084FC' },
  { name: 'MaiLab', category: 'Wissenschaft', color: '#60A5FA' },
  { name: 'HandOfBlood', category: 'Gaming', color: '#F87171' },
  { name: 'MrWissen2go', category: 'Nachrichten', color: '#FCD34D' },
  { name: 'Julienco', category: 'Lifestyle', color: '#FB923C' },
  { name: 'tagesschau', category: 'Nachrichten', color: '#60A5FA' },
  { name: 'Kontra K', category: 'Musik', color: '#94A3B8' },
  { name: 'FC Bayern', category: 'Sport', color: '#F87171' },
  { name: 'Fest & Flauschig', category: 'Podcast', color: '#38BDF8' },
  { name: 'Leon Machère', category: 'Entertainment', color: '#A78BFA' },
  { name: 'Finanzfluss', category: 'Finanzen', color: '#60A5FA' },
  { name: 'PietSmiet', category: 'Gaming', color: '#C084FC' },
  { name: 'Y-Kollektiv', category: 'Journalismus', color: '#818CF8' },
  { name: 'Tomatolix', category: 'Entertainment', color: '#F87171' },
  { name: 'Die Lochis', category: 'Entertainment', color: '#FCD34D' },
  { name: 'ApoRed', category: 'Gaming', color: '#F87171' },
  { name: 'Helene Fischer', category: 'Musik', color: '#F472B6' },
  { name: 'simpleclub', category: 'Bildung', color: '#818CF8' },
  { name: 'Knossi', category: 'Streaming', color: '#FB923C' },
  { name: 'RAF Camora', category: 'Musik', color: '#94A3B8' },
  { name: 'Breaking Lab', category: 'Wissenschaft', color: '#FCD34D' },
  { name: 'ZDF heute-show', category: 'Satire', color: '#60A5FA' },
  { name: 'BVB', category: 'Sport', color: '#FCD34D' },
  { name: 'Trymacs', category: 'Gaming', color: '#38BDF8' },
  { name: 'Julien Bam', category: 'Entertainment', color: '#FBBF24' },
  { name: 'STRG_F', category: 'Journalismus', color: '#818CF8' },
  { name: 'Cro', category: 'Musik', color: '#94A3B8' },
]

const doubled = [...creators, ...creators]

export default function FeaturedCreators() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      aria-labelledby="featured-heading"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-4"
      >
        <h2
          id="featured-heading"
          className="font-display font-bold text-3xl sm:text-4xl text-white mb-4"
        >
          Über{' '}
          <span className="gradient-text">228 Kanäle</span>
          {' '}im Match
        </h2>
        <p className="text-muted max-w-lg mx-auto">
          Gaming, Musik, Bildung, Sport, Comedy — jede Stimmung, jedes Format, jede Energie.
        </p>
      </motion.div>

      {/* Top border line */}
      <div
        className="relative"
        style={{
          borderTop: '1px solid rgba(255,59,59,0.15)',
          borderBottom: '1px solid rgba(124,58,237,0.15)',
        }}
      >
        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)',
          }}
          aria-hidden="true"
        />

        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-40 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0A0A0F 10%, transparent)' }}
          aria-hidden="true"
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-40 z-20 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0A0A0F 10%, transparent)' }}
          aria-hidden="true"
        />

        {/* Scrolling track */}
        <div
          className="flex overflow-hidden py-4"
          role="region"
          aria-label="Creator-Übersicht (automatisch scrollend)"
        >
          <div
            className="creators-scroll flex items-center gap-0 flex-nowrap"
            aria-hidden="true"
          >
            {doubled.map((c, i) => (
              <div key={`${c.name}-${i}`} className="flex items-center flex-shrink-0">
                {/* Creator item */}
                <div className="flex items-baseline gap-2 px-6">
                  <span
                    className="font-display font-bold text-base md:text-lg tracking-widest uppercase whitespace-nowrap"
                    style={{
                      color: c.color,
                      textShadow: `0 0 20px ${c.color}50`,
                    }}
                  >
                    {c.name}
                  </span>
                  <span className="text-xs font-medium text-zinc-600 uppercase tracking-wider whitespace-nowrap">
                    {c.category}
                  </span>
                </div>
                {/* Separator */}
                <span className="text-zinc-800 font-bold text-sm select-none">/</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
