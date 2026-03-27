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
