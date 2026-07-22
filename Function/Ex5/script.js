const factorial = (n) => n < 2 ? 1 : n * factorial(n-1);
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120
