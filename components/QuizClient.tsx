'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { QuizAnswers } from '@/lib/types'
import { quizSteps } from '@/data/quiz'
import Logo from './Logo'

const TOTAL = quizSteps.length

export default function QuizClient() {
  const router    = useRouter()
  const [step, setStep]       = useState(0)
  const [direction, setDir]   = useState(1)
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({})
  const [selected, setSelected] = useState<string | null>(null)

  const current = quizSteps[step]

  const handleSelect = useCallback((value: string) => setSelected(value), [])

  const handleNext = useCallback(() => {
    if (!selected) return
    const newAnswers = { ...answers, [current.id]: selected }
    setAnswers(newAnswers)
    if (step < TOTAL - 1) {
      setDir(1)
      setStep((s) => s + 1)
      setSelected(null)
    } else {
      const a = newAnswers as QuizAnswers
      router.push(`/results?e=${a.energy}&g=${a.goal}&f=${a.format}&t=${a.time}`)
    }
  }, [selected, answers, current.id, step, router])

  const handleBack = useCallback(() => {
    if (step === 0) { router.push('/'); return }
    setDir(-1)
    setStep((s) => s - 1)
    setSelected((answers[quizSteps[step - 1].id] as string) ?? null)
  }, [step, answers, router])

  const variants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ?  60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -60 :  60 }),
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg relative overflow-hidden" role="main">

      {/* ── Background ── */}
      <div className="fixed inset-0 dot-grid-bg opacity-25 pointer-events-none" aria-hidden="true" />
      <div
        className="fixed pointer-events-none"
        style={{
          top: '-15%', left: '-10%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,59,59,0.06) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'orb-1 16s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="fixed pointer-events-none"
        style={{
          bottom: '0%', right: '-5%',
          width: '450px', height: '450px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'orb-2 20s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      {/* ── Header ── */}
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 border-b border-border glass sticky top-0">
        <Logo size="sm" />
        <div className="flex items-center gap-3">
          {/* Step counter */}
          <span className="font-display font-bold text-sm"
            style={{
              background: 'linear-gradient(90deg,#FF3B3B,#7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {step + 1}
          </span>
          <span className="text-xs text-muted">/</span>
          <span className="text-xs text-muted font-medium">{TOTAL}</span>
          {/* Progress bar */}
          <div
            className="w-24 h-1.5 rounded-full bg-border overflow-hidden"
            role="progressbar"
            aria-valuenow={step + 1}
            aria-valuemin={1}
            aria-valuemax={TOTAL}
            aria-label={`Frage ${step + 1} von ${TOTAL}`}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg,#FF3B3B,#7C3AED)' }}
              animate={{ width: `${((step + 1) / TOTAL) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>
      </header>

      {/* ── Progress dots ── */}
      <div className="relative z-10 flex justify-center gap-2 py-6" aria-hidden="true">
        {quizSteps.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width:      i === step ? '24px' : '8px',
              height:     '8px',
              background: i < step ? '#7C3AED' : i === step ? '#FF3B3B' : '#1E1E2E',
              boxShadow:  i === step ? '0 0 8px rgba(255,59,59,0.5)' : 'none',
            }}
          />
        ))}
      </div>

      {/* ── Question area ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pb-8">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            >
              {/* Question header */}
              <div className="text-center mb-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-border mb-5">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg,#FF3B3B,#7C3AED)' }}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-mono tracking-widest uppercase text-muted">
                    Frage {step + 1} von {TOTAL}
                  </span>
                </div>

                {/* Question */}
                <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl mb-3 text-balance text-white">
                  {current.question}
                </h1>

                {/* Subtitle */}
                <p className="text-gray-300 text-base max-w-md mx-auto">
                  {current.subtitle}
                </p>
              </div>

              {/* Options */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
                role="radiogroup"
                aria-label={current.question}
              >
                {current.options.map((option) => {
                  const isSelected = selected === option.value
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleSelect(option.value)}
                      className={`quiz-option text-left ${isSelected ? 'selected' : ''}`}
                      role="radio"
                      aria-checked={isSelected}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">
                          {option.icon}
                        </span>
                        <div>
                          <p
                            className="font-display font-bold text-base mb-1 transition-all duration-200"
                            style={
                              isSelected
                                ? {
                                    background: 'linear-gradient(135deg,#FF6B6B,#A78BFA)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                  }
                                : { color: '#FFFFFF' }
                            }
                          >
                            {option.label}
                          </p>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {option.description}
                          </p>
                        </div>
                      </div>

                      {/* Radio indicator */}
                      <div
                        className="absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200"
                        style={{
                          borderColor: isSelected ? '#FF3B3B' : '#2E2E42',
                          background:  isSelected ? '#FF3B3B' : 'transparent',
                        }}
                        aria-hidden="true"
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full bg-white"
                          />
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-muted hover:text-white transition-colors duration-200"
                  aria-label={step === 0 ? 'Zurück zur Startseite' : 'Vorherige Frage'}
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  {step === 0 ? 'Startseite' : 'Zurück'}
                </button>

                <button
                  onClick={handleNext}
                  disabled={!selected}
                  className="btn-primary flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-display font-semibold disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  aria-label={step === TOTAL - 1 ? 'Match berechnen' : 'Nächste Frage'}
                >
                  {step === TOTAL - 1 ? 'Match berechnen' : 'Weiter'}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
