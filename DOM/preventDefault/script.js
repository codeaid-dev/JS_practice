const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (event) => {
  if (input.value === '') {
    event.preventDefault();
    alert('入力してください');
  }
});
