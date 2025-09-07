// const input = document.getElementById('inputText');
// const button = document.getElementById('btn');
// const output = document.getElementById('output');
const input = document.querySelector('#inputText');
const button = document.querySelector('#btn');
const output = document.querySelector('#output');

button.addEventListener('click', () => {
  output.textContent = input.value;
});
