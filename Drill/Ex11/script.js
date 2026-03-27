const btns = document.querySelectorAll('button');
const disc = document.querySelector('#description');
// for (let i=0; i<btns.length; i++) {
//   btns[i].addEventListener('click', () => {
//     if (btns[i].id === 'small') {
//       // disc.setAttribute('style', 'font-size:14px;');
//       disc.style.fontSize = '14px';
//     } else if (btns[i].id === 'medium') {
//       // disc.setAttribute('style', 'font-size:16px;');
//       disc.style.fontSize = '16px';
//     } else if (btns[i].id === 'large') {
//       // disc.setAttribute('style', 'font-size:20px;');
//       disc.style.fontSize = '20px';
//     }
//   });
// }

btns.forEach((btn) => {
  btn.addEventListener('click', (b) => {
    if (b.currentTarget.id === 'small') {
      // disc.setAttribute('style', 'font-size:14px;');
      disc.style.fontSize = '14px';
    } else if (b.currentTarget.id === 'medium') {
      // disc.setAttribute('style', 'font-size:16px;');
      disc.style.fontSize = '16px';
    } else if (b.currentTarget.id === 'large') {
      // disc.setAttribute('style', 'font-size:20px;');
      disc.style.fontSize = '20px';
    }
  });
});
