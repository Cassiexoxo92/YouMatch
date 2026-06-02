'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Users, Tag } from 'lucide-react'
import type { ScoredChannel } from '@/lib/types'
import ChannelAvatar from './ChannelAvatar'

interface ChannelCardProps {
  channel: ScoredChannel
  rank: number
  delay?: number
}

const rankLabels: Record<number, { label: string; color: string }> = {
  1: { label: '#1 Match', color: '#FF3B3B' },
  2: { label: '#2 Match', color: '#7C3AED' },
  3: { label: '#3 Match', color: '#F59E0B' },
}

export default function ChannelCard({ channel, rank, delay = 0 }: ChannelCardProps) {
  const [barWidth, setBarWidth]           = useState(0)
  const [displayPercent, setDisplayPercent] = useState(0)
  const cardRef  = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          setTimeout(() => {
            setBarWidth(channel.matchPercent)
            const steps     = 60
            const increment = channel.matchPercent / steps
            let current     = 0
            const timer = setInterval(() => {
              current += increment
              if (current >= channel.matchPercent) {
                setDisplayPercent(channel.matchPercent)
                clearInterval(timer)
              } else {
                setDisplayPercent(Math.floor(current))
              }
            }, 1200 / steps)
          }, delay * 150)
        }
      },
      { threshold: 0.3 },
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [channel.matchPercent, delay])

  const rankInfo = rankLabels[rank] ?? rankLabels[3]

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.15, ease: [0.25, 1, 0.5, 1] }}
      className="glass-bright rounded-3xl p-6 card-hover group flex flex-col"
    >
      {/* ── Rank badge + match % ── */}
      <div className="flex items-center justify-between mb-5 flex-shrink-0">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{
            background: `${rankInfo.color}20`,
            color: rankInfo.color,
            border: `1px solid ${rankInfo.color}40`,
          }}
        >
          <span style={{ color: rankInfo.color }} aria-hidden="true">●</span>
          {rankInfo.label}
        </span>
        <span
          className="text-2xl font-display font-bold tabular-nums"
          style={{ color: rankInfo.color }}
        >
          {displayPercent}%
        </span>
      </div>

      {/* ── Channel info ── */}
      <div className="flex items-center gap-3 mb-4 flex-shrink-0">
        <ChannelAvatar
          name={channel.name}
          handle={channel.handle}
          color={channel.color}
          secondaryColor={channel.secondaryColor}
          size="lg"
        />
        <div className="min-w-0 flex-1">
          <h3 className="font-display font-bold text-lg text-white leading-tight truncate">
            {channel.name}
          </h3>
          <p className="text-xs text-muted mt-0.5 flex items-center gap-1">
            <Users className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
            <span className="truncate">{channel.subscribers} Abonnenten</span>
          </p>
          <span className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-md bg-bg text-xs text-muted border border-border max-w-full">
            <Tag className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
            <span className="truncate">{channel.category}</span>
          </span>
        </div>
      </div>

      {/* ── Description (clamped, fills space) ── */}
      <p className="text-sm text-gray-300 leading-relaxed mb-4 flex-1 line-clamp-4">
        {channel.longDescription}
      </p>

      {/* ── Match bar ── */}
      <div
        className="mb-4 flex-shrink-0"
        role="progressbar"
        aria-valuenow={channel.matchPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Match: ${channel.matchPercent}%`}
      >
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-muted font-medium">Match-Score</span>
          <span className="text-xs font-semibold" style={{ color: rankInfo.color }}>
            {channel.matchPercent}%
          </span>
        </div>
        <div className="match-bar">
          <div
            className="match-bar-fill"
            style={{
              width: `${barWidth}%`,
              background: `linear-gradient(90deg, ${rankInfo.color}, ${channel.secondaryColor})`,
            }}
          />
        </div>
      </div>

      {/* ── CTA button (always at bottom) ── */}
      <a
        href={channel.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl
                   font-semibold text-sm transition-colors duration-200 flex-shrink-0"
        style={{
          background: `${channel.color}15`,
          border: `1px solid ${channel.color}30`,
          color: channel.color,
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.background    = `${channel.color}28`
          el.style.borderColor   = `${channel.color}60`
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          el.style.background    = `${channel.color}15`
          el.style.borderColor   = `${channel.color}30`
        }}
        aria-label={`${channel.name} auf YouTube öffnen (neuer Tab)`}
      >
        Zum Kanal
        <ExternalLink className="w-4 h-4" aria-hidden="true" />
      </a>
    </motion.div>
  )
}
