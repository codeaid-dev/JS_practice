console.log('Hello World');
console.log('Hello ' + 'World.');
const greeting = 'Hello';
const name = 'Taro';
console.log(greeting + ', ' + name);
console.log('My height is ' + 175);
const weight = 60;
console.log('My weight is ' + weight);
const height = 175;
console.log(`Height:${height}, Weight:${weight}, BMI:${weight/(height/100)**2}`);
//const bmi = Math.round(weight/(height/100)**2); // 20
const bmi = Math.round((weight/(height/100)**2)*10)/10; // 19.6
//const bmi = Math.floor(weight/(height/100)**2); // 19
//const bmi = Math.ceil(weight/(height/100)**2); // 20
console.log(`Height:${height}, Weight:${weight}, BMI:${bmi}`);
const left = '4'; // 文字列の'4'としても+演算子以外は数値と同じく計算する
const right = 2;
console.log(left + right);
console.log(left - right);
console.log(left * right);
console.log(left / right);
console.log(left % right);
console.log(left ** right);
let num = 2
console.log(++num);
console.log(--num);
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
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum); // number
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2); // string
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
// #1
console.log('It\'s JavaScript. The script executes on "Web" environment.');
// #2
const a = 98;
const b = 25;
console.log('a+b=',a+b);
console.log('a-b=',a-b);
console.log('a*b=',a*b);
console.log('a/b=',a/b);
console.log('aの2乗',a**2);
// #3
const num1 = 54;
const num2 = 3.14;
const str = 'Osaka';
const bool = true;
console.log(typeof(num1));
console.log(typeof(num2));
console.log(typeof(str));
console.log(typeof(bool));
// #4
const prefs = '世田谷杉並練馬品川足立西東京';
const kanas = 'あいうえおかきくけこさしすせそ';
const kind = 310;
const ch = kanas[5];
const plate = 1234;
console.log(`${prefs.slice(7,9)} ${kind} ${ch} ${plate}`);
// #5
console.log(`ペットボトルは${Math.floor(7*1.5)}本です。`);
// #6
console.log(`半径30cmの円の面積は${30**2*3.14}平方cmです。`);
// #7
const total = 1280;
const A = Math.floor(total/3)+total%3;
const B = Math.floor(total/3);
const C = Math.floor(total/3);
console.log(`Aさんは${A}円、Bさんは${B}円、Cさんは${C}円支払いました`);
// #8
const sentence = 'This is my ballpen. This ballpen is comfortable to write on.';
const res1 = sentence.replaceAll('ballpen','pen');
const res2 = res1.replace(' This',' My');
console.log(sentence);
console.log(res2);
// #9
const signal = 'しばらくすると信号機が赤に変わった';
const index = signal.indexOf('赤');
console.log(signal.slice(0,index) + '青' + signal.slice(index+1));
// #10
let price = 17777;
console.log(`10000円札は${Math.floor(price/10000)}枚`);
price = price % 10000;
console.log(`5000円札は${Math.floor(price/5000)}枚`);
price = price % 5000;
console.log(`1000円札は${Math.floor(price/1000)}枚`);
price = price % 1000;
console.log(`500円玉は${Math.floor(price/500)}枚`);
price = price % 500;
console.log(`100円玉は${Math.floor(price/100)}枚`);
price = price % 100;
console.log(`50円玉は${Math.floor(price/50)}枚`);
price = price % 50;
console.log(`10円玉は${Math.floor(price/10)}枚`);
price = price % 10;
console.log(`5円玉は${Math.floor(price/5)}枚`);
console.log(`1円玉は${Math.floor(price%5)}枚`);
// #11
const letters = 'abcdefghijklmnopqrstuvwxyz';
console.log(letters.slice(-5));
console.log(letters.slice(10,-10));
console.log(letters.slice(-7,-3));
// #12
const baseNum = '12345678';
const leftNum = Number(baseNum.slice(0,4));
const rightNum = Number(baseNum.slice(4));
console.log(leftNum*2, rightNum/2);
// #13
const region = 'oSaKa';
const lower = region.toLowerCase();
const firstLetter = lower.slice(0,1).toUpperCase();
const resultLetter = firstLetter + lower.slice(1);
console.log(resultLetter);