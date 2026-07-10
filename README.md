# Meine große Liebe: Ladesäulen

Humorvolle Microsite als React/Vite-Anwendung auf Cloudflare Workers.

## Funktionen

- responsive Landingpage
- vollständig lokale Illustration ohne externe Bildquelle
- zufällige Liebeserklärungen über `/api/message`
- Health-Endpunkt unter `/api/health`
- Hono-Worker und Vite-Frontend in einem Deployment
- keine externen Fonts, Bilder oder CDN-Abhängigkeiten

## Lokal testen

```bash
npm install
npm run dev
```

Die Entwicklungsumgebung ist anschließend normalerweise unter `http://localhost:5173` erreichbar.

## Technische Prüfung

```bash
npm run check
```

Der Befehl führt TypeScript-Prüfung, Vite-Build und einen Wrangler-Dry-Run aus.

## Manuell deployen

```bash
npm install
npx wrangler login
npm run deploy
```

## Direkt aus GitHub in Cloudflare importieren

1. In Cloudflare **Workers & Pages** öffnen.
2. **Create application** bzw. **Import a repository** auswählen.
3. Das Repository `cositech/ladesaeulenliebe` verbinden.
4. Als Produktionsbranch `main` verwenden.
5. Build command:

```text
npm run build
```

6. Deploy command:

```text
npx wrangler deploy
```

Die Worker-Konfiguration befindet sich in `wrangler.json` und veröffentlicht die von Vite erzeugten Dateien aus `dist/client`.

## API testen

```bash
curl -fsS https://DEIN-WORKER.workers.dev/api/health
curl -fsS https://DEIN-WORKER.workers.dev/api/message
```

Erwartete Health-Antwort:

```json
{
  "status": "ok",
  "service": "ladesaeulenliebe",
  "timestamp": "2026-07-11T00:00:00.000Z"
}
```
