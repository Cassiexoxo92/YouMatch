'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Calendar, ChevronRight } from 'lucide-react'
import { getKanalDerWoche, daysUntilNextMonday, getNextKanalName } from '@/data/kanalDerWoche'
import { getInitials } from '@/lib/utils'

export default function KanalDerWoche() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  const kanal     = getKanalDerWoche()
  const nextName  = getNextKanalName()
  const daysLeft  = daysUntilNextMonday()
  const [imgError, setImgError] = useState(false)

  // Date label for "diese Woche"
  const [weekLabel, setWeekLabel] = useState('')
  useEffect(() => {
    const now   = new Date()
    const day   = now.getDay()
    const mon   = new Date(now)
    mon.setDate(now.getDate() - (day === 0 ? 6 : day - 1))
    const sun   = new Date(mon)
    sun.setDate(mon.getDate() + 6)
    const fmt = (d: Date) =>
      d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' })
    setWeekLabel(`${fmt(mon)} – ${fmt(sun)}`)
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-20 px-4"
      aria-labelledby="kdw-heading"
    >
      {/* Section glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${kanal.color}08 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{
              background: `${kanal.color}12`,
              color: kanal.color,
              border: `1px solid ${kanal.color}30`,
            }}
          >
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
            Kanal der Woche
          </span>
          <h2
            id="kdw-heading"
            className="font-display font-black text-3xl sm:text-4xl text-white"
          >
            Diese Woche entdecken
          </h2>
          {weekLabel && (
            <p className="text-muted text-sm mt-2 font-mono">{weekLabel}</p>
          )}
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          className="glass-bright rounded-3xl overflow-hidden"
          style={{ border: `1px solid ${kanal.color}20` }}
        >
          {/* Color accent bar top */}
          <div
            className="h-1 w-full"
            style={{ background: `linear-gradient(90deg, ${kanal.color}, transparent)` }}
            aria-hidden="true"
          />

          <div className="p-6 sm:p-8">
            {/* Top row: avatar + name + meta */}
            <div className="flex items-start gap-5 mb-6">
              {/* Avatar */}
              <div
                className="rounded-2xl overflow-hidden flex-shrink-0 relative"
                style={{
                  width: 80, height: 80,
                  boxShadow: `0 6px 24px ${kanal.color}35`,
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center font-display font-bold text-xl"
                  style={{ background: `linear-gradient(135deg, ${kanal.color}CC, ${kanal.color}70)` }}
                >
                  {getInitials(kanal.name)}
                </div>
                {!imgError && (
                  <Image
                    src={kanal.imageUrl}
                    alt={`${kanal.name} YouTube-Kanal`}
                    width={80}
                    height={80}
                    className="relative w-full h-full object-cover"
                    onError={() => setImgError(true)}
                    unoptimized
                  />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                    {kanal.name}
                  </h3>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-md"
                    style={{ background: `${kanal.color}15`, color: kanal.color }}
                  >
                    {kanal.abonnenten} Abos
                  </span>
                </div>
                <p className="text-muted text-sm">{kanal.handle}</p>

                {/* Theme tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {kanal.themen.map(t => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: `${kanal.color}10`,
                        color: kanal.color,
                        border: `1px solid ${kanal.color}22`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stil + Warum row */}
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div
                className="rounded-xl p-4"
                style={{ background: `${kanal.color}07`, border: `1px solid ${kanal.color}18` }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: kanal.color }}>
                  Video-Stil
                </p>
                <p className="text-sm text-gray-300">{kanal.stil}</p>
              </div>
              <div
                className="rounded-xl p-4"
                style={{ background: `${kanal.color}07`, border: `1px solid ${kanal.color}18` }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: kanal.color }}>
                  Warum diese Woche
                </p>
                <p className="text-sm text-gray-300 italic">&ldquo;{kanal.warum}&rdquo;</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              {kanal.description}
            </p>

            {/* CTA + next week */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <a
                href={kanal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{
                  background: `${kanal.color}18`,
                  border: `1px solid ${kanal.color}35`,
                  color: kanal.color,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.background  = `${kanal.color}28`
                  el.style.borderColor = `${kanal.color}60`
                  el.style.transform   = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.background  = `${kanal.color}18`
                  el.style.borderColor = `${kanal.color}35`
                  el.style.transform   = 'translateY(0)'
                }}
                aria-label={`${kanal.name} auf YouTube öffnen`}
              >
                Kanal besuchen
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>

              {/* Next week teaser */}
              <div className="flex items-center gap-2 text-xs text-muted">
                <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  In {daysLeft} {daysLeft === 1 ? 'Tag' : 'Tagen'} kommt{' '}
                  <span className="text-gray-300 font-medium">{nextName}</span>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
