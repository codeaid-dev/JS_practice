let myArray = ["apple", "orange", "apple", "peach", "orange", "orange"];

let counts = {};

for (let i = 0; i < myArray.length; i++) {
  let key = myArray[i];
  counts[key] = (counts[key]) ? counts[key] + 1 : 1;
}

alert(counts["apple"]);
alert(counts["orange"]);
alert(counts["peach"]);

console.log(JSON.stringify(counts));
console.dir(counts);
