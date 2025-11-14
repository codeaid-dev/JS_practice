const question = document.querySelector('#question');
const answer = document.querySelector('#answer');
const btn1 = document.querySelector('#send');
const elem = document.querySelector('#result');
const btn2 = document.querySelector('#next');

const pref = {'北海道':'札幌', '青森県':'青森', '岩手県':'盛岡', '宮城県':'仙台', '栃木県':'宇都宮', '群馬県':'前橋', '神奈川県':'横浜'};
const pref_list = ['北海道', '青森県', '岩手県', '宮城県', '栃木県', '群馬県', '神奈川県'];
let ken = '';

show_q = () => {
  ken = pref_list[Math.floor(Math.random() * pref_list.length)];
  const q = ken + 'の県庁所在地は？';
  question.textContent = q;
}
show_q();

btn1.addEventListener('click', () => {
  const a = answer.value;
  if (a == pref[ken]) {
    elem.style.color = 'red';
    elem.textContent = '正解！！';
  } else {
    elem.style.color = 'black';
    elem.textContent = `不正解・・・(正解：${pref[ken]})`;
  }
});

btn2.addEventListener('click', () => {
  show_q();
});
