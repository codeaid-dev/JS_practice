const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const reset = document.getElementById('reset');

plus.addEventListener('click', () => {
  let count = Number(counter.dataset.count);
  const limit = Number(counter.dataset.limit);

  if (count < limit) {
    count++;
    counter.dataset.count = count;
    counter.textContent = `現在: ${count} / ${limit}`;
  }
});

reset.addEventListener('click', () => {
  counter.dataset.count = 0;
  counter.textContent = `現在: 0 / ${counter.dataset.limit}`;
});