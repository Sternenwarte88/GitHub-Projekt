const API_URL = '/api/entries';

async function loadEntries() {
  const res = await fetch(API_URL);
  const data = await res.json();
  const container = document.getElementById('entries');
  container.innerHTML = '';
  data.forEach((entry) => {
    const el = document.createElement('div');
    el.className = 'entry';
    el.innerHTML = `<strong>${entry.name}</strong><br>${entry.message}<br><small>${new Date(
      entry.created_at
    ).toLocaleString()}</small>`;
    container.appendChild(el);
  });
}

document.getElementById('guestbook-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, message })
  });
  e.target.reset();
  loadEntries();
});

loadEntries();
