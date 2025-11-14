const tarea = document.querySelector('textarea');
const findipt = document.querySelector('#findtxt');
const repipt = document.querySelector('#reptxt');
const btn = document.querySelector('button');
const elem = document.querySelector('p');
btn.addEventListener('click', () => {
  let findtxt = findipt.value;
  let reptxt = repipt.value;
  let tagtxt = tarea.value;
  findtxt = new RegExp(findtxt, 'g');
  tagtxt = tagtxt.replace(findtxt, reptxt);
  elem.innerText = tagtxt;
});
