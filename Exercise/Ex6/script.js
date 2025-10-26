const btns = document.querySelectorAll('button');
const disc = document.querySelector('#discription');
for (let i=0; i<btns.length; i++) {
  btns[i].addEventListener('click', () => {
    if (btns[i].id === 'small') {
      // disc.setAttribute('style', 'font-size:14px;');
      disc.style.fontSize = '14px';
    } else if (btns[i].id === 'medium') {
      // disc.setAttribute('style', 'font-size:16px;');
      disc.style.fontSize = '16px';
    } else if (btns[i].id === 'large') {
      // disc.setAttribute('style', 'font-size:20px;');
      disc.style.fontSize = '20px';
    }
  });
}
