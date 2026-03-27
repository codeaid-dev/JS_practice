function append(arr, index, value) {
  for (let val of value) {
    arr.splice(index, 0, val);
    index += 1;
  }
}
const days = ['Mon','Fri','Sat','Sun'];
const parts = ['Tue','Wed','Thu'];
append(days, 1, parts);
console.log(days); // ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
