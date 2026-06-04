// dashboard.js — loads user data into the dashboard

document.addEventListener('DOMContentLoaded', () => {
  requireAuth();

  const session = getSession();
  const initials = session.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);

  // Populate user info
  document.getElementById('user-name').textContent  = session.name;
  document.getElementById('user-email').textContent = session.email;
  document.getElementById('avatar').textContent     = initials;

  // Welcome heading
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  document.getElementById('greeting').textContent = `${greeting}, ${session.name.split(' ')[0]} 👋`;

  // Animate stat counters
  animateCounter('stat-score', 0, 87, '%');
  animateCounter('stat-modules', 0, 3, '');
  animateCounter('stat-streak', 0, 12, ' days');
});

function animateCounter(id, from, to, suffix) {
  const el = document.getElementById(id);
  if (!el) return;
  let current = from;
  const step = Math.ceil((to - from) / 40);
  const timer = setInterval(() => {
    current = Math.min(current + step, to);
    el.textContent = current + suffix;
    if (current >= to) clearInterval(timer);
  }, 25);
}
