const q_btn = document.querySelector('#q_btn');
const time = document.querySelector('#time');
let hide;
const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
'O','P','Q','R','S','T','U','V','W','X','Y','Z',];
let timer_id;
let flag=false;

q_btn.addEventListener('click', () => {
  if (!flag) {
    const q_str = [];
    hide = Math.floor(Math.random() * alpha.length);
    for (let i in alpha) {
      if (i !== hide) {
        q_str.push(alpha[i]);
      }
    }
    document.querySelector('#alpha').innerHTML = q_str.join('');

    const start = new Date();
    timer_id = setInterval(() => {
      const now = new Date();
      const seconds = Math.floor((now.getTime() - start.getTime()) / 1000);
      time.innerText = '経過時間：' + seconds + '秒';
    }, 10);
    flag = true;
  }
});

const answer = document.querySelector('#answer');
const ipt = document.querySelector('input');
answer.addEventListener('click', () => {
  if (flag) {
    clearInterval(timer_id);
    if (ipt.value.toUpperCase() === alpha[hide]) {
      document.querySelector('#result').innerHTML = '<span style="color:blue">正解！！</span>';
    } else {
      document.querySelector('#result').innerHTML = `<span style="color:red">不正解・・・(正解:${alpha[hide]})</span>`;
    }
    flag = false;
  }
});
