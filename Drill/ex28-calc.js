const disp = document.querySelector('#display');
const keys = document.querySelectorAll('button');
let total = 0;
let numStat = true; // true:演算子入力後、false:数値入力後
let calc = '+';
let num = '';

for (let i=0; i<keys.length; i++) {
  keys[i].addEventListener('click', () => {
    let val = keys[i].value;
    if (!isNaN(val) || val === '.') {
      numStat = false;
      num += val;
      disp.innerText = num;
    } else if (val === 'C') {
        num = '';
        total = 0;
        calc = '+';
        disp.innerText = '';
    } else {
      if (!numStat) {
        numStat = true;
        console.log(total + calc + num);
        total = eval(total + calc + num);
        num = '';
        disp.innerText = total;
      }
      if (val === '=') {
        total = 0;
        calc = '+';
      } else {
        calc = val;
      }
    }
  });
}

