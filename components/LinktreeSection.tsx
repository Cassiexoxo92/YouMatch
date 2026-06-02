'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, BarChart2, Youtube, Github, Info } from 'lucide-react'

const links = [
  {
    href: 'https://nindo.de/charts',
    icon: BarChart2,
    label: 'Nindo Charts',
    description: 'Die offiziellen deutschen YouTube-Charts — nach Views, Abos und mehr.',
    color: '#FF3B3B',
    featured: true,
  },
  {
    href: 'https://nindo.de/charts/youtube/views/deu',
    icon: Youtube,
    label: 'Nindo · YouTube DE Top-Charts',
    description: 'Deutschsprachige Creator sortiert nach Views.',
    color: '#FF0000',
    featured: false,
  },
  {
    href: 'https://www.youtube.com',
    icon: Youtube,
    label: 'YouTube',
    description: 'Die Plattform hinter allen Empfehlungen.',
    color: '#FF3B3B',
    featured: false,
  },
  {
    href: 'https://github.com/Cassiexoxo92/YouMatch',
    icon: Github,
    label: 'YouMatch auf GitHub',
    description: 'Open Source — schau dir den Code an.',
    color: '#6B7280',
    featured: false,
  },
  {
    href: '/impressum',
    icon: Info,
    label: 'Impressum & Datenschutz',
    description: 'DSGVO-konform nach DDG. Kein Tracking, keine Cookies.',
    color: '#6B7280',
    featured: false,
  },
]

export default function LinktreeSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="linktree"
      ref={ref}
      className="relative py-24 px-4"
      aria-labelledby="links-heading"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="links-heading"
            className="font-display font-bold text-3xl text-white mb-3"
          >
            Links & Quellen
          </h2>
          <p className="text-muted">
            Alles was du zum Thema YouTube-Discovery brauchst.
          </p>
        </motion.div>

        <div className="space-y-3">
          {links.map((link, i) => {
            const Icon = link.icon
            const isExternal = link.href.startsWith('http')

            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <a
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-4 p-5 rounded-2xl transition-all duration-200 group ${
                    link.featured
                      ? 'glass-bright border-primary/30 border'
                      : 'glass border border-border hover:border-border-bright'
                  }`}
                  aria-label={`${link.label}${isExternal ? ' (öffnet in neuem Tab)' : ''}`}
                  style={link.featured ? { boxShadow: '0 0 30px rgba(255,59,59,0.08)' } : undefined}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ background: `${link.color}15`, border: `1px solid ${link.color}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: link.color }} aria-hidden="true" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-sm flex items-center gap-2">
                      {link.label}
                      {link.featured && (
                        <span className="px-2 py-0.5 rounded-full text-xs bg-primary/15 text-primary border border-primary/25">
                          Quelle
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-muted mt-0.5 truncate">{link.description}</p>
                  </div>

                  {isExternal && (
                    <ExternalLink
                      className="w-4 h-4 text-muted flex-shrink-0 transition-colors duration-200 group-hover:text-white"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* DSGVO note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-muted mt-8 leading-relaxed"
        >
          🔒 YouMatch setzt keine Cookies, speichert keine personenbezogenen Daten und
          nutzt kein externes Tracking. Alle Berechnungen finden ausschließlich in deinem Browser statt.
        </motion.p>
      </div>
    </section>
  )
}
