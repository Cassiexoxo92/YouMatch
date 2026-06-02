'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Target, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Zap,
    number: '01',
    title: '4 Fragen beantworten',
    description:
      'Energie, Ziel, Format, Zeit — vier ehrliche Antworten über deine aktuelle Stimmung. Kein Anmelden, kein Formular.',
    color: '#FF3B3B',
  },
  {
    icon: Target,
    number: '02',
    title: 'Algorithmus matcht',
    description:
      'Unser Matching-System vergleicht deine Antworten mit über 200 Kanälen und berechnet deinen persönlichen Score.',
    color: '#7C3AED',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Kanal entdecken',
    description:
      'Die drei besten Matches werden mit Match-Prozent, Beschreibung und direktem Link zu YouTube angezeigt.',
    color: '#F59E0B',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-24 px-4"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4">
            So funktioniert&apos;s
          </span>
          <h2
            id="how-it-works-heading"
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4"
          >
            In 3 Schritten zu deinem{' '}
            <span className="gradient-text">perfekten Match</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto text-balance">
            Kein Account, keine E-Mail, kein Tracking. Nur du, vier Fragen und dein nächster Lieblingskanal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] }}
                className="glass-bright rounded-3xl p-8 relative overflow-hidden group card-hover"
              >
                {/* Background number */}
                <span
                  className="absolute -right-4 -top-4 font-display font-black text-8xl opacity-5 select-none pointer-events-none"
                  style={{ color: step.color }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}
                >
                  <Icon className="w-7 h-7" style={{ color: step.color }} aria-hidden="true" />
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
