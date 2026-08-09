const category = document.querySelector('#category');
const productList = document.querySelector('#productList');

// 商品データ
let products = [];

// 選択したカテゴリ
const state = {
  category: 'all'
};

// 商品を表示
const render = () => {
  productList.innerHTML = '<tr><th>商品名</th><th>価格</th></tr>';
  // 対象のカテゴリを抽出
  const result = products.filter(product => {
    if (state.category === 'all') {
      return true;
    }
    return product.category
        === state.category;
  });
  result.forEach(product => {
    const tr = document.createElement('tr');
    const name = document.createElement('td');
    const price = document.createElement('td');
    name.textContent = `${product.name}`;
    price.textContent = `${product.price}円`;
    tr.append(name);
    tr.append(price);
    productList.append(tr);
  });
};

// カテゴリを選択
category.addEventListener('click', (event) => {
  const btn =
    event.target.closest('[data-category]');
  if (!btn) return;
  state.category = btn.dataset.category;
  render();
});

// JSONを取得
async function loadProducts() {
  const response = await fetch('products.json');
  products = await response.json();
  render();
}

// JSON読み込み開始
loadProducts();
