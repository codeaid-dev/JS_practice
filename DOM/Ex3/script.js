// const box = document.getElementById('box');
// const button = document.getElementById('colorBtn');
const box = document.querySelector('#box');
const button = document.querySelector('#colorBtn');

button.addEventListener('click', () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${r} ${g} ${b})`;
});
