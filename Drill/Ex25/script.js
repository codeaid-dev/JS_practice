const q_btn = document.querySelector('#q_btn');
let hide;
const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
'O','P','Q','R','S','T','U','V','W','X','Y','Z'];
q_btn.addEventListener('click', () => {
  const q_str = [];
  hide = Math.floor(Math.random() * alpha.length);
  for (let i in alpha) {
    if (Number(i) !== hide) {
      q_str.push(alpha[i]);
    }
  }
  document.querySelector('#alpha').innerHTML = q_str.join('');
});

const answer = document.querySelector('#answer');
const ipt = document.querySelector('input');
answer.addEventListener('click', () => {
  if (ipt.value.toUpperCase() === alpha[hide]) {
    document.querySelector('#result').innerHTML = '<span style="color:blue">正解！！</span>';
  } else {
    document.querySelector('#result').innerHTML = `<span style="color:red">不正解・・・(正解：${alpha[hide]})</span>`;
  }
});
