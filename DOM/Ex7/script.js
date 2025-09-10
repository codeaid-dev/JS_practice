// const img = document.getElementById('myImage');
// const button = document.getElementById('changeBtn');
const img = document.querySelector('#myImage');
const button = document.querySelector('#changeBtn');
let flag = true;

button.addEventListener('click', () => {
  if (flag) {
    img.src = 'animal_inu.png';
  } else {
    img.src = 'animal_neko.png';
  }
  flag = !flag;
});
