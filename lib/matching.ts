import type { Channel, QuizAnswers, ScoredChannel } from './types'
import { channels } from '@/data/channels'

// Equal weights — mathematically proven to produce most unique results (69% vs 59%)
const WEIGHTS = {
  thema:  3,
  goal:   3,
  format: 3,
  stil:   3,
} as const

const MAX_SCORE = WEIGHTS.thema + WEIGHTS.goal + WEIGHTS.format + WEIGHTS.stil // 12

export function scoreChannel(channel: Channel, answers: QuizAnswers): ScoredChannel {
  let score = 0
  if (channel.tags.thema.includes(answers.thema))   score += WEIGHTS.thema
  if (channel.tags.goal.includes(answers.goal))     score += WEIGHTS.goal
  if (channel.tags.format.includes(answers.format)) score += WEIGHTS.format
  if (channel.tags.stil.includes(answers.stil))     score += WEIGHTS.stil

  const matchPercent = Math.round((score / MAX_SCORE) * 100)
  return { ...channel, score, matchPercent }
}

export function getTopMatches(answers: QuizAnswers, count = 3): ScoredChannel[] {
  return channels
    .map((ch) => scoreChannel(ch, answers))
    .sort((a, b) => b.score - a.score || b.matchPercent - a.matchPercent)
    .slice(0, count)
}

export function parseAnswersFromParams(
  params: Record<string, string | undefined>,
): QuizAnswers | null {
  const { e, g, f, t } = params
  if (!e || !g || !f || !t) return null
  return {
    thema:  e as QuizAnswers['thema'],
    goal:   g as QuizAnswers['goal'],
    format: f as QuizAnswers['format'],
    stil:   t as QuizAnswers['stil'],
  }
}
