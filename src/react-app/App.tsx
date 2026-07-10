import { useState } from "react";
import "./App.css";

const fallbackMessages = [
  "100 % geladen. 200 % verliebt.",
  "Zwischen uns stimmt nicht nur die Spannung.",
  "Du lädst mein Auto – und mein Herz.",
  "Liebe auf den ersten Ladepunkt.",
  "Mein Herz hat CCS – und keine Reichweitenangst.",
];

function App() {
  const [message, setMessage] = useState(fallbackMessages[0]);
  const [loading, setLoading] = useState(false);
  const [sparks, setSparks] = useState<number[]>([]);

  const loadMessage = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/message");
      if (!response.ok) throw new Error("API unavailable");
      const data = (await response.json()) as { message: string };
      setMessage(data.message);
    } catch {
      setMessage(fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)]);
    } finally {
      setLoading(false);
      setSparks(Array.from({ length: 18 }, (_, index) => Date.now() + index));
      window.setTimeout(() => setSparks([]), 1400);
    }
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Startseite">
          <span className="brand-mark">⚡</span>
          <span>Charge & Love</span>
        </a>
        <button className="ghost-button" onClick={loadMessage} type="button">
          Herz aufladen
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Elektrisierende Gefühle seit dem ersten Ladepunkt</p>
            <h1>
              Meine große Liebe:
              <span>Ladesäulen</span>
            </h1>
            <p className="intro">
              Es ist nicht nur Strom. Es ist Leidenschaft, Zukunft und die beruhigende
              Gewissheit, dass irgendwo immer ein freier Ladepunkt wartet.
            </p>

            <div className="actions">
              <button className="primary-button" onClick={loadMessage} disabled={loading} type="button">
                {loading ? "Lade Gefühle …" : "Liebeserklärung laden"}
              </button>
              <a className="secondary-button" href="#gruende">Warum Ladesäulen?</a>
            </div>

            <div className="message-card" aria-live="polite">
              <span>⚡</span>
              <p>{message}</p>
            </div>

            <dl className="stats">
              <div><dt>100 %</dt><dd>Liebe</dd></div>
              <div><dt>0 km</dt><dd>Reichweitenangst</dd></div>
              <div><dt>∞</dt><dd>Ladefreude</dd></div>
            </dl>
          </div>

          <div className="poster-wrap" aria-label="Illustration zur Liebe zu Ladesäulen">
            <div className="poster-card">
              <div className="poster-heading">Meine große Liebe:</div>
              <div className="poster-title">LADESÄULEN</div>
              <div className="poster-scene">
                <div className="charger charger-left"><span>♥</span><i /></div>
                <div className="person">
                  <div className="hair" />
                  <div className="face" />
                  <div className="shirt">COS<span>TECH</span></div>
                  <div className="heart-sign">LADESÄULEN<br />=<br />WAHRE LIEBE</div>
                </div>
                <div className="charger charger-right"><span>100%<br />LIEBE</span><i /></div>
              </div>
              <div className="poster-note">Es ist nicht nur Strom.<br /><strong>Es ist Leidenschaft.</strong></div>
              <div className="heart heart-a">♥</div>
              <div className="heart heart-b">♥</div>
              <div className="heart heart-c">♥</div>
            </div>
          </div>
        </section>

        <section className="reasons" id="gruende">
          <div className="section-heading">
            <p className="eyebrow">Darum funkt es</p>
            <h2>Eine Verbindung mit Zukunft</h2>
          </div>
          <div className="reason-grid">
            <article><span>01</span><h3>Immer unter Spannung</h3><p>Andere Beziehungen verlieren den Funken. Diese liefert zuverlässig Kilowatt.</p></article>
            <article><span>02</span><h3>Nachhaltig verbunden</h3><p>Gemeinsame Zukunftspläne, saubere Energie und genug Leistung für lange Strecken.</p></article>
            <article><span>03</span><h3>Klare Kommunikation</h3><p>Stecker rein, Handshake, laden. So unkompliziert kann eine Beziehung sein.</p></article>
          </div>
        </section>

        <section className="quote">
          <blockquote>„Du lädst mein Auto,<br />aber ich lad dich in mein Herz.“</blockquote>
          <p>— Ein hoffnungslos elektrischer Romantiker</p>
        </section>
      </main>

      <footer>
        <span>Mit ⚡ und ♥ gebaut.</span>
        <span>Keine Ladesäule wurde dabei überlastet.</span>
      </footer>

      <div className="spark-layer" aria-hidden="true">
        {sparks.map((spark, index) => (
          <span
            key={spark}
            style={{
              left: `${35 + Math.random() * 30}%`,
              top: `${30 + Math.random() * 30}%`,
              animationDelay: `${index * 25}ms`,
              ["--x" as string]: `${(Math.random() - 0.5) * 340}px`,
              ["--y" as string]: `${(Math.random() - 0.7) * 300}px`,
            }}
          >
            {index % 3 === 0 ? "⚡" : "♥"}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
