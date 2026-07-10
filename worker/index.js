const messages = [
  "100 % geladen. 200 % verliebt.",
  "Du lädst mein Auto – und mein Herz.",
  "Zwischen uns stimmt nicht nur die Spannung.",
  "Liebe auf den ersten Ladepunkt.",
  "Ein Leben ohne Ladesäulen ist möglich, aber sinnlos.",
  "Unsere Verbindung: elektrisch, stabil und zukunftssicher.",
  "Mein Herz hat CCS – und keine Reichweitenangst."
];

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "x-content-type-options": "nosniff"
    }
  });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/message") {
      return json({ message: messages[Math.floor(Math.random() * messages.length)] });
    }

    if (url.pathname === "/api/health") {
      return json({ status: "ok", service: "ladesaeulenliebe", timestamp: new Date().toISOString() });
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    headers.set("Content-Security-Policy", "default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'self'; connect-src 'self'; font-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }
};
