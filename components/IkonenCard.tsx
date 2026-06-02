'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import type { Ikone } from '@/data/ikonen'
import { getInitials } from '@/lib/utils'
import { motion } from 'framer-motion'

interface IkonenCardProps {
  ikone: Ikone
  index: number
}

export default function IkonenCard({ ikone, index }: IkonenCardProps) {
  const [imgError, setImgError] = useState(false)
  const initials = getInitials(ikone.name)

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="glass-bright rounded-3xl p-6 flex flex-col gap-5 card-hover relative overflow-hidden"
      style={{ borderColor: `${ikone.color}20` }}
    >
      {/* Subtle color accent top-left */}
      <div
        className="absolute top-0 left-0 w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${ikone.color}12 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
        aria-hidden="true"
      />

      {/* Header row: era badge + icon badge */}
      <div className="relative flex items-center justify-between flex-shrink-0">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider"
          style={{ background: `${ikone.color}15`, color: ikone.color, border: `1px solid ${ikone.color}30` }}
        >
          {ikone.era}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
          style={{ background: 'rgba(245,158,11,0.10)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.25)' }}>
          ★ Ikone
        </span>
      </div>

      {/* Avatar + name */}
      <div className="flex items-center gap-4 flex-shrink-0">
        {/* Avatar */}
        <div
          className="rounded-2xl overflow-hidden flex-shrink-0 relative"
          style={{
            width: 72, height: 72,
            background: imgError ? `linear-gradient(135deg, ${ikone.color}, ${ikone.color}80)` : undefined,
            boxShadow: `0 4px 20px ${ikone.color}30`,
          }}
        >
          {!imgError ? (
            <>
              {/* Gradient fallback behind image */}
              <div
                className="absolute inset-0 flex items-center justify-center font-display font-bold text-lg"
                style={{ background: `linear-gradient(135deg, ${ikone.color}CC, ${ikone.color}60)` }}
              >
                {initials}
              </div>
              <Image
                src={ikone.imageUrl}
                alt={`${ikone.name} YouTube-Kanal`}
                width={72}
                height={72}
                className="relative w-full h-full object-cover"
                onError={() => setImgError(true)}
                unoptimized
              />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center font-display font-bold text-lg text-white">
              {initials}
            </div>
          )}
        </div>

        {/* Name + genre */}
        <div className="min-w-0">
          <h2 className="font-display font-black text-xl text-white leading-tight truncate">
            {ikone.name}
          </h2>
          <p className="text-xs text-muted mt-0.5">{ikone.handle}</p>
          <span
            className="inline-block mt-1.5 px-2 py-0.5 rounded-md text-xs font-medium"
            style={{ background: `${ikone.color}12`, color: ikone.color, border: `1px solid ${ikone.color}25` }}
          >
            {ikone.genre}
          </span>
        </div>
      </div>

      {/* Tagline */}
      <p
        className="font-display font-bold text-base flex-shrink-0"
        style={{ color: ikone.color }}
      >
        &ldquo;{ikone.tagline}&rdquo;
      </p>

      {/* Description */}
      <p className="text-sm text-gray-300 leading-relaxed flex-1">
        {ikone.description}
      </p>

      {/* Achievement */}
      <div
        className="rounded-xl px-4 py-3 text-xs leading-relaxed flex-shrink-0"
        style={{ background: `${ikone.color}08`, border: `1px solid ${ikone.color}20` }}
      >
        <span className="font-semibold" style={{ color: ikone.color }}>Warum Ikone: </span>
        <span className="text-gray-400">{ikone.achievement}</span>
      </div>

      {/* CTA */}
      <a
        href={ikone.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex-shrink-0"
        style={{ background: `${ikone.color}15`, border: `1px solid ${ikone.color}30`, color: ikone.color }}
        onMouseEnter={e => {
          ;(e.currentTarget as HTMLAnchorElement).style.background    = `${ikone.color}25`
          ;(e.currentTarget as HTMLAnchorElement).style.borderColor   = `${ikone.color}55`
        }}
        onMouseLeave={e => {
          ;(e.currentTarget as HTMLAnchorElement).style.background    = `${ikone.color}15`
          ;(e.currentTarget as HTMLAnchorElement).style.borderColor   = `${ikone.color}30`
        }}
        aria-label={`${ikone.name} auf YouTube öffnen`}
      >
        Zum Kanal
        <ExternalLink className="w-4 h-4" aria-hidden="true" />
      </a>
    </motion.article>
  )
}
