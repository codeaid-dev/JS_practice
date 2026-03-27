const num = Math.floor(Math.random()*20)+1;
let result = '';
for (let i=1; i<=20; i++) {
  if (i > num/i) {
    break;
  }
  if (num%i === 0) {
    result += `${i}x${num/i}=${num} `;
  }
}
console.log(result);
