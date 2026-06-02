/**
 * YouTube Ikonen — Die 10 deutschen Creator die alles verändert haben.
 * imageUrl: leicht austauschbar — einfach URL ersetzen oder auf lokale Datei zeigen.
 */

export interface Ikone {
  id:          string
  name:        string
  handle:      string
  realName:    string
  era:         string       // z.B. "2006"
  genre:       string
  tagline:     string       // kurzer Witz / Schlagzeile
  description: string       // 3–4 Sätze, frech & modern
  achievement: string       // "Warum Ikone" — ein Satz
  url:         string
  imageUrl:    string       // einfach austauschen wenn nötig
  color:       string       // Akzentfarbe für die Card
}

export const ikonen: Ikone[] = [
  {
    id:          'coldmirror',
    name:        'Coldmirror',
    handle:      '@coldmirror',
    realName:    'Kathrin Fricke',
    era:         '2006',
    genre:       'Comedy & Parodie',
    tagline:     'Bevor YouTube deutsch war.',
    description: 'Sie war hier bevor es überhaupt "hier" gab. Coldmirrors Harry-Potter-Parodien und absurde Comedy haben das Format erfunden, das danach alle kopierten — nur schlechter. Ihr Stil: chaotisch, ungeschliffen, irgendwie perfekt. Ohne sie kein deutsches YouTube. Punkt.',
    achievement: 'Erste große deutschsprachige YouTube-Creatorin überhaupt.',
    url:         'https://www.youtube.com/@coldmirror',
    imageUrl:    'https://unavatar.io/youtube/coldmirror',
    color:       '#60A5FA',
  },
  {
    id:          'gronkh',
    name:        'Gronkh',
    handle:      '@Gronkh',
    realName:    'Erik Range',
    era:         '2010',
    genre:       'Gaming & Let\'s Play',
    tagline:     'Das Urgestein läuft noch.',
    description: 'Wenn German YouTube ein Urgestein hat, dann er. Erik Range hat Let\'s Plays gemacht als das Wort noch niemand kannte — und damit so viele Menschen in Spielwelten entführt, dass Minecraft-Sucht in Deutschland fast als Volkskrankheit gilt. Über 15 Jahre später: immer noch aktiv, immer noch authentisch.',
    achievement: 'Pioneer des deutschen Let\'s-Play-Formats — bis heute einer der meistabonnierten Gaming-Creator.',
    url:         'https://www.youtube.com/@Gronkh',
    imageUrl:    'https://unavatar.io/youtube/Gronkh',
    color:       '#A78BFA',
  },
  {
    id:          'y-titty',
    name:        'Y-Titty',
    handle:      '@YTittyOfficial',
    realName:    'Phillip Laude, Phil Laude & Tarkan Çelik',
    era:         '2010 – 2016',
    genre:       'Comedy',
    tagline:     '2016 gegangen. Nie vergessen.',
    description: 'Drei Typen. Null Plan. Maximale Energie. Y-Titty haben Comedy auf YouTube deutsch gemacht — mit dem Rhythmus-Spiel das alle kopierten, dem Humor der polarisierte und Sketches die eine ganze Generation geprägt haben. Als sie 2016 aufgehört haben, war die Reaktion der Community: ungläubiges Schweigen.',
    achievement: 'Zeitweise meistabonnierter deutschsprachiger YouTube-Kanal.',
    url:         'https://www.youtube.com/@YTittyOfficial',
    imageUrl:    'https://unavatar.io/youtube/YTittyOfficial',
    color:       '#F87171',
  },
  {
    id:          'lefloid',
    name:        'LeFloid',
    handle:      '@LeFloid',
    realName:    'Florian Mundt',
    era:         '2011',
    genre:       'News & Kommentar',
    tagline:     'Der Mann der Obama interviewt hat.',
    description: 'Florian Mundt hat Nachrichten cool gemacht — bevor das jemand für möglich hielt. 2015 hat er dann Barack Obama interviewt. Den US-Präsidenten. Das war exakt der Moment, in dem Eltern aufgehört haben zu fragen, was ihr Kind da eigentlich auf YouTube macht.',
    achievement: 'Erster Creator der Nachrichten auf YouTube als eigenständiges Format etablierte — und im Weißen Haus landete.',
    url:         'https://www.youtube.com/@LeFloid',
    imageUrl:    'https://unavatar.io/youtube/LeFloid',
    color:       '#FBBF24',
  },
  {
    id:          'pietsmiet',
    name:        'PietSmiet',
    handle:      '@PietSmiet',
    realName:    'Piet, Sep, Chris, Dennis & Jay',
    era:         '2011',
    genre:       'Gaming & Freunde',
    tagline:     'Fünf Freunde. Kein Drehbuch.',
    description: 'Fünf echte Freunde, kein Konzept außer: wir zocken zusammen und machen Spaß dabei. PietSmiet hat bewiesen, dass echte Chemie wichtiger ist als Produktionsbudget. Und das multi-Creator Gruppenformat auf Deutsch erfunden. Mehr als ein Jahrzehnt später noch immer on air — und noch immer dieselben fünf.',
    achievement: 'Erfinder des deutschen Gaming-Gruppenformats — Blaupause für alle, die danach kamen.',
    url:         'https://www.youtube.com/@PietSmiet',
    imageUrl:    'https://unavatar.io/youtube/PietSmiet',
    color:       '#C084FC',
  },
  {
    id:          'bibisbeautypalace',
    name:        'BibisBeautyPalace',
    handle:      '@BibisBeautyPalace',
    realName:    'Bianca Heinicke',
    era:         '2012',
    genre:       'Lifestyle & Beauty',
    tagline:     'Sie hat das Schlafzimmer zur Bühne gemacht.',
    description: 'Bibi Heinicke hat aus dem eigenen Zimmer eine Karriere gebaut — als das noch kein Mensch für einen echten Job hielt. Beauty, Vlogs, Challenges, eigene Songs: Sie hat nicht nur einen Kanal geführt, sie hat das Lifestyle-Genre auf Deutsch definiert. Jede Creator nach 2012 hat irgendwie in ihren Fußstapfen angefangen.',
    achievement: 'Erste große deutsche Lifestyle-Creatorin — und Beweis, dass Creator-Karrieren real sind.',
    url:         'https://www.youtube.com/@BibisBeautyPalace',
    imageUrl:    'https://unavatar.io/youtube/BibisBeautyPalace',
    color:       '#F472B6',
  },
  {
    id:          'julien-bam',
    name:        'Julien Bam',
    handle:      '@JulienBam',
    realName:    'Julian Gutmann',
    era:         '2012',
    genre:       'Entertainment',
    tagline:     'YouTube als One-Man-Filmstudio.',
    description: 'Während alle anderen einfach vor einer Kamera geredet haben, hat Julien Bam Kurzfilme produziert. Tanzen, schauspielern, Regie, Schnitt — alles selbst. Er hat den Qualitätsstandard für deutschen Entertainment-Content so weit angehoben, dass es danach schwieriger war, einfach lässig zu wirken.',
    achievement: 'Hat Produktionsqualität und kreatives Handwerk als Maßstab in den deutschen Creator-Markt eingeführt.',
    url:         'https://www.youtube.com/@JulienBam',
    imageUrl:    'https://unavatar.io/youtube/JulienBam',
    color:       '#FB923C',
  },
  {
    id:          'kurzgesagt',
    name:        'Kurzgesagt',
    handle:      '@KurzgesagtDE',
    realName:    'Philipp Dettmer & Team',
    era:         '2013',
    genre:       'Bildung & Animation',
    tagline:     'Aus München in die ganze Welt.',
    description: 'Ein Münchner Studio mit einer Mission: das Universum erklären. Kurzgesagt hat nicht nur Wissenschaft für Millionen zugänglich gemacht — sie haben dabei so gute Arbeit geleistet, dass heute Menschen auf der ganzen Welt wissen: Deutsche machen die besten Erklärvideos. Wissenschaft als Kunstwerk.',
    achievement: 'Hat deutschen Educational-Content global etabliert — über 23 Mio. Abonnenten auf dem englischen Kanal.',
    url:         'https://www.youtube.com/@KurzgesagtDE',
    imageUrl:    'https://unavatar.io/youtube/KurzgesagtDE',
    color:       '#38BDF8',
  },
  {
    id:          'pamela-reif',
    name:        'Pamela Reif',
    handle:      '@PamelaReif',
    realName:    'Pamela Reif',
    era:         '2013',
    genre:       'Fitness',
    tagline:     'Karlsruhe bis in 180 Länder.',
    description: 'Pamela Reif hat Fitness demokratisiert: Kein Gym, kein Equipment, keine Ausreden. Einfach mitmachen. Als erste Deutsche, die YouTube-Fitness auf globalen Standard gebracht hat, ist sie heute nicht mehr nur Creator — sie ist eine Marke, ein Buch und eine weltweite Bewegung. Buchstäblich.',
    achievement: 'Erste globale deutsche Fitness-Creatorin — über 8 Mio. Abonnenten in 180 Ländern.',
    url:         'https://www.youtube.com/@PamelaReif',
    imageUrl:    'https://unavatar.io/youtube/PamelaReif',
    color:       '#F472B6',
  },
  {
    id:          'rezo',
    name:        'Rezo',
    handle:      '@rezo',
    realName:    'Rezo',
    era:         '2019',
    genre:       'Politischer Kommentar',
    tagline:     'Ein Video. Eine Wahl. Alles anders.',
    description: 'Ein Typ, ein Video, 55 Minuten — und danach war eine Bundestagswahl ein anderes Thema. Rezos "Die Zerstörung der CDU" ist das meistzitierte YouTube-Video in der deutschen Parlamentsgeschichte. Er hat bewiesen, dass ein einzelner Creator politisch etwas bewegen kann. Und viele Parteien wurden danach sehr vorsichtig mit dem Internet.',
    achievement: 'Sein Viral-Video von 2019 veränderte nachweislich den Ausgang einer Europawahl — einmalig in der deutschen YouTube-Geschichte.',
    url:         'https://www.youtube.com/@rezo',
    imageUrl:    'https://unavatar.io/youtube/rezo',
    color:       '#A78BFA',
  },
]
