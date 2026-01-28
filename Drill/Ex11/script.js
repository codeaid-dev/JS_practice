const txt = document.getElementById('txt');
const size = document.getElementById('size');
const colors = document.getElementsByName('color');
const bold = document.getElementById('bold');

const btn = document.querySelector('button');
btn.addEventListener('click', () => {

  let color = 'black';
  for (let e of colors) {
    if (e.checked) {
      color = e.value;
      break;
    }
  }

  const style = `font-size:${size.value}px; color:${color};font-weight:${(bold.checked) ? 'bold' : 'normal'}`;

  const num = document.getElementById('loop');
  const show = document.getElementById('show');
  show.setAttribute('style', style);

  show.textContent = null; // 前回に入力した子要素を削除する

  for (let i=0; i<num.value; i++) {
    if (txt.value === '') {
      show.innerHTML = '<p>空です</p>';
    } else {
      show.innerHTML += '<p>' + txt.value + '</p>';
    }
  }

}); //addEventListener
