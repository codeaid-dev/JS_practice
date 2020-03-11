const func = ()=>{
  console.log(this);
};
func();

let obj = {
  scope: this,
  name: 'Taro',
  hoge: function(){
    console.log(this);
  }
};
obj.hoge();
console.log(obj.scope);

let price = 100;
console.log(`この商品の金額は
税抜で${price}円となります。`);

let wdays = ['日', '月', '火', '水', '木', '金', '土'];
for (let day of wdays) {
  console.log(`${day}曜日`);
}

var wdays = ['日', '月', '火', '水', '木', '金', '土'];
for (var i=0; i<7; i++) {
  console.log(wdays[i] + '曜日');
}

function Profile() {
  this.name = '太郎'; // プロパティ
}
Profile.prototype.desc = function() { // メソッド
  console.log(this.name + 'はお人好しでカワイイです。');
};
var person = new Profile();
person.desc();

class Profile {
  constructor() {
    this.name = '太郎';
  }

  desc() {
    console.log(`${this.name}はお人好しでカワイイです。`);
  }

  static showProfile() {
    console.log(this.name + 'はお人好しでカワイイです。' + this.getHeight());
  }
  static getHeight() {
    return '身長は160cmです。';
  }
}
let person = new Profile();
Profile.showProfile();
console.log(person.name);
person.desc();
