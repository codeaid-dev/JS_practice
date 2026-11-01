const product = {
  name: "ノートPC",
  price: 120000,
  quantity: 3,

  getTotalPrice() {
    return this.price * this.quantity;
  },

  display() {
    console.log(`商品名：${this.name}`);
    console.log(`価格：${this.price}円`);
    console.log(`在庫数：${this.quantity}`);
    console.log(`在庫総額：${this.getTotalPrice()}円`);
  }
};

product.display();
