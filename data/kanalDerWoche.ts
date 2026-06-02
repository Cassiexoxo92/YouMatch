/**
 * Kanal der Woche — 10 kleinere deutschsprachige Kanäle.
 * Wechselt automatisch jeden Montag der Reihe nach.
 * Update: einfach einen neuen Eintrag ans Ende des Arrays hängen.
 */

export interface KanalDerWocheEntry {
  id:          string
  name:        string
  handle:      string
  themen:      string[]   // Themengebiete des Kanals
  stil:        string     // Wie die Videos gemacht sind
  warum:       string     // Warum er in dieser Woche vorgestellt wird
  description: string     // 2–3 Sätze, frech & warm
  abonnenten:  string
  url:         string
  imageUrl:    string     // leicht austauschbar
  color:       string
}

export const kanalDerWocheList: KanalDerWocheEntry[] = [
  {
    id:          'der-dunkle-parabelritter',
    name:        'Der Dunkle Parabelritter',
    handle:      '@DerDunkleParabelritter',
    themen:      ['Wissenschaft', 'Pseudowissenschaft', 'Gesellschaft'],
    stil:        'Satirische Erklärvideos — trocken, präzise, mit Biss',
    warum:       'Weil Wissenschaft ohne Zähne nur halb so gut ist.',
    description: 'Verschwörungstheorien und schlechtes Denken auseinandergenommen — mit Humor, der wehtut. Der Parabelritter erklärt warum Homöopathie Quatsch ist und warum das trotzdem wichtig ist zu sagen. Für alle die Wissenschaft lieben und Bullshit hassen.',
    abonnenten:  '~380K',
    url:         'https://www.youtube.com/@DerDunkleParabelritter',
    imageUrl:    'https://unavatar.io/youtube/DerDunkleParabelritter',
    color:       '#818CF8',
  },
  {
    id:          'santiago-ziesmer',
    name:        'Santiago Ziesmer',
    handle:      '@SantiagoZiesmer',
    themen:      ['Synchronsprechen', 'Entertainment', 'Hinter den Kulissen'],
    stil:        'Persönliche Videos, Einblicke, Reaktionen — nah und authentisch',
    warum:       'Weil die Stimme hinter SpongeBob ein eigenes Leben verdient.',
    description: 'Er ist die deutsche Stimme von SpongeBob Schwammkopf. Und ja, das klingt genauso verrückt wie es ist. Auf seinem Kanal gibt es Synchronsprecher-Alltag, kurioose Begegnungen und Einblicke in eine Berufswelt die fast niemand kennt.',
    abonnenten:  '~365K',
    url:         'https://www.youtube.com/@SantiagoZiesmer',
    imageUrl:    'https://unavatar.io/youtube/SantiagoZiesmer',
    color:       '#FCD34D',
  },
  {
    id:          'robert-marc-lehmann',
    name:        'Robert Marc Lehmann',
    handle:      '@RobertMarcLehmann',
    themen:      ['Naturschutz', 'Unterwasser', 'Umwelt'],
    stil:        'Cineastische Dokumentationen mit echtem Herzblut',
    warum:       'Weil dieser Mann für den Planeten buchstäblich ins Wasser geht.',
    description: 'Expeditionsleiter, Fotograf, Naturschützer — Robert Marc Lehmann dokumentiert auf YouTube Missionen an den gefährlichsten Orten der Welt. Haie, Korallen, Artensterben: immer mit einer Intensität die man nicht so schnell vergisst.',
    abonnenten:  '~640K',
    url:         'https://www.youtube.com/@RobertMarcLehmann',
    imageUrl:    'https://unavatar.io/youtube/RobertMarcLehmann',
    color:       '#34D399',
  },
  {
    id:          'gebrueder-lange',
    name:        'Gebrüder Lange',
    handle:      '@GebruederLange',
    themen:      ['Reisen', 'Outdoor', 'Abenteuer'],
    stil:        'Road-Trip-Dokumentationen — spontan, ehrlich, mit Kamera in der Hand',
    warum:       'Weil Reisen keine Hochglanz-Inszenierung braucht.',
    description: 'Zwei Brüder, ein Transporter, die ganze Welt. Die Gebrüder Lange zeigen Reisen so wie sie wirklich sind: manchmal schief, immer echt und mit genug Energie um den eigenen Koffer zu suchen. Für alle die Fernweh haben aber keinen Lust auf perfekte Urlaubsfotos.',
    abonnenten:  '~385K',
    url:         'https://www.youtube.com/@GebruederLange',
    imageUrl:    'https://unavatar.io/youtube/GebruederLange',
    color:       '#F59E0B',
  },
  {
    id:          'machbarkeitsbaukasten',
    name:        'MachbarkeitsBaukasten',
    handle:      '@MachbarkeitsBaukasten',
    themen:      ['Technik', 'Ingenieurwesen', 'Wie Dinge funktionieren'],
    stil:        'Erklärvideo-Format mit echten Modellen und Experimenten',
    warum:       'Weil hinter fast allem das du nutzt ein Ingenieursgeheimnis steckt.',
    description: 'Warum bricht eine Brücke? Wie funktioniert ein Jet-Triebwerk von innen? MachbarkeitsBaukasten erklärt die physikalischen und technischen Grundlagen hinter dem Alltag — ohne Fachchinesisch, mit echten Modellen und einer Begeisterung die ansteckt.',
    abonnenten:  '~435K',
    url:         'https://www.youtube.com/@MachbarkeitsBaukasten',
    imageUrl:    'https://unavatar.io/youtube/MachbarkeitsBaukasten',
    color:       '#FB923C',
  },
  {
    id:          'survivalmattin',
    name:        'SurvivalMattin',
    handle:      '@SurvivalMattin',
    themen:      ['Survival', 'Outdoor', 'Bushcraft'],
    stil:        'Praktische Tests im echten Gelände — unzensiert und ungeschnitten',
    warum:       'Weil man nie weiß wann man wirklich wissen muss wie man Feuer macht.',
    description: 'Mattin geht raus, baut Shelter, macht Feuer ohne Feuerzeug und isst Dinge die kein normaler Mensch freiwillig essen würde. Sein Kanal ist kein Outdoor-Lifestyle — es ist echter Survival-Content für alle die das echte Draußen-Leben verstehen wollen.',
    abonnenten:  '~470K',
    url:         'https://www.youtube.com/@SurvivalMattin',
    imageUrl:    'https://unavatar.io/youtube/SurvivalMattin',
    color:       '#A78BFA',
  },
  {
    id:          'was-kostet-die-welt',
    name:        'Was kostet die Welt?',
    handle:      '@WasKostetDieWelt',
    themen:      ['Wirtschaft', 'Konsum', 'Alltagsökonomie'],
    stil:        'Kurze, prägnante Erklärvideos — jede Frage in unter 15 Minuten beantwortet',
    warum:       'Weil du eigentlich wissen solltest warum ein iPhone 1.300 Euro kostet.',
    description: 'Warum kostet Butter gerade so viel? Wer verdient eigentlich an deinem Kaffee? Was kostet die Welt? erklärt die Ökonomie hinter alltäglichen Entscheidungen — direkt, verständlich, ohne BWL-Studium als Voraussetzung.',
    abonnenten:  '~355K',
    url:         'https://www.youtube.com/@WasKostetDieWelt',
    imageUrl:    'https://unavatar.io/youtube/WasKostetDieWelt',
    color:       '#60A5FA',
  },
  {
    id:          'walulis',
    name:        'Walulis sieht fern',
    handle:      '@WalulisYT',
    themen:      ['Medienkritik', 'Fernsehen', 'Werbung'],
    stil:        'Satirische Analysen — lustig und gleichzeitig erschreckend akkurat',
    warum:       'Weil du danach nie wieder Werbung oder Talkshows gleich anschauen wirst.',
    description: 'Walulis seziert deutsche TV-Formate mit chirurgischer Präzision und trockenem Humor. Wie Talkshows Stimmung machen. Wie Werbung uns manipuliert. Wie Fernsehen Realität konstruiert — alles erklärt, bis du nie wieder unschuldig durch Programme zappst.',
    abonnenten:  '~625K',
    url:         'https://www.youtube.com/@WalulisYT',
    imageUrl:    'https://unavatar.io/youtube/WalulisYT',
    color:       '#F87171',
  },
  {
    id:          'joeys-jungle',
    name:        "Joey's Jungle",
    handle:      '@JoeysJungle',
    themen:      ['Exotische Tiere', 'Reptilien', 'Tierhaltung'],
    stil:        'Persönliche Vlogs mit Tieren — ehrlich über Pflege, Kosten und Realität',
    warum:       "Weil eine Königspython im Wohnzimmer mehr Fragen aufwirft als man denkt.",
    description: 'Joey lebt mit Schlangen, Echsen und exotischen Tieren zusammen — und zeigt die echte Seite davon: Tierarztbesuche, Fütterungsroutinen, Fehler und Lernmomente. Kein Tiergatter, kein Zoo — echter Umgang mit faszinierenden Tieren.',
    abonnenten:  '~555K',
    url:         'https://www.youtube.com/@JoeysJungle',
    imageUrl:    'https://unavatar.io/youtube/JoeysJungle',
    color:       '#34D399',
  },
  {
    id:          'timo-leukefeld',
    name:        'Timo Leukefeld',
    handle:      '@TimoLeukefeld',
    themen:      ['Energie', 'Photovoltaik', 'Eigenheim'],
    stil:        'Praxisnahe Tutorials und Erklärungen für Hausbesitzer',
    warum:       'Weil Energieautarkie kein Hexenwerk ist — aber auch kein Selbstläufer.',
    description: 'Timo Leukefeld ist Deutschlands bekanntester Energie-Erklärer für das Eigenheim. Photovoltaik, Wärmepumpe, Speicher, Förderungen — alles verständlich erklärt für Menschen die wissen wollen wie sie ihre Energiekosten wirklich senken. Praktisch, faktenbasiert, ohne Verkaufsdruck.',
    abonnenten:  '~430K',
    url:         'https://www.youtube.com/@TimoLeukefeld',
    imageUrl:    'https://unavatar.io/youtube/TimoLeukefeld',
    color:       '#FCD34D',
  },
]

