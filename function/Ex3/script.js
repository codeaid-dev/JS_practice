function multiply(...numbers) {
  let result = 1;
  for (let n of numbers) {
    result *= n;
  }
  return result
}
console.log(multiply(1,2,3,4,5));
console.log(multiply(2,4,6,8));
