// 文字列の連結
console.log('[文字列の連結]');
console.log('Hello World');
console.log('Hello ' + 'World.');
const greeting = 'Hello';
const name = 'Taro';
console.log(greeting + ', ' + name);
console.log('My height is ' + 175);
const weight = 60;
console.log('My weight is ' + weight);
const height = 175;
console.log('');

// ランダムな数値
console.log('[ランダムな数値]');
let num = 5;
console.log(Math.floor(Math.random()*num)); // 0~5未満のランダムな整数
console.log(Math.random());
console.log('');

// 数値の演算
console.log('[数値の演算]');
const left = '4'; // 文字列の'4'としても+演算子以外は数値と同じく計算する
const right = 2;
console.log(left + right);
console.log(left - right);
console.log(left * right);
console.log(left / right);
console.log(left % right);
console.log(left ** right);
num = 2
console.log(++num);
console.log(--num);
console.log('');

// 文字列の挿入
console.log('[文字列の挿入]');
console.log(`Height:${height}, Weight:${weight}, BMI:${weight/(height/100)**2}`);
//const bmi = Math.round(weight/(height/100)**2); // 20
const bmi = Math.round((weight/(height/100)**2)*10)/10; // 19.6
//const bmi = Math.floor(weight/(height/100)**2); // 19
//const bmi = Math.ceil(weight/(height/100)**2); // 20
console.log(`Height:${height}, Weight:${weight}, BMI:${bmi}`);
console.log('');

// データ型
console.log('[データ型]');
const age = 28;
console.log(typeof(age)); // number
const hello = 'Hello';
console.log(typeof hello); // string
const stat = true;
console.log(typeof stat); // boolean
const obj = {key: 'value'}
console.log(typeof(obj));
const lst = [1,2];
console.log(typeof lst);
console.log('');

// 文字列と数値の変換
console.log('[文字列と数値の変換]');
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum); // number
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2); // string
console.log('');

// 文字列の操作
console.log('[文字列の操作]');
const string = 'Hello World.';
console.log(string.length);
console.log(string[0]); // H
console.log(string[string.length-1]); // .
const words = 'hogefoobarhoge';
console.log(words.slice(4,10)); // foobar
console.log(words.slice(7)); // barhoge
console.log(words.slice(4,-4)); // foobar
const title = 'Documents for JavaScript learning by writing JavaScript';
console.log(title.indexOf('JavaScript')); // 14
const first = title.indexOf('JavaScript');
console.log(title.indexOf('JavaScript', first+1)); // 45
console.log(words.includes('foo')); // true
console.log(words.startsWith('hoge')); // true
console.log(words.endsWith('foo')); // false
const data1 = 'I Like JavaScript';
console.log(data1.toLowerCase()); // i like javascript
console.log(data1.toUpperCase()); // I LIKE JAVASCRIPT
console.log(data1.replace('Java', 'ECMA')); // I Like ECMAScript
const data2 = 'I Like JavaScript. JavaScript is great!';
console.log(data2.replace('Java', 'ECMA')); // I Like ECMAScript. JavaScript is great!
console.log(data2.replaceAll('Java', 'ECMA')); // I Like ECMAScript. ECMAScript is great!
console.log('');
