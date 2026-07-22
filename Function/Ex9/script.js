function modify(arr) {
  for (let i=0; i<arr.length; i++) {
    arr[i] = arr[i].slice(0,3) + '.';
  }
}
const week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
console.log(week);
modify(week)
console.log(week); // ["Mon.","Tue.","Wed.","Thu.","Fri.","Sat.","Sun."]
