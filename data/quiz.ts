import type { QuizStep } from '@/lib/types'

export const quizSteps: QuizStep[] = [
  {
    id: 'thema',
    question: 'Was für einen Creator willst du sehen?',
    keyWord: 'Creator',
    subtitle: 'Die Persönlichkeit hinter dem Kanal prägt alles andere.',
    options: [
      {
        value: 'creator',
        label: 'Einzelner YouTuber',
        description: 'Eine Person, ihre Stimme — persönlich, authentisch, unverwechselbar.',
        icon: '🧑‍💻',
      },
      {
        value: 'media',
        label: 'Redaktion & Medien',
        description: 'Profis, Journalisten, Sender — recherchiert, produziert, verlässlich.',
        icon: '📡',
      },
      {
        value: 'artist',
        label: 'Künstler & Performer',
        description: 'Musiker, Athleten, Comedians — Menschen die auf einer Bühne stehen.',
        icon: '🎤',
      },
      {
        value: 'crew',
        label: 'Gruppe & Kollektiv',
        description: 'Duos, Crews, Teams — Chemie zwischen mehreren macht es besonders.',
        icon: '👥',
      },
    ],
  },
  {
    id: 'goal',
    question: 'Was willst du aus dem Video mitnehmen?',
    keyWord: 'mitnehmen',
    subtitle: 'Dein aktuelles Ziel bestimmt deinen perfekten Kanal.',
    options: [
      {
        value: 'unterhalten',
        label: 'Unterhalten werden',
        description: 'Ich will lachen, staunen oder mitfiebern.',
        icon: '🎬',
      },
      {
        value: 'lernen',
        label: 'Schlauer werden',
        description: 'Ich will etwas mitnehmen, das ich noch nicht wusste.',
        icon: '📖',
      },
      {
        value: 'inspiriert',
        label: 'Inspiriert werden',
        description: 'Ich will motiviert und mit neuen Ideen rausgehen.',
        icon: '✨',
      },
      {
        value: 'abschalten',
        label: 'Abschalten',
        description: 'Ich will den Kopf frei bekommen und einfach sein.',
        icon: '🌙',
      },
    ],
  },
  {
    id: 'format',
    question: 'Welches Format spricht dich an?',
    keyWord: 'Format',
    subtitle: 'Wie soll dein Content aufgebaut sein?',
    options: [
      {
        value: 'doku',
        label: 'Doku & Essay',
        description: 'Recherchiert, tiefgründig, mit einer klaren Perspektive.',
        icon: '📽️',
      },
      {
        value: 'talk',
        label: 'Talk & Podcast',
        description: 'Echte Gespräche zwischen Menschen — ungeskriptet, spontan.',
        icon: '🎙️',
      },
      {
        value: 'entertainment',
        label: 'Unterhaltung & Show',
        description: 'Gaming, Comedy, Challenges — Spaß steht im Vordergrund.',
        icon: '🎭',
      },
      {
        value: 'tutorial',
        label: 'Tutorial & Guide',
        description: 'Schritt für Schritt — ich will etwas konkret lernen und anwenden.',
        icon: '📚',
      },
    ],
  },
  {
    id: 'stil',
    question: 'Wie willst du YouTube gerade nutzen?',
    keyWord: 'YouTube',
    subtitle: 'Deine Situation jetzt bestimmt das perfekte Konsumformat.',
    options: [
      {
        value: 'clips',
        label: 'Kurze Clips',
        description: 'Schnell konsumiert, unter 15 Minuten — mehr brauche ich nicht.',
        icon: '⚡',
      },
      {
        value: 'nebenbei',
        label: 'Läuft nebenbei',
        description: 'Ich mache gerade was anderes und höre zu — kein Screen nötig.',
        icon: '🎧',
      },
      {
        value: 'schauen',
        label: 'Voll dabei',
        description: 'Ich schaue aktiv — kein zweiter Tab, volle Aufmerksamkeit.',
        icon: '🎯',
      },
      {
        value: 'deepdive',
        label: 'Langer Deep-Dive',
        description: 'Ich habe Zeit und Lust auf 1 Stunde+ echten Tiefgang.',
        icon: '🕐',
      },
    ],
  },
]
