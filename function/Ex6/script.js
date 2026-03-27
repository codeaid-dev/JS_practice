function outer(a, b) {
  function inner(a, b) {
      return a+b;
  }
  let add = inner(a, b);
  return add+5
}
const result = outer(5, 10);
console.log(result);
