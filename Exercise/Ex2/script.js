const colors = document.querySelectorAll('.color');
const txt = document.querySelector('#txt');
const result = document.querySelector('#result');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  let color = 'black';
  for (let ele of colors) {
    if (ele.checked) {
      color = ele.value;
      break;
    }
  }
  // for (let i in colors) {
  //   if (colors[i].checked) {
  //     color = colors[i].value;
  //     break;
  //   }
  // }
  // result.style.color = color;
  result.setAttribute('style', `color: ${color}`);
  result.textContent = txt.value;
});
