let pref = {'北海道':'札幌', '青森県':'青森', '岩手県':'盛岡', '宮城県':'仙台', '栃木県':'宇都宮', '群馬県':'前橋', '神奈川県':'横浜'};
let pref_list = ['北海道', '青森県', '岩手県', '宮城県', '栃木県', '群馬県', '神奈川県'];

let ken = pref_list[Math.floor(Math.random() * pref_list.length)];
let answer = prompt(ken + 'の県庁所在地は？');
if (answer == pref[ken]) {
  console.log('正解！！');
} else {
  console.log('不正解・・・');
}
