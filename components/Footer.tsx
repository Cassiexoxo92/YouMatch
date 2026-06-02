'use client'

import Link from 'next/link'
import Logo from './Logo'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer
      id="impressum"
      className="relative overflow-hidden border-t"
      style={{ borderColor: 'rgba(255,59,59,0.12)' }}
      role="contentinfo"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,59,59,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,59,59,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,59,59,0.4), rgba(124,58,237,0.4), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Logo size="sm" className="mb-4" />
            <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>
              Mood-basierte YouTube-Kanal­empfehlungen für die deutschsprachige Community.
              Kein Login, keine Cookies, kein Tracking.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span
                className="w-2 h-2 rounded-full animate-pulse-slow"
                style={{ background: '#22C55E', boxShadow: '0 0 8px #22C55E' }}
                aria-hidden="true"
              />
              <span className="text-xs font-mono" style={{ color: '#4B5563' }}>
                SYSTEM ONLINE
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: '#FF3B3B' }}
            >
              // Navigation
            </p>
            <nav aria-label="Footer-Navigation">
              <ul className="space-y-2">
                {[
                  { href: '/', label: 'Startseite' },
                  { href: '/quiz', label: 'Quiz starten' },
                  { href: '/#how-it-works', label: 'Wie es funktioniert' },
                  { href: '/#linktree', label: 'Links & Quellen' },
                  { href: '/impressum', label: 'Impressum & Datenschutz' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-xs transition-colors duration-200 flex items-center gap-2 group"
                      style={{ color: '#6B7280' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#E5E7EB' }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#6B7280' }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-200 group-hover:w-3"
                        style={{ background: '#FF3B3B' }}
                        aria-hidden="true"
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal & DSGVO */}
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: '#7C3AED' }}
            >
              // Datenschutz
            </p>
            <p className="text-xs leading-relaxed mb-4" style={{ color: '#4B5563' }}>
              YouMatch setzt{' '}
              <span style={{ color: '#D1D5DB' }}>keine Cookies</span>, verwendet{' '}
              <span style={{ color: '#D1D5DB' }}>kein Tracking</span> und
              speichert keinerlei personenbezogene Daten.
              Alle Berechnungen laufen lokal im Browser.
            </p>
            <a
              href="https://nindo.de/charts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs transition-colors duration-200"
              style={{ color: '#6B7280' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#FF3B3B' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#6B7280' }}
            >
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: '#FF3B3B' }}
                aria-hidden="true"
              />
              Kanaldaten: Nindo Charts
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(124,58,237,0.12)' }}
        >
          <p className="text-xs font-mono" style={{ color: '#374151' }}>
            © {year}{' '}
            <span style={{ color: '#6B7280' }}>YouMatch</span>
            {' '}— Made in Düsseldorf
          </p>

          <p className="text-xs font-mono" style={{ color: '#374151' }}>
            Entwickelt von{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FF6B6B, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Sandra Rautenberg
            </span>
            {' '}&amp;{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #A78BFA, #60A5FA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Tim Honnef
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
