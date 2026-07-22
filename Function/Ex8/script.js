function filter(f, arr) {
  const result = [];
  for (let item of arr) {
    if (f(item)) {
      result.push(item);
    }
  }
  return result;
}
const months = ['January','Fevruary','March','April','May','June','July','August','September','October','November','December'];
let res = filter((item)=>item.length>5, months);
console.log(res); // ["January","February","August","September","October","November","December"]
