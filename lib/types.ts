// Q1: Welches Thema zieht dich gerade an?
export type ThemaOption = 'lachen' | 'news' | 'kultur' | 'alltag'

// Q2: Was willst du aus dem Video mitnehmen?
export type GoalOption = 'unterhalten' | 'lernen' | 'inspiriert' | 'abschalten'

// Q3: Welches Format spricht dich an?
export type FormatOption = 'doku' | 'talk' | 'entertainment' | 'tutorial'

// Q4: Wie willst du YouTube gerade nutzen?
export type StilOption = 'clips' | 'nebenbei' | 'schauen' | 'deepdive'

export interface QuizAnswers {
  thema:  ThemaOption
  goal:   GoalOption
  format: FormatOption
  stil:   StilOption
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
    thema:  ThemaOption[]
    goal:   GoalOption[]
    format: FormatOption[]
    stil:   StilOption[]
  }
}

export interface ScoredChannel extends Channel {
  score: number
  matchPercent: number
}

export interface QuizStep {
  id: keyof QuizAnswers
  question: string
  keyWord: string
  subtitle: string
  options: QuizOption[]
}

export interface QuizOption {
  value: string
  label: string
  description: string
  icon: string
}
