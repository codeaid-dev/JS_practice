for (let i=0; i<20; i++) {
  const dice1 = Math.floor(Math.random()*6)+1;
  const dice2 = Math.floor(Math.random()*6)+1;
  console.log(`${i+1}回目：${dice1},${dice2}`)
  if (dice1 === dice2) {
    if (dice1%2 === 0) {
      console.log('大当たり');
    } else {
      console.log('当たり');
    }
    break;
  }
}
