const product = {
  name: "ノートPC",
  price: 120000,
  quantity: 3,
  discountRate: 10,

  getTotalPrice() {
    const newPrice = this.getDiscountedPrice();
    return newPrice * this.quantity;
  },

  getDiscountedPrice() {
    return Math.floor(
      this.price * (1 - this.discountRate / 100)
    );
  },

  setDiscountRate(rate) {
    if (rate < 0 || rate > 100) {
      return false;
    }

    this.discountRate = rate;
    return true;
  },

  display() {
    console.log(`商品名：${this.name}`);
    console.log(`価格：${this.price}円`);
    console.log(`割引価格：${this.getDiscountedPrice()}円`);
    console.log(`在庫数：${this.quantity}`);
    console.log(`在庫総額：${this.getTotalPrice()}円`);
  }
};

product.display();

if (product.setDiscountRate(20)) {
  product.display();
}
