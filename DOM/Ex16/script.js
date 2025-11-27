const box = document.getElementById('box');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    box.style.backgroundColor = btn.dataset.color;
  });
});
