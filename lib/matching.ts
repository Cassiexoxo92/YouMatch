import type { Channel, QuizAnswers, ScoredChannel } from './types'
import { channels } from '@/data/channels'

const WEIGHTS = {
  energy: 3,
  goal: 3,
  format: 2,
  time: 1,
} as const

const MAX_SCORE = WEIGHTS.energy + WEIGHTS.goal + WEIGHTS.format + WEIGHTS.time

export function scoreChannel(channel: Channel, answers: QuizAnswers): ScoredChannel {
  let score = 0

  if (channel.tags.energy.includes(answers.energy)) score += WEIGHTS.energy
  if (channel.tags.goal.includes(answers.goal)) score += WEIGHTS.goal
  if (channel.tags.format.includes(answers.format)) score += WEIGHTS.format
  if (channel.tags.time.includes(answers.time)) score += WEIGHTS.time

  const matchPercent = Math.round((score / MAX_SCORE) * 100)
  return { ...channel, score, matchPercent }
}

export function getTopMatches(answers: QuizAnswers, count = 3): ScoredChannel[] {
  return channels
    .map((ch) => scoreChannel(ch, answers))
    .sort((a, b) => b.score - a.score || b.matchPercent - a.matchPercent)
    .slice(0, count)
}

export function parseAnswersFromParams(params: Record<string, string | undefined>): QuizAnswers | null {
  const { e, g, f, t } = params
  if (!e || !g || !f || !t) return null
  return {
    energy: e as QuizAnswers['energy'],
    goal: g as QuizAnswers['goal'],
    format: f as QuizAnswers['format'],
    time: t as QuizAnswers['time'],
  }
}
