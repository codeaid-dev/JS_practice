// const counter = document.getElementById('counter');
// const plus = document.getElementById('plus');
// const minus = document.getElementById('minus');
const counter = document.querySelector('#counter');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');

let value = 0;

plus.addEventListener('click', () => {
  value++;
  counter.textContent = value;
});

minus.addEventListener('click', () => {
  value--;
  counter.textContent = value;
});
