// const box = document.getElementById('box');
const box = document.querySelector('#box');

box.addEventListener('mouseover', () => {
  box.style.backgroundColor = 'red';
});

box.addEventListener('mouseout', () => {
  box.style.backgroundColor = 'lightgray';
});
