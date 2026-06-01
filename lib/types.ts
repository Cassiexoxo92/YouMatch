export type EnergyOption = 'couch' | 'aktiv' | 'nebenbei' | 'fokus'
export type GoalOption = 'unterhalten' | 'lernen' | 'inspiriert' | 'abschalten'
export type FormatOption = 'doku' | 'talk' | 'entertainment' | 'tutorial'
export type TimeOption = 'kurz' | 'mittel' | 'lang' | 'egal'

export interface QuizAnswers {
  energy: EnergyOption
  goal: GoalOption
  format: FormatOption
  time: TimeOption
}

export interface Channel {
  id: string
  name: string
  handle: string
  description: string
  longDescription: string
  subscribers: string
  category: string
  url: string
  color: string
  secondaryColor: string
  tags: {
    energy: EnergyOption[]
    goal: GoalOption[]
    format: FormatOption[]
    time: TimeOption[]
  }
}

export interface ScoredChannel extends Channel {
  score: number
  matchPercent: number
}

export interface QuizStep {
  id: keyof QuizAnswers
  question: string
  subtitle: string
  options: QuizOption[]
}

export interface QuizOption {
  value: string
  label: string
  description: string
  icon: string
}