/**
 * Gibt den Kanal der aktuellen Woche zurück.
 * Wechselt automatisch jeden Montag. Deterministisch — kein Backend nötig.
 */
export function getKanalDerWoche(): KanalDerWocheEntry {
  const now = new Date()
  // Montag der aktuellen Woche berechnen
  const day = now.getDay()
  const monday = new Date(now)
  monday.setDate(now.getDate() - (day === 0 ? 6 : day - 1))
  monday.setHours(0, 0, 0, 0)

  // Wochen seit einem fixen Referenz-Montag (01.07.2025)
  const reference = new Date('2025-06-30') // Montag 30.06.2025
  const weeksSince = Math.floor(
    (monday.getTime() - reference.getTime()) / (7 * 24 * 60 * 60 * 1000)
  )

  const index = ((weeksSince % kanalDerWocheList.length) + kanalDerWocheList.length) % kanalDerWocheList.length
  return kanalDerWocheList[index]
}

/** Wie viele Tage bis zum nächsten Montag */
export function daysUntilNextMonday(): number {
  const now = new Date()
  const day = now.getDay()
  return day === 0 ? 1 : 8 - day
}

/** Name des nächsten Kanals (für Vorschau) */
export function getNextKanalName(): string {
  const now = new Date()
  const day = now.getDay()
  const monday = new Date(now)
  monday.setDate(now.getDate() - (day === 0 ? 6 : day - 1))
  monday.setHours(0, 0, 0, 0)

  const reference = new Date('2025-06-30')
  const weeksSince = Math.floor(
    (monday.getTime() - reference.getTime()) / (7 * 24 * 60 * 60 * 1000)
  )
  const nextIndex = ((weeksSince + 1) % kanalDerWocheList.length + kanalDerWocheList.length) % kanalDerWocheList.length
  return kanalDerWocheList[nextIndex].name
}
