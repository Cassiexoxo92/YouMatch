import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Logo from '@/components/Logo'

export const metadata: Metadata = {
  title: 'Impressum & Datenschutz — YouMatch',
  description: 'Impressum gemäß § 5 DDG sowie Datenschutzerklärung nach DSGVO für YouMatch.',
  robots: { index: false },
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display font-bold text-xl text-white mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      <div className="text-gray-400 leading-relaxed space-y-3 text-sm">{children}</div>
    </div>
  )
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h3 className="font-semibold text-gray-300 text-sm mb-2">{title}</h3>
      <div className="text-gray-400 text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  )
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-bg text-white">
      {/* Background */}
      <div className="fixed inset-0 dot-grid-bg opacity-20 pointer-events-none" aria-hidden="true" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-4 border-b border-border glass sticky top-0">
        <Logo size="sm" />
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors"
          aria-label="Zurück zur Startseite"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Startseite
        </Link>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-4 py-16">
        {/* Page title */}
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-medium mb-4">
            Rechtliches
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-3">
            Impressum &amp;{' '}
            <span className="gradient-text">Datenschutz</span>
          </h1>
          <p className="text-muted text-sm">
            Letzte Aktualisierung: Juni 2025
          </p>
        </div>

        {/* ── IMPRESSUM ── */}
        <Section title="Impressum">
          <p className="text-xs text-muted uppercase tracking-widest mb-3">
            Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)
          </p>
          <div className="glass-bright rounded-2xl p-6 space-y-2">
            <p><span className="text-gray-300 font-medium">Name:</span> Sandra Rautenberg</p>
            <p>
              <span className="text-gray-300 font-medium">Adresse:</span>{' '}
              Peter-Behrens-Straße 63, 40595 Düsseldorf
            </p>
            <p>
              <span className="text-gray-300 font-medium">E-Mail:</span>{' '}
              <a
                href="mailto:rautenberg_arbeit@yahoo.de"
                className="text-primary hover:underline"
              >
                rautenberg_arbeit@yahoo.de
              </a>
            </p>
          </div>
          <p className="text-xs text-muted mt-4">
            YouMatch ist ein privates, nicht-kommerzielles Projekt. Es besteht keine
            Umsatzsteuer-Identifikationsnummer und keine Handelsregistereintragung.
          </p>
        </Section>

        {/* ── DATENSCHUTZERKLÄRUNG ── */}
        <Section title="Datenschutzerklärung">
          <p className="text-xs text-muted uppercase tracking-widest mb-3">
            Gemäß DSGVO (EU) 2016/679
          </p>

          <Sub title="1. Verantwortliche Person">
            <p>
              Sandra Rautenberg<br />
              Peter-Behrens-Straße 63<br />
              40595 Düsseldorf<br />
              E-Mail:{' '}
              <a href="mailto:rautenberg_arbeit@yahoo.de" className="text-primary hover:underline">
                rautenberg_arbeit@yahoo.de
              </a>
            </p>
          </Sub>

          <Sub title="2. Grundsätze der Datenverarbeitung">
            <p>
              YouMatch erhebt und verarbeitet <strong className="text-gray-300">keine
              personenbezogenen Daten</strong>. Im Einzelnen gilt:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Es werden <strong className="text-gray-300">keine Cookies</strong> gesetzt</li>
              <li>Es werden <strong className="text-gray-300">keine Tracking-Tools</strong> eingesetzt (kein Google Analytics, kein Meta Pixel o. Ä.)</li>
              <li>Es gibt <strong className="text-gray-300">kein Backend und keine Datenbank</strong> — alle Berechnungen laufen ausschließlich im Browser des Nutzers</li>
              <li>Es werden <strong className="text-gray-300">keine Nutzerdaten gespeichert oder übertragen</strong></li>
              <li>Quizantworten verlassen den Browser nicht und werden nach dem Schließen des Tabs verworfen</li>
            </ul>
          </Sub>

          <Sub title="3. Server-Logdaten (Hosting)">
            <p>
              Diese Website wird über <strong className="text-gray-300">Vercel</strong> (Vercel Inc.,
              340 Pine Street Suite 701, San Francisco, CA 94104, USA) gehostet. Beim Aufruf
              der Website speichert Vercel automatisch technische Zugriffsdaten im Server-Log:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>IP-Adresse (anonymisiert nach Übertragung)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Aufgerufene URL</li>
              <li>Verwendeter Browser und Betriebssystem</li>
            </ul>
            <p>
              Diese Daten werden ausschließlich für technische Zwecke (Sicherheit, Fehlerbehebung)
              verarbeitet und nach kurzer Zeit automatisch gelöscht. Rechtsgrundlage:{' '}
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an technischem Betrieb).
            </p>
            <p>
              Vercel ist nach EU-Standardvertragsklauseln zertifiziert. Weitere Informationen:{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                vercel.com/legal/privacy-policy
              </a>
            </p>
          </Sub>

          <Sub title="4. Externe Links">
            <p>
              YouMatch enthält Links zu externen Websites, insbesondere YouTube
              (Google LLC) und Nindo. Für die Inhalte und Datenschutzpraktiken dieser
              Websites sind ausschließlich deren Betreiber verantwortlich. Beim Klicken
              auf einen externen Link verlassen Sie YouMatch und unterliegen den
              Datenschutzbestimmungen des jeweiligen Anbieters.
            </p>
            <p>
              YouTube / Google:{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                policies.google.com/privacy
              </a>
            </p>
          </Sub>

          <Sub title="5. Ihre Rechte als betroffene Person">
            <p>Gemäß DSGVO haben Sie folgende Rechte:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong className="text-gray-300">Auskunft</strong> (Art. 15 DSGVO)</li>
              <li><strong className="text-gray-300">Berichtigung</strong> (Art. 16 DSGVO)</li>
              <li><strong className="text-gray-300">Löschung</strong> (Art. 17 DSGVO)</li>
              <li><strong className="text-gray-300">Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
              <li><strong className="text-gray-300">Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
              <li><strong className="text-gray-300">Widerspruch</strong> (Art. 21 DSGVO)</li>
            </ul>
            <p>
              Da YouMatch keine personenbezogenen Daten erhebt oder speichert, können
              diese Rechte mangels verarbeiteter Daten in der Regel nicht ausgeübt werden.
              Für Fragen wenden Sie sich an:{' '}
              <a href="mailto:rautenberg_arbeit@yahoo.de" className="text-primary hover:underline">
                rautenberg_arbeit@yahoo.de
              </a>
            </p>
          </Sub>

          <Sub title="6. Beschwerderecht">
            <p>
              Sie haben das Recht, sich bei der zuständigen Datenschutz­aufsichtsbehörde
              zu beschweren. Für Nordrhein-Westfalen:
            </p>
            <p>
              <strong className="text-gray-300">
                Landesbeauftragte für Datenschutz und Informationsfreiheit NRW (LDI NRW)
              </strong>
              <br />
              Postfach 20 04 44, 40102 Düsseldorf
              <br />
              <a
                href="https://www.ldi.nrw.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.ldi.nrw.de
              </a>
            </p>
          </Sub>
        </Section>

        {/* ── HAFTUNGSAUSSCHLUSS ── */}
        <Section title="Haftungsausschluss">
          <Sub title="Haftung für Inhalte">
            <p>
              Die Kanalinformationen auf YouMatch wurden sorgfältig zusammengestellt, basieren
              jedoch auf manuell kuratierten Daten. Für die Aktualität, Vollständigkeit und
              Richtigkeit der Informationen (insbesondere Abonnentenzahlen und Kanalbeschreibungen)
              wird keine Gewähr übernommen. Alle Links zu YouTube-Kanälen führen zu extern
              betriebenen Seiten, auf deren Inhalte wir keinen Einfluss haben.
            </p>
          </Sub>

          <Sub title="Urheberrecht">
            <p>
              Das Design, die Texte und die technische Umsetzung von YouMatch sind
              urheberrechtlich geschützt. Kanalbezeichnungen, Logos und Markennamen Dritter
              sind Eigentum der jeweiligen Inhaber und werden hier ausschließlich zu
              informativen Zwecken verwendet.
            </p>
          </Sub>
        </Section>

        <div className="text-center text-xs text-muted pt-4 border-t border-border">
          <p>YouMatch · Sandra Rautenberg · Düsseldorf · 2025</p>
        </div>
      </main>
    </div>
  )
}
