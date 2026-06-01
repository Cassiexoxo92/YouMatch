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
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({})
  const [selected, setSelected] = useState<string | null>(null)

  const current = quizSteps[step]
  const progress = ((step) / TOTAL) * 100

  const handleSelect = useCallback(
    (value: string) => {
      setSelected(value)
    },
    [],
  )

  const handleNext = useCallback(() => {
    if (!selected) return

    const newAnswers = { ...answers, [current.id]: selected }
    setAnswers(newAnswers)

    if (step < TOTAL - 1) {
      setDirection(1)
      setStep((s) => s + 1)
      setSelected(null)
    } else {
      const a = newAnswers as QuizAnswers
      const params = new URLSearchParams({
        e: a.energy,
        g: a.goal,
        f: a.format,
        t: a.time,
      })
      router.push(`/results?${params.toString()}`)
    }
  }, [selected, answers, current.id, step, router])

  const handleBack = useCallback(() => {
    if (step === 0) {
      router.push('/')
      return
    }
    setDirection(-1)
    setStep((s) => s - 1)
    const prevKey = quizSteps[step - 1].id
    setSelected((answers[prevKey] as string) ?? null)
  }, [step, answers, router])

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 60 : -60,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -60 : 60,
    }),
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg" role="main">
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-border glass sticky top-0 z-10">
        <Logo size="sm" />
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted font-medium">
            {step + 1} / {TOTAL}
          </span>
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
              style={{
                background: 'linear-gradient(90deg, #FF3B3B, #7C3AED)',
              }}
              animate={{ width: `${((step + 1) / TOTAL) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>
      </header>

      {/* Progress dots */}
      <div className="flex justify-center gap-2 py-6" aria-hidden="true">
        {quizSteps.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === step ? '24px' : '8px',
              height: '8px',
              background:
                i < step
                  ? '#7C3AED'
                  : i === step
                    ? '#FF3B3B'
                    : '#1E1E2E',
            }}
          />
        ))}
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8">
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
                <p className="text-sm text-muted mb-3 font-medium tracking-wider uppercase">
                  Frage {step + 1}
                </p>
                <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-3 text-balance">
                  {current.question}
                </h1>
                <p className="text-gray-400 text-base">{current.subtitle}</p>
              </div>

              {/* Options grid */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
                role="radiogroup"
                aria-label={current.question}
              >
                {current.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={`quiz-option text-left ${selected === option.value ? 'selected' : ''}`}
                    role="radio"
                    aria-checked={selected === option.value}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">
                        {option.icon}
                      </span>
                      <div>
                        <p className="font-display font-semibold text-white text-base mb-1">
                          {option.label}
                        </p>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {option.description}
                        </p>
                      </div>
                    </div>

                    {/* Selected indicator */}
                    <div
                      className="absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200"
                      style={{
                        borderColor: selected === option.value ? '#FF3B3B' : '#2E2E42',
                        background: selected === option.value ? '#FF3B3B' : 'transparent',
                      }}
                      aria-hidden="true"
                    >
                      {selected === option.value && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 rounded-full bg-white"
                        />
                      )}
                    </div>
                  </button>
                ))}
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
                  className="btn-primary flex items-center gap-2 px-8 py-3 rounded-xl text-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
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
