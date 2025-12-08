const like = document.getElementById('like');
const number = document.getElementById('number');

function countUp(event) {
  number.textContent = Number(number.textContent) + 1;
  event.currentTarget.removeEventListener('click', countUp);
}

like.addEventListener('click', countUp);
