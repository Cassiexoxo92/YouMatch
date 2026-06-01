import Logo from './Logo'

export default function Footer() {
  return (
    <footer
      id="impressum"
      className="border-t border-border py-12 px-4"
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo size="sm" className="mb-3" />
            <p className="text-xs text-muted leading-relaxed">
              YouMatch hilft dir, den richtigen YouTube-Kanal für deine aktuelle Stimmung zu finden.
              Kein Account, keine Cookies, kein Tracking.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-white mb-3">Rechtliches</h3>
            <ul className="space-y-2 text-xs text-muted">
              <li>
                <span className="font-medium text-gray-400">Impressum</span>
                <p className="mt-0.5">
                  YouMatch ist ein privates Projekt.
                  <br />
                  Kontakt: via GitHub Issues.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-white mb-3">Datenschutz</h3>
            <p className="text-xs text-muted leading-relaxed">
              YouMatch verarbeitet keine personenbezogenen Daten. Es werden keine Cookies
              gesetzt, keine Analysetools eingesetzt und keine Daten an Dritte übertragen.
              Alle Berechnungen finden lokal in deinem Browser statt (clientseitig, kein Backend).
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} YouMatch. Made with ♥ für die deutsche YouTube-Community.
          </p>
          <p className="text-xs text-muted">
            Kanaldaten: öffentlich verfügbar ·{' '}
            <a
              href="https://nindo.de/charts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Nindo Charts
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
