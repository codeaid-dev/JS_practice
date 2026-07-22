const region = 'oSaKa';
const lower = region.toLowerCase();
const firstLetter = lower.slice(0,1).toUpperCase();
const resultLetter = firstLetter + lower.slice(1);
console.log(resultLetter);
