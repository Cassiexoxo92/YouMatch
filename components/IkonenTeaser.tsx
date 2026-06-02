'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const previewCreators = [
  { name: 'Gronkh',    color: '#A78BFA', year: '2010' },
  { name: 'Coldmirror', color: '#60A5FA', year: '2006' },
  { name: 'Rezo',      color: '#A78BFA', year: '2019' },
  { name: 'Pamela',    color: '#F472B6', year: '2013' },
  { name: 'Kurzgesagt',color: '#38BDF8', year: '2013' },
]

export default function IkonenTeaser() {
  const ref  = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      aria-labelledby="ikonen-teaser-heading"
    >
      {/* Amber glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider"
              style={{
                background: 'rgba(245,158,11,0.10)',
                color: '#F59E0B',
                border: '1px solid rgba(245,158,11,0.28)',
                boxShadow: '0 0 20px rgba(245,158,11,0.10)',
              }}
            >
              ★ YouTube Ikonen
            </span>
          </div>

          {/* Heading */}
          <h2
            id="ikonen-teaser-heading"
            className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-center mb-5 leading-tight"
          >
            YouTube hat mich{' '}
            <span
              style={{
                background: 'linear-gradient(135deg,#F59E0B 0%,#FCD34D 45%,#FF6B6B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              geprägt.
            </span>
          </h2>

          {/* Personal text */}
          <p className="text-gray-400 text-base sm:text-lg text-center max-w-2xl mx-auto leading-relaxed mb-3">
            Diese Seite ist kein Projekt — sie ist eine Herzensangelegenheit.
            YouTube begleitet mein Leben seitdem ich denken kann, und YouMatch
            ist mein kleines Dankeschön an eine Plattform die so viel mehr ist
            als nur Videos.
          </p>
          <p className="text-gray-500 text-sm text-center max-w-xl mx-auto mb-10">
            Deshalb gibt es hier einen Ort für die Creator, die das alles
            erst möglich gemacht haben — bevor es Algorithmen, Trends und
            Brand Deals gab. Die Pioniere. Die Echten.
          </p>

          {/* Preview dots */}
          <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
            {previewCreators.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium"
                style={{ border: `1px solid ${c.color}25` }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: c.color, boxShadow: `0 0 6px ${c.color}80` }}
                  aria-hidden="true"
                />
                <span className="text-gray-300">{c.name}</span>
                <span className="font-mono text-muted">{c.year}</span>
              </div>
            ))}
            <span className="text-muted text-xs font-mono">+ 5 mehr</span>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Link
              href="/ikonen"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-display font-bold text-base transition-all duration-300 group"
              style={{
                background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(252,211,77,0.08))',
                border: '1px solid rgba(245,158,11,0.35)',
                color: '#F59E0B',
                boxShadow: '0 4px 24px rgba(245,158,11,0.12)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.boxShadow = '0 8px 32px rgba(245,158,11,0.25)'
                el.style.background = 'linear-gradient(135deg, rgba(245,158,11,0.22), rgba(252,211,77,0.12))'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.boxShadow = '0 4px 24px rgba(245,158,11,0.12)'
                el.style.background = 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(252,211,77,0.08))'
                el.style.transform = 'translateY(0)'
              }}
            >
              ★ YouTube Ikonen entdecken
              <ArrowRight
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
