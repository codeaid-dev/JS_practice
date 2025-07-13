const question = document.querySelector('#question');
const answer = document.querySelector('#answer');
const btn = document.querySelector('button');
const elem = document.querySelector('#result');

const pref = {'北海道':'札幌', '青森県':'青森', '岩手県':'盛岡', '宮城県':'仙台', '栃木県':'宇都宮', '群馬県':'前橋', '神奈川県':'横浜'};
const pref_list = ['北海道', '青森県', '岩手県', '宮城県', '栃木県', '群馬県', '神奈川県'];

const ken = pref_list[Math.floor(Math.random() * pref_list.length)];
const q = ken + 'の県庁所在地は？';
question.innerText = q;
btn.addEventListener('click', ()=>{
  const a = answer.value;
  if (a == pref[ken]) {
    elem.innerText = '正解！！';
  } else {
    elem.innerText = '不正解・・・';
  }
});
