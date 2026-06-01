import type { Metadata } from 'next'
import QuizClient from '@/components/QuizClient'

export const metadata: Metadata = {
  title: 'Quiz — YouMatch',
  description: 'Beantworte 4 Fragen und finde deinen perfekten YouTube-Kanal.',
  robots: { index: false },
}

export default function QuizPage() {
  return <QuizClient />
}
