const cards = document.querySelectorAll('.card');
const count = document.getElementById('count');

function updateCount() {
  const selected = [...cards].filter(c => c.classList.contains('selected'));
  count.textContent = selected.length;
}

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('selected');
    updateCount();
  });
});
