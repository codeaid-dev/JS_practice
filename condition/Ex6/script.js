const num = Math.floor(Math.random()*10)+1;
if (num === 1) {
  console.log('今日は最高！');
} else if (num >= 2 && num <= 4) {
  console.log('今日はそこそこ');
} else if (num >= 5 && num <= 8) {
  console.log('今日はまぁまぁ');
} else {
  console.log('今日は最悪・・・');
}
