const search = document.querySelector('#search');
const productList = document.querySelector('#productList');

// 商品データ
let products = [];

// 現在の検索キーワード
let keyword = '';

// 商品を表示
const render = () => {
  productList.innerHTML = '<tr><th>商品名</th><th>価格</th></tr>';
  const result = products.filter(product => {
    return product.name
      .toLowerCase()
      .includes(
        keyword.toLowerCase()
      );
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

// JSONを取得
async function loadProducts() {
  const response = await fetch('products.json');
  products = await response.json();
  render();
}

// 検索
search.addEventListener('input', () => {
  keyword = search.value;
  render();
});

// JSON読み込み開始
loadProducts();
