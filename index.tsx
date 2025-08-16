export default function LandingPage() {
  return (
    <div className=\"bg-black text-white min-h-screen flex flex-col justify-between\">
      {/* Hero Section */}
      <div className=\"flex flex-col items-center justify-center text-center py-24 px-6\">
        <h1 className=\"text-5xl font-bold mb-6\">Dein digitaler CoWorker</h1>
        <p className=\"text-gray-300 text-xl max-w-2xl mb-8\">
          KI-Agenten, die deine E-Mails managen, Anrufe annehmen und WhatsApp-Nachrichten bearbeiten – damit du mehr Zeit für dein Geschäft hast.
        </p>
        <button className=\"bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-600 transition\">
          Jetzt starten
        </button>
      </div>

      {/* Pricing Section */}
      <div className=\"p-12 bg-gradient-to-b from-black to-gray-900\">
        <div className=\"text-center mb-12\">
          <h2 className=\"text-4xl font-bold mb-4\">Wähle dein Paket</h2>
          <p className=\"text-gray-400 text-lg\">
            Von smarter E-Mail-Organisation bis hin zur kompletten Automatisierung.
          </p>
        </div>

        <div className=\"grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto\">
          {/* Basic */}
          <div className=\"rounded-2xl bg-gray-900 p-8 shadow-lg hover:shadow-xl transition\">
            <h3 className=\"text-2xl font-semibold mb-4\">Basic</h3>
            <p className=\"text-gray-400 mb-6\">Ideal für den Einstieg</p>
            <ul className=\"space-y-3 mb-6 text-gray-300\">
              <li>✔ 1 E-Mail-Adresse</li>
              <li>✔ Sortieren & Kategorisieren</li>
              <li>✔ Weiterleiten an Mitarbeiter</li>
              <li>✔ Einfache Auto-Antworten</li>
            </ul>
            <div className=\"text-3xl font-bold mb-6\">349 € / Monat</div>
            <button className=\"bg-white text-black w-full py-3 rounded-xl font-semibold hover:bg-gray-200 transition\">
              Jetzt starten
            </button>
          </div>

          {/* Pro */}
          <div className=\"rounded-2xl bg-gray-800 p-8 shadow-2xl border border-indigo-500 hover:shadow-indigo-500/50 transition\">
            <h3 className=\"text-2xl font-semibold mb-4\">Pro</h3>
            <p className=\"text-indigo-400 mb-6\">Meistgewählt</p>
            <ul className=\"space-y-3 mb-6 text-gray-300\">
              <li>✔ Bis zu 3 E-Mail-Adressen</li>
              <li>✔ Intelligente Priorisierung</li>
              <li>✔ Antwortvorschläge & Automatisierung</li>
              <li>✔ Reports & Auswertungen</li>
            </ul>
            <div className=\"text-3xl font-bold mb-6\">495 € / Monat</div>
            <button className=\"bg-indigo-500 text-white w-full py-3 rounded-xl font-semibold hover:bg-indigo-600 transition\">
              Jetzt starten
            </button>
          </div>

          {/* Enterprise */}
          <div className=\"rounded-2xl bg-gray-900 p-8 shadow-lg hover:shadow-xl transition\">
            <h3 className=\"text-2xl font-semibold mb-4\">Enterprise</h3>
            <p className=\"text-gray-400 mb-6\">Für maximale Automatisierung</p>
            <ul className=\"space-y-3 mb-6 text-gray-300\">
              <li>✔ 5+ E-Mail-Adressen</li>
              <li>✔ Vollständige KI-Bearbeitung</li>
              <li>✔ Individuelle Workflows</li>
              <li>✔ Persönlicher Setup-Service</li>
            </ul>
            <div className=\"text-3xl font-bold mb-6\">ab 995 € / Monat</div>
            <button className=\"bg-white text-black w-full py-3 rounded-xl font-semibold hover:bg-gray-200 transition\">
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className=\"bg-black py-20 px-6 max-w-4xl mx-auto\">
        <h2 className=\"text-4xl font-bold text-center mb-12\">Häufige Fragen</h2>
        <div className=\"space-y-6\">
          <div>
            <h3 className=\"text-xl font-semibold mb-2\">Kann ich jederzeit kündigen?</h3>
            <p className=\"text-gray-400\">Ja, die Pakete sind monatlich mit 4 Wochen Frist kündbar.</p>
          </div>
          <div>
            <h3 className=\"text-xl font-semibold mb-2\">Brauche ich technisches Know-how?</h3>
            <p className=\"text-gray-400\">Nein, die Einrichtung übernehmen wir für dich. Alles läuft im Hintergrund.</p>
          </div>
          <div>
            <h3 className=\"text-xl font-semibold mb-2\">Sind meine Daten sicher?</h3>
            <p className=\"text-gray-400\">Ja. Für EU-Kunden DSGVO-konform, für andere Regionen nach EU-Standards.</p>
          </div>
          <div>
            <h3 className=\"text-xl font-semibold mb-2\">Welche Zahlungsmethoden gibt es?</h3>
            <p className=\"text-gray-400\">SEPA, QR-Rechnung (CH), Stripe und Wise für Nicht-EU.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className=\"text-center py-20 px-6 bg-gradient-to-t from-gray-900 to-black\">
        <h2 className=\"text-4xl font-bold mb-4\">Starte jetzt mit deinem digitalen CoWorker</h2>
        <p className=\"text-gray-300 text-lg mb-8 max-w-2xl mx-auto\">
          Buche ein Erstgespräch und erlebe, wie viel Zeit du durch Automatisierung sparen kannst.
        </p>
        <button className=\"bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-600 transition\">
          Erstgespräch buchen
        </button>
      </div>

      {/* Footer */}
      <footer className=\"bg-black border-t border-gray-800 py-8 px-6 text-center text-gray-500 text-sm\">
        <p>© {new Date().getFullYear()} Solio CoWorker AI – Alle Rechte vorbehalten.</p>
        <div className=\"mt-4 space-x-6\">
          <a href=\"#\" className=\"hover:text-white transition\">Impressum</a>
          <a href=\"#\" className=\"hover:text-white transition\">Datenschutz</a>
          <a href=\"#\" className=\"hover:text-white transition\">AGB</a>
        </div>
      </footer>
    </div>
  );
}
