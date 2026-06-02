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
  const [barWidth, setBarWidth] = useState(0)
  const [displayPercent, setDisplayPercent] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          setTimeout(() => {
            setBarWidth(channel.matchPercent)
            const duration = 1200
            const steps = 60
            const increment = channel.matchPercent / steps
            let current = 0
            const timer = setInterval(() => {
              current += increment
              if (current >= channel.matchPercent) {
                setDisplayPercent(channel.matchPercent)
                clearInterval(timer)
              } else {
                setDisplayPercent(Math.floor(current))
              }
            }, duration / steps)
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
      className="glass-bright rounded-3xl p-6 card-hover group"
    >
      {/* Rank badge */}
      <div className="flex items-start justify-between mb-5">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{ background: `${rankInfo.color}20`, color: rankInfo.color, border: `1px solid ${rankInfo.color}40` }}
        >
          <span style={{ color: rankInfo.color }}>●</span>
          {rankInfo.label}
        </span>
        <span className="text-2xl font-display font-bold" style={{ color: rankInfo.color }}>
          {displayPercent}%
        </span>
      </div>

      {/* Channel info */}
      <div className="flex items-center gap-4 mb-5">
        <ChannelAvatar
          name={channel.name}
          handle={channel.handle}
          color={channel.color}
          secondaryColor={channel.secondaryColor}
          size="lg"
        />
        <div className="min-w-0">
          <h3 className="font-display font-bold text-xl text-white leading-tight truncate">
            {channel.name}
          </h3>
          <p className="text-sm text-muted mt-0.5 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            {channel.subscribers} Abonnenten
          </p>
          <span className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-md bg-bg text-xs text-muted border border-border">
            <Tag className="w-3 h-3" aria-hidden="true" />
            {channel.category}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 leading-relaxed mb-5">
        {channel.longDescription}
      </p>

      {/* Match bar */}
      <div className="mb-5" role="progressbar" aria-valuenow={channel.matchPercent} aria-valuemin={0} aria-valuemax={100} aria-label={`Match: ${channel.matchPercent}%`}>
        <div className="flex items-center justify-between mb-2">
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

      {/* CTA */}
      <a
        href={channel.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200"
        style={{
          background: `${channel.color}15`,
          border: `1px solid ${channel.color}30`,
          color: channel.color,
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLAnchorElement).style.background = `${channel.color}25`
          ;(e.currentTarget as HTMLAnchorElement).style.borderColor = `${channel.color}60`
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLAnchorElement).style.background = `${channel.color}15`
          ;(e.currentTarget as HTMLAnchorElement).style.borderColor = `${channel.color}30`
        }}
        aria-label={`${channel.name} auf YouTube öffnen (öffnet in neuem Tab)`}
      >
        Zum Kanal
        <ExternalLink className="w-4 h-4" aria-hidden="true" />
      </a>
    </motion.div>
  )
}
