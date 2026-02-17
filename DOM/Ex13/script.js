const stars = document.querySelectorAll('.star');
const result = document.getElementById('result');
let rating = 0;
const highlight = (index) => {
  stars.forEach((s, j) => s.classList.toggle('active', j <= index));
}

stars.forEach((star, i) => {
  star.addEventListener('mouseover', () => highlight(i));
  star.addEventListener('mouseout', () => highlight(rating - 1));
  star.addEventListener('click', () => {
    rating = i + 1;
    result.textContent = `評価: ${rating} / 5`;
  });
});
