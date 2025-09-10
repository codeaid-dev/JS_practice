// const text = document.getElementById('text');
// const button = document.getElementById('clearBtn');
const text = document.querySelector('#text');
const button = document.querySelector('#clearBtn');

button.addEventListener('click', () => {
  text.textContent = '';
});
