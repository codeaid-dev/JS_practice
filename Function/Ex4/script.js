function multiply(num, ...numbers) {
  const result = numbers.map((n)=>n*num);
  return result;
}
console.log(multiply(2,1,3,5,7,9));
console.log(multiply(2,2,4,6,8));

// #4(別解)
// function multiply(num, ...numbers) {
//   const result = [];
//   for (let i=0; i<numbers.length; i++) {
//     result[i] = numbers[i]*num;
//   }
//   return result;
// }
// console.log(multiply(2,1,3,5,7,9));
// console.log(multiply(2,2,4,6,8));
