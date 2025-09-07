// const button = document.getElementById('btn');
// const message = document.getElementById('message');
const button = document.querySelector('#btn');
const message = document.querySelector('#message');

button.addEventListener('click', () => {
  message.textContent = 'こんにちは！';
});
