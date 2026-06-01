'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ChannelAvatar from './ChannelAvatar'

const featured = [
  { name: 'Gronkh', category: 'Gaming', color: '#16a34a', secondaryColor: '#15803d' },
  { name: 'Kurzgesagt', category: 'Bildung', color: '#0ea5e9', secondaryColor: '#0284c7' },
  { name: 'Pamela Reif', category: 'Fitness', color: '#e11d48', secondaryColor: '#be123c' },
  { name: 'Simplicissimus', category: 'Essay', color: '#dc2626', secondaryColor: '#b91c1c' },
  { name: 'Rezo', category: 'Kommentar', color: '#7c3aed', secondaryColor: '#5b21b6' },
  { name: 'MrBeast DE', category: 'Entertainment', color: '#16a34a', secondaryColor: '#15803d' },
  { name: 'HandOfBlood', category: 'Gaming', color: '#be123c', secondaryColor: '#9f1239' },
  { name: 'MaiLab', category: 'Wissenschaft', color: '#8b5cf6', secondaryColor: '#7c3aed' },
  { name: 'Fest & Flauschig', category: 'Podcast', color: '#0891b2', secondaryColor: '#0e7490' },
  { name: 'Finanzfluss', category: 'Finanzen', color: '#16a34a', secondaryColor: '#15803d' },
  { name: 'BibisBeautyPalace', category: 'Lifestyle', color: '#db2777', secondaryColor: '#be185d' },
  { name: 'Montana Black', category: 'Entertainment', color: '#ea580c', secondaryColor: '#c2410c' },
  { name: 'Julien Bam', category: 'Entertainment', color: '#d97706', secondaryColor: '#b45309' },
  { name: 'Breaking Lab', category: 'Wissenschaft', color: '#f59e0b', secondaryColor: '#d97706' },
  { name: 'Trymacs', category: 'Gaming', color: '#0891b2', secondaryColor: '#0e7490' },
  { name: 'Jung & Naiv', category: 'Politik', color: '#dc2626', secondaryColor: '#b91c1c' },
]

const doubled = [...featured, ...featured]

export default function FeaturedCreators() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      aria-labelledby="featured-heading"
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0A0A0F, transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0A0A0F, transparent)' }}
        aria-hidden="true"
      />

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
          <span className="gradient-text">100 Kanäle</span>
          {' '}warten auf dich
        </h2>
        <p className="text-muted max-w-lg mx-auto">
          Von Gaming über Wissenschaft bis hin zu Comedy — hier ist für jede Stimmung etwas dabei.
        </p>
      </motion.div>

      <div className="flex overflow-hidden" role="region" aria-label="Creator-Übersicht (automatisches Scrollen)">
        <div className="creators-scroll flex gap-4 flex-nowrap" aria-hidden="true">
          {doubled.map((creator, i) => (
            <div
              key={`${creator.name}-${i}`}
              className="glass-bright rounded-2xl p-4 flex items-center gap-3 flex-shrink-0 border border-border"
              style={{ minWidth: '200px' }}
            >
              <ChannelAvatar
                name={creator.name}
                color={creator.color}
                secondaryColor={creator.secondaryColor}
                size="sm"
              />
              <div>
                <p className="font-display font-semibold text-sm text-white whitespace-nowrap">
                  {creator.name}
                </p>
                <p className="text-xs text-muted">{creator.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
