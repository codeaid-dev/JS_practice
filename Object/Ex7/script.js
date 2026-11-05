const items = [
  {name:"飴(1袋)", price:190, quantity:3},
  {name:"チョコレート(1箱)", price:200, quantity:2},
  {name:"ポテトチップス(1袋)", price:120, quantity:1}
];
let total = 0;
items.forEach((item, index) => {
  console.log(`${item.name} 小計：${item.price * item.quantity}円`);
  total += item.price * item.quantity;
});
console.log(`合計：${total}円`);
