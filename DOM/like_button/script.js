const like = document.getElementById('like');
const number = document.getElementById('number');

const countUp = (event) => {
  number.textContent = Number(number.textContent) + 1;
  event.currentTarget.removeEventListener('click', countUp);
}

like.addEventListener('click', countUp);
