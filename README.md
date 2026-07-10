# Meine große Liebe: Ladesäulen

Humorvolle Microsite für Cloudflare Workers. Die Seite greift die zentralen Elemente der Grafik auf: Neon-Schrift, Ladesäulen mit Gesichtern, Herzschild, Notizzettel, Checkliste, Kaffeetasse und elektrische Liebeserklärungen.

## Sicherheits- und Abhängigkeitsmodell

Das Projekt benötigt keine installierten Runtime- oder Build-Abhängigkeiten. Dadurch enthält der Lockfile keine Drittanbieterpakete und `npm audit` sollte keine bekannten Abhängigkeitsschwachstellen melden.

```bash
npm install
npm audit
npm run check
```

## Lokal starten

Wrangler wird bei Bedarf in der jeweils aktuellen Version über `npx` geladen:

```bash
npm run dev
```

## Deployment

```bash
npm run deploy
```

Für einen GitHub-basierten Cloudflare-Import:

```text
Production branch: main
Build command: npm run build
Deploy command: npm run deploy
```

## Worker-Endpunkte

```text
GET /api/health
GET /api/message
```

## Projektstruktur

```text
.
├── package.json
├── package-lock.json
├── wrangler.jsonc
├── worker/
│   └── index.js
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

Die alten Template-Dateien unter `src/` werden nicht mehr gebaut oder ausgeliefert und können bei Bedarf später vollständig entfernt werden.
