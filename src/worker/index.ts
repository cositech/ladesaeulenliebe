import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

const messages = [
  "100 % geladen. 200 % verliebt.",
  "Zwischen uns stimmt nicht nur die Spannung.",
  "Du lädst mein Auto – und mein Herz.",
  "Liebe auf den ersten Ladepunkt.",
  "Unsere Verbindung ist stabil, elektrisch und zukunftssicher.",
  "Andere sammeln Erinnerungen. Ich sammle Ladepunkte.",
  "Mein Herz hat CCS – und keine Reichweitenangst.",
  "Ein Leben ohne Ladesäulen ist möglich, aber sinnlos.",
];

app.get("/api/message", (c) => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  return c.json({ message });
});

app.get("/api/health", (c) =>
  c.json({
    status: "ok",
    service: "ladesaeulenliebe",
    timestamp: new Date().toISOString(),
  }),
);

export default app;
