const disp = document.querySelector('#display');
const keys = document.querySelectorAll('button');
let total = 0;
let numStat = false; // 数値入力中か？true:数値入力中、false:数値入力中でない
let calcStat = false; // 演算子が入力されたか？ true:演算子入力中、false:演算子入力中でない
let calc = '+';
let num = '';
let dotStat = false; // .が押されているか？ true:押されている、false:押されてない
let initStat = true; // 初めてボタンが押されたか？ true:押された、false:押されてない

for (let i=0; i<keys.length; i++) {
  keys[i].addEventListener('click', () => {
    let val = keys[i].value;
    if (val === '.') {
      if (!initStat) {
        num = total + val;
        disp.innerText = num;
        initStat = true;
        dotStat = true;
      } else if (!dotStat) {
        num += val;
        disp.innerText = num;
        dotStat = true;
      }
    } else if (!isNaN(val)) {
      numStat = true;
      num += val;
      disp.innerText = num;
      initStat = true;
    } else  {
      if (val === 'C') {
        numStat = false;
        calcStat = false;
        initStat = false;
        dotStat = false;
        num = '';
        total = 0;
        disp.innerText = total;
      } else if (val === '+/-') {

      } else if (val === '%') {

      } else {
        if (numStat) {
          if (!calcStat && val !== '=') {
            calcStat = true;
            total = num;
            calc = val;
            num = '';
            disp.innerText = total;
          } else {
            if (val === '=') {
              calcStat = false;
              total = eval(total + calc + num);
              disp.innerText = total;
              num = total;
            } else {
              numStat = false;
              total = eval(total + calc + num);
              num = '';
              disp.innerText = total;
              calc = val;
            }
          }
          dotStat = false;
        }
      }
    }
  });
}
