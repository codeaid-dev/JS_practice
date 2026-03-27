// for文
for (let step = 0; step < 5; step++) {
  console.log(`${step+1}歩進む`);
}
// for ... in
const nums = [1,2,3,4,5,6,7,8,9];
for (let i in nums) {
  console.log(`${i}番目の値は${nums[i]}`);
}
// for ... of
for (let i of nums) {
  console.log(`配列の値は${i}`);
}
// for ... in , for ... ofの違い
const arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
  console.log(i); // "0", "1", "2", "foo"
}
// 文字列はfor...ofで文字を取り出し、for...inでインデックスを取り出す
const string = 'apple';
for (let s of string) {
  console.log(s);
}
for (let s in string) {
  console.log(s);
}
// 文字列はプロパティを追加できない
const fruit = 'apple';
fruit.type = 'juce';
console.log(fruit[0]); // a
console.log(fruit.type); // undefined

for (let i of arr) {
  console.log(i); // 3, 5, 7
}
// do ... while
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
// while文
let n = 0;
while (n < 3) {
  n++;
  console.log(`n:${n}`);
}
// break
n = 0;
while (n < 3) {
  n++;
  console.log(`n:${n}`);
  if (n === 2) {
    break;
  }
}
// continue
n = 0;
while (n < 3) {
  n++;
  if (n === 2) {
    continue;
  }
  console.log(`n:${n}`);
}
// 最初の文は "loop1" というラベルが付いている
loop1: for (let i = 0; i < 3; i++) {
  // 2 番目の文は "loop2" というラベルが付いている
  loop2: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
