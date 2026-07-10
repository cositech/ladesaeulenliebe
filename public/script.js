const messageButton = document.querySelector('#messageButton');
const loveMessage = document.querySelector('#loveMessage');
const chargeStatus = document.querySelector('#chargeStatus');
const sparkButton = document.querySelector('#sparkButton');
const sparkLayer = document.querySelector('#sparkLayer');

function burst(x, y, amount = 14) {
  const symbols = ['♥', '⚡', '♡'];

  for (let i = 0; i < amount; i += 1) {
    const spark = document.createElement('span');
    spark.className = 'spark';
    spark.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.setProperty('--x', `${(Math.random() - 0.5) * 320}px`);
    spark.style.setProperty('--y', `${(Math.random() - 0.7) * 280}px`);
    sparkLayer.appendChild(spark);
    window.setTimeout(() => spark.remove(), 1300);
  }
}

async function loadMessage() {
  messageButton.disabled = true;
  messageButton.textContent = 'Lade Gefühle …';

  try {
    const response = await fetch('/api/message', { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('API unavailable');

    const data = await response.json();
    loveMessage.textContent = data.message;
    chargeStatus.textContent = 'Systemstatus: Herz vollständig geladen';
    burst(window.innerWidth * 0.42, window.innerHeight * 0.52, 20);
  } catch {
    loveMessage.textContent = 'Du lädst mein Auto – und mein Herz.';
    chargeStatus.textContent = 'Offline-Modus: Liebe weiterhin verfügbar';
  } finally {
    messageButton.disabled = false;
    messageButton.textContent = 'Noch eine Liebeserklärung';
  }
}

messageButton.addEventListener('click', loadMessage);
sparkButton.addEventListener('click', (event) => {
  const rect = event.currentTarget.getBoundingClientRect();
  burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 24);
  chargeStatus.textContent = 'Systemstatus: maximale Spannung';
});
