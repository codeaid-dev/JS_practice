const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const btn = document.getElementById('btn');

outer.addEventListener('click', () => {
  outer.style.backgroundColor = 'rgb(255 0 0 / 0.5)';
  console.log('outer');
}, true);

inner.addEventListener('click', () => {
  inner.style.backgroundColor = 'rgb(0 255 0 / 0.5)';
  console.log('inner');
});

btn.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('button');
});
