const num1 = 7536;
console.log(num1);
const str1 = String(num1);
const reversed = [];
for (let s of str1) {
  reversed.unshift(s);
}
const num2 = Number(reversed.join(''));
console.log(num2);
console.log(num1 + num2);
