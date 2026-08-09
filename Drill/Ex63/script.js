const disp = document.querySelector('#display');
const keys = document.querySelectorAll('button');
let total = '0';
let start = true; // true:演算開始、false:演算中

disp.innerText = total;
for (let i=0; i<keys.length; i++) {
  keys[i].addEventListener('click', () => {
    let val = keys[i].value;
    if (val !== 'C' && val !== '=') {
      if (start && !isNaN(val)) {
        total = val;
        start = false;
      } else if (!isNaN(val) && total === '0') {
        total = val;
      } else {
        if (isNaN(total[total.length-1])) {
          if (!isNaN(val)) {
            total += val;
            start = false;
          }
        } else {
          total += val;
          start = false;
        }
      }
      disp.innerText = total;
    } else if (val === '=') {
      total = String(eval(total));
      disp.innerText = total;
      start = true;
    } else if (val === 'C') {
      total = '0';
      start = true;
      disp.innerText = total;
    }
  });
}
