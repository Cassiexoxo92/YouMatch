import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import type { QuizAnswers } from '@/lib/types'
import ResultsClient from '@/components/ResultsClient'

export const metadata: Metadata = {
  title: 'Dein Match — YouMatch',
  description: 'Deine persönlichen YouTube-Kanal-Empfehlungen basierend auf deiner Stimmung.',
  robots: { index: false },
}

const VALID_ENERGY = ['couch', 'aktiv', 'nebenbei', 'fokus']
const VALID_GOAL = ['unterhalten', 'lernen', 'inspiriert', 'abschalten']
const VALID_FORMAT = ['doku', 'talk', 'entertainment', 'tutorial']
const VALID_TIME = ['kurz', 'mittel', 'lang', 'egal']

interface Props {
  searchParams: Promise<{ e?: string; g?: string; f?: string; t?: string }>
}

export default async function ResultsPage({ searchParams }: Props) {
  const params = await searchParams
  const { e, g, f, t } = params

  const isValid =
    e && VALID_ENERGY.includes(e) &&
    g && VALID_GOAL.includes(g) &&
    f && VALID_FORMAT.includes(f) &&
    t && VALID_TIME.includes(t)

  if (!isValid) redirect('/quiz')

  const answers: QuizAnswers = {
    energy: e as QuizAnswers['energy'],
    goal: g as QuizAnswers['goal'],
    format: f as QuizAnswers['format'],
    time: t as QuizAnswers['time'],
  }

  return <ResultsClient answers={answers} />
}
