const screens = document.querySelectorAll('.screen');
const clock = document.getElementById('clock');
const date = document.getElementById('date');
const dayPart = document.getElementById('day-part');

function updateTime() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  date.textContent = now.toLocaleDateString([], { weekday: 'short', day: '2-digit', month: 'short' }).toUpperCase();
  const hour = now.getHours();
  dayPart.textContent = hour < 12 ? 'MORNING' : hour < 18 ? 'AFTERNOON' : 'EVENING';
}

function showScreen(id) {
  screens.forEach((screen) => {
    const active = screen.id === id;
    screen.hidden = !active;
    screen.classList.toggle('active', active);
  });
  document.querySelector(`#${id} button, #${id} a, #${id} input`)?.focus();
}

document.querySelectorAll('[data-screen]').forEach((control) => {
  control.addEventListener('click', () => showScreen(control.dataset.screen));
});

document.getElementById('save-focus').addEventListener('click', () => {
  const task = document.getElementById('focus-task').value.trim();
  document.getElementById('focus-result').textContent = task ? `> ${task}` : '> choose one task first';
});

updateTime();
setInterval(updateTime, 30000);

