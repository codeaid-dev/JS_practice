// ----------------------
// 通常関数 (function)
// ----------------------

// 1. 名前付き関数（ユーティリティ）
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Taro")); // Hello, Taro!

// 2. メソッドとして利用する場合の this
const person = {
  name: "Hanako",
  sayName: function() {  // 通常関数なので this は呼び出し元を指す
    console.log("My name is " + this.name);
  }
};
person.sayName(); // My name is Hanako

// class Person {
//   name = 'Hanako';
//   sayName() {
//     console.log('My name is ' + this.name);
//   }
// }
// const person = new Person();
// person.sayName();

// ----------------------
// アロー関数 (() =>)
// ----------------------

// 1. 短いコールバック関数
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

// 2. this が外側スコープを保持する例
function Counter() {
  this.count = 0;
  setInterval(() => {
    // アロー関数なので this は Counter のインスタンスを参照
    this.count++;
    console.log("Count:", this.count);
  }, 1000);
}
new Counter();  // 1秒ごとにカウントが増えて表示される