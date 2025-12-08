const like = document.getElementById('like');
const number = document.getElementById('number');

like.addEventListener('click', () => {
  number.textContent = Number(number.textContent) + 1;
}, {once: true});
