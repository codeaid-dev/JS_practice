// 関数定義
function greeting() {
  console.log('Hello World.');
}
greeting(); // Hello World.
// 関数定義
function greeting(msg) {
  console.log(`Hello, ${msg}.`);
}
greeting('Michael'); // Hello, Michael.
// 関数定義
function square(number) {
  return number * number;
}
console.log(square(4)); // 16
// 関数定義
function change(obj) {
  obj.make = 'Toyota';
}
mycar = { make: "Honda", model: "Accord", year: 1998 };
console.log(mycar.make); // Honda
change(mycar);
console.log(mycar.make); // Toyota
// 関数定義
function myFunc(arr) {
  arr[0] = 'Orange';
}
let fruits = ['Apple','Melon','Peach'];
console.log(fruits); // ["Apple","Melon","Peach"]
myFunc(fruits);
console.log(fruits); // ["Orange","Melon","Peach"]
// 関数式(無名)
const square2 = function (number) {
  return number * number;
};
console.log(square2(4)); // 16
// 関数式
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120
// 関数式(引数渡し)
function map(f, a) {
  let result = [];
  for (let i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}
const f = function (x) {
  return x * x * x;
};
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube); // [0,1,8,125,1000]
// 関数のスコープ
var num1 = 20;
var num2 = 3;
var name = "Foo";
function multiply() {
  return num1 * num2;
}
console.log(multiply()); // 60
// 入れ子になっている関数の例
function getScore() {
  var num1 = 2;
  var num2 = 4;
  function add() {
    return name + " scored " + (num1 + num2);
  }
  return add();
}
console.log(getScore()); // "Foo scored 6"
// 関数の引数
function myConcat(separator) {
  var result = "";
  var i;
  // 引数について繰り返し
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
console.log(myConcat(", ", "red", "orange", "blue")); // "red, orange, blue, "
console.log(myConcat(1,2,3)); // "34"
console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah")); // "elephant; giraffe; lion; cheetah; "
console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley")); // "sage. basil. oregano. pepper. parsley. "
// デフォルト引数
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5,2)); // 10
console.log(multiply(5)); // 5
// 残余引数1
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10
// 残余引数2
function countup(a, b, ...next) {
  console.log(a);
  console.log(b);
  console.log(next);
}
countup("one", "two", "three", "four", "five", "six");
// "one"
// "two"
// ["three", "four", "five", "six"]
// アロー関数
var a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
var a2 = a.map(function (s) {
  return s.length;
});
console.log(a2); // [8, 6, 7, 9]

var a3 = a.map((s) => s.length);
console.log(a3); // [8, 6, 7, 9]
// #1
function multiply(num1, num2=2) {
  return num1 * num2;
}
console.log(multiply(5,3)); // 15
console.log(multiply(5)); // 10
// #2
function multiply(numbers) {
  let result = 1;
  for (let n of arguments) {
    result *= n;
  }
  return result
}
console.log(multiply(1,2,3,4,5));
console.log(multiply(2,4,6,8));
// #3
function multiply(...numbers) {
  let result = 1;
  for (let n of numbers) {
    result *= n;
  }
  return result
}
console.log(multiply(1,2,3,4,5));
console.log(multiply(2,4,6,8));
// #4
function multiply(num, ...numbers) {
  const result = numbers.map((n)=>n*num);
  return result;
}
console.log(multiply(2,1,3,5,7,9));
console.log(multiply(2,2,4,6,8));
// #4(別解)
function multiply(num, ...numbers) {
  const result = [];
  for (let i=0; i<numbers.length; i++) {
    result[i] = numbers[i]*num;
  }
  return result;
}
console.log(multiply(2,1,3,5,7,9));
console.log(multiply(2,2,4,6,8));
// #5
const factorial2 = (n) => n < 2 ? 1 : n * factorial2(n-1);
console.log(factorial2(3)); // 6
console.log(factorial2(5)); // 120
// #6
function outer(a, b) {
  function inner(a, b) {
      return a+b;
  }
  let add = inner(a, b);
  return add+5
}
const result = outer(5, 10);
console.log(result);
// #7
function map(f, nums) {
  const result = [];
  for (let n of nums) {
    result.push(f(n));
  }
  return result;
}
let base = [1,3,5,7,9];
let res = map((n)=>n*2, base);
console.log(base); // [1,3,5,7,9]
console.log(res); // [2,6,10,14,18]
