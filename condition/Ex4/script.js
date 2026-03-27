const yen1 = 2;
const yen5 = 1;
const total = yen1 + yen5*5;
for (let i=1; i<=total; i++) {
  if (i%5 <= yen1) {
    console.log(i);
  }
}
