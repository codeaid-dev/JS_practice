let cnt = 0;
for (let i=1; i<31; i++) {
  cnt += i;
  if (i===10 || i===20 || i===30) {
    console.log(`${i-9}から${i}の合計：${cnt}`);
    cnt = 0;
  }
}
