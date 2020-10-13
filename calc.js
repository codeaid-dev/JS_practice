let disp = document.querySelector('#display');
let keys = document.querySelectorAll('button');
let total = 0;
let numStat = true; // 数値入力後か？true:数値入力後、false:数値入力後でない
let calc = "+";
let num = '';

for (let i=0; i<keys.length; i++) {
  keys[i].addEventListener('click', () => {
    let val = keys[i].value;
    if (!isNaN(val) || val == '.') {
      numStat = false;
      num += val;
      disp.innerText = num;
    } else if (val == "C") {
        num = '';
        total = 0;
        calc = '+';
        disp.innerText = total;
    } else {
      if (!numStat) {
        numStat = true;
        total = eval(total + calc + num);
        num = '';
        disp.innerText = total;
      }
      if (val == '=') {
        total = 0;
        calc = '+';
      } else {
        calc = val;
      }
    }
  });
}

