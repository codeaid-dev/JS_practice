const productList = document.querySelector('#productList');
const cartList = document.querySelector('#cartList');
const total = document.querySelector('#total');

// 商品データ
let products = [];
// カート
let cart = [];

// 商品を表示
const render = () => {
  productList.innerHTML = '<tr><th>商品名</th><th>価格</th></tr>';
  // 元データをコピー
  const result = [...products];
  result.forEach(product => {
    const btn = document.createElement('button');
    btn.textContent = 'カートへ';
    btn.dataset.id = product.id;
    const tr = document.createElement('tr');
    const name = document.createElement('td');
    const price = document.createElement('td');
    const cartBtn = document.createElement('td');
    name.textContent = `${product.name}`;
    price.textContent = `${product.price}円`;
    cartBtn.appendChild(btn);
    tr.append(name);
    tr.append(price);
    tr.append(cartBtn);
    productList.append(tr);
  });
};

// カートの表示
const renderCart = () => {
  cartList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} ${item.price}円 × ${item.quantity}`;
    const btn = document.createElement('button');
    btn.textContent = '削除';
    btn.dataset.remove = item.id;
    li.append(btn);
    cartList.append(li);
  });
  // 合計金額
  const sum = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  total.textContent = `合計 ${sum}円`;
};

// 「カートへ」をクリック
productList.addEventListener('click', (event) => {
  const btn = event.target.closest('button[data-id]');
  if (!btn) return;
  const id = Number(btn.dataset.id);
  const product = products.find(product => product.id === id);
  // すでにカートに存在するか
  const item = cart.find(item => item.id === id);
  if (item) item.quantity++;
  else {
    // 新しく追加
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }
  renderCart();
});

// カートの「削除」をクリック
cartList.addEventListener('click', (event) => {
  const btn = event.target.closest('button[data-remove]');
  if (!btn) return;
  const id = Number(btn.dataset.remove);
  cart = cart.filter(item => item.id !== id);
  renderCart();
});

// JSONを取得
async function loadProducts() {
  const response = await fetch('products.json');
  products = await response.json();
  render();
}

// JSON読み込み開始
loadProducts();
