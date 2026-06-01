import type { QuizStep } from '@/lib/types'

export const quizSteps: QuizStep[] = [
  {
    id: 'energy',
    question: 'Wie ist deine Energie gerade?',
    subtitle: 'Sei ehrlich zu dir — wir finden den perfekten Match.',
    options: [
      {
        value: 'couch',
        label: 'Couch-Modus',
        description: 'Ich will einfach zurücklehnen und rieseln lassen.',
        icon: '🛋️',
      },
      {
        value: 'aktiv',
        label: 'Aktiv & neugierig',
        description: 'Ich bin hellwach und will was lernen oder erleben.',
        icon: '⚡',
      },
      {
        value: 'nebenbei',
        label: 'Nebenbei',
        description: 'Ich mache gerade was anderes — guter Hintergrund-Content.',
        icon: '🎧',
      },
      {
        value: 'fokus',
        label: 'Volle Aufmerksamkeit',
        description: 'Ich bin bereit, mich wirklich reinzuhängen.',
        icon: '🎯',
      },
    ],
  },
  {
    id: 'goal',
    question: 'Was soll YouTube heute für dich tun?',
    subtitle: 'Dein aktuelles Ziel bestimmt deinen perfekten Kanal.',
    options: [
      {
        value: 'unterhalten',
        label: 'Unterhalten',
        description: 'Ich will lachen, staunen oder mitfiebern.',
        icon: '🎬',
      },
      {
        value: 'lernen',
        label: 'Schlauer werden',
        description: 'Ich will etwas mitnehmen, das ich noch nicht wusste.',
        icon: '🧠',
      },
      {
        value: 'inspiriert',
        label: 'Inspiriert werden',
        description: 'Ich will motiviert und mit Ideen rausgehen.',
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
        icon: '🎮',
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
    id: 'time',
    question: 'Wie viel Zeit hast du?',
    subtitle: 'Kein Video verschwendet — nur der richtige Match.',
    options: [
      {
        value: 'kurz',
        label: 'Unter 15 Min',
        description: 'Kurze, knackige Videos — mehr brauche ich nicht.',
        icon: '⏱️',
      },
      {
        value: 'mittel',
        label: 'Rund 30 Min',
        description: 'Ein gutes Video das mich reinzieht.',
        icon: '⏰',
      },
      {
        value: 'lang',
        label: '1 Stunde+',
        description: 'Ich habe Zeit und Lust auf richtigen Deep-Dive.',
        icon: '🕰️',
      },
      {
        value: 'egal',
        label: 'Spielt keine Rolle',
        description: 'Wenn es gut ist, schaue ich so lange wie es dauert.',
        icon: '♾️',
      },
    ],
  },
]
