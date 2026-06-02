import type { QuizStep } from '@/lib/types'

export const quizSteps: QuizStep[] = [
  {
    id: 'thema',
    question: 'Welches Thema zieht dich gerade an?',
    keyWord: 'Thema',
    subtitle: 'Dein Interessenfeld bestimmt, welche Welt du betrittst.',
    options: [
      {
        value: 'lachen',
        label: 'Gaming & Comedy',
        description: 'Zocken, Lachen, Challenges — Unterhaltung pur ohne Hintergedanken.',
        icon: '🎮',
      },
      {
        value: 'news',
        label: 'Wissen & Gesellschaft',
        description: 'Nachrichten, Wissenschaft, Politik — ich will verstehen wie die Welt tickt.',
        icon: '🧠',
      },
      {
        value: 'kultur',
        label: 'Musik, Sport & Kreativität',
        description: 'Beats, Fitness, DIY, Kochen — Inhalte die aktivieren und bewegen.',
        icon: '🎵',
      },
      {
        value: 'alltag',
        label: 'Lifestyle & Persönliches',
        description: 'Vlogs, Beauty, Talk — echte Menschen und das echte Leben.',
        icon: '🌍',
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
    subtitle: 'Wie soll dein Content aussehen und sich anfühlen?',
    options: [
      {
        value: 'doku',
        label: 'Doku & Essay',
        description: 'Tiefgang, Recherche, Perspektiven die bleiben.',
        icon: '📽️',
      },
      {
        value: 'talk',
        label: 'Talk & Podcast',
        description: 'Gespräche zwischen echten Menschen über echte Themen.',
        icon: '🎙️',
      },
      {
        value: 'entertainment',
        label: 'Entertainment',
        description: 'Gaming, Comedy, Vlogs — Spaß ohne Umwege.',
        icon: '🎭',
      },
      {
        value: 'tutorial',
        label: 'Tutorial',
        description: 'Ich will konkret etwas lernen und anwenden.',
        icon: '📚',
      },
    ],
  },
  {
    id: 'stil',
    question: 'Wie willst du YouTube gerade nutzen?',
    keyWord: 'YouTube',
    subtitle: 'Deine Situation jetzt bestimmt das perfekte Format.',
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
