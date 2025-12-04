const html = document.querySelector('html');
const body = document.querySelector('body');
const div = document.getElementById('block');
const p = document.querySelector('p');
const btn = document.querySelector('button');
const func = (event) => {
 console.log(event.currentTarget);
}
html.addEventListener('click', func);
body.addEventListener('click', func);
div.addEventListener('click', func);
p.addEventListener('click', func);
btn.addEventListener('click', (event) => {
  // event.stopPropagation();
  p.textContent = "ボタンが押された";
  console.log(event.currentTarget);
});
