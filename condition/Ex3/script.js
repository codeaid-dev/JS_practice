let s = '';
for (let i=1; i<31; i++) {
  if (i%3===0 && i%5===0) {
    s += 'FizzBuzz';
  } else if (i%3===0) {
    s += 'Fizz';
  } else if (i%5===0) {
    s += 'Buzz';
  } else {
    s += i;
  }
  s += ' ';
}
console.log(s);
