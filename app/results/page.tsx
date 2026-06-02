import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import type { QuizAnswers } from '@/lib/types'
import ResultsClient from '@/components/ResultsClient'

export const metadata: Metadata = {
  title: 'Dein Match — YouMatch',
  description: 'Deine persönlichen YouTube-Kanal-Empfehlungen basierend auf deiner Stimmung.',
  robots: { index: false },
}

const VALID_THEMA  = ['lachen', 'news', 'kultur', 'alltag']
const VALID_GOAL   = ['unterhalten', 'lernen', 'inspiriert', 'abschalten']
const VALID_FORMAT = ['doku', 'talk', 'entertainment', 'tutorial']
const VALID_STIL   = ['clips', 'nebenbei', 'schauen', 'deepdive']

interface Props {
  searchParams: Promise<{ e?: string; g?: string; f?: string; t?: string }>
}

export default async function ResultsPage({ searchParams }: Props) {
  const params = await searchParams
  const { e, g, f, t } = params

  const isValid =
    e && VALID_THEMA.includes(e) &&
    g && VALID_GOAL.includes(g) &&
    f && VALID_FORMAT.includes(f) &&
    t && VALID_STIL.includes(t)

  if (!isValid) redirect('/quiz')

  const answers: QuizAnswers = {
    thema:  e as QuizAnswers['thema'],
    goal:   g as QuizAnswers['goal'],
    format: f as QuizAnswers['format'],
    stil:   t as QuizAnswers['stil'],
  }

  return <ResultsClient answers={answers} />
}
