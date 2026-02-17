let timerId;

const updateClock = () => {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${h}:${m}:${s}`;
}

timerId = setInterval(updateClock, 1000);
updateClock();

document.getElementById('stop').addEventListener('click', () => {
  clearInterval(timerId);
  timerId = null;
});

document.getElementById('start').addEventListener('click', () => {
  if (!timerId) timerId = setInterval(updateClock, 1000);
});
