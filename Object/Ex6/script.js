const items = [
  {id: 1, name: "ノート", price: 150},
  {id: 2, name: "シャーペン", price: 120},
  {id: 3, name: "消しゴム", price: 80},
  {id: 4, name: "ボールペン", price: 120}
];

items.forEach((item,index) => {
  console.log(`ID:${item.id}, 商品名:${item.name}, 価格:${item.price}`);
});
const item = items.find(item => {return item.id === 4});
item.price = 200;
console.log(`ID:${item.id}, 商品名:${item.name}, 価格:${item.price}`);
