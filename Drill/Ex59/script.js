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

// 検索
search.addEventListener('input', () => {
  keyword = search.value;
  render();
});

// JSON取得
async function loadProducts() {
  try {
    const response = await fetch('products.json');
    if (!response.ok) {
      throw new Error(
        `商品情報を取得できませんでした ${response.status}`
      );
    }
    products = await response.json();
    render();
  }
  catch (error) {
    console.error(error.message);
    document.getElementById('error').textContent =
      '読み込みに失敗しました';
  }
}

// JSON読み込み開始
loadProducts();
