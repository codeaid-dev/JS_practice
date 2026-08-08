const asc = document.querySelector("#asc");
const desc = document.querySelector("#desc");
const productList = document.querySelector("#productList");

// 商品データ
let products = [];

// ソート種類
let sortType = "asc";

// 商品を表示
const render = () => {
  productList.innerHTML = '<tr><th>商品名</th><th>価格</th></tr>';
  // 元データをコピー
  const result = [...products];
  if (sortType === "asc") {
    result.sort((a, b) => {
      return a.price - b.price;
    });
  }
  else {
    result.sort((a, b) => {
      return b.price - a.price;
    });
  }
  result.forEach(product => {
    const tr = document.createElement("tr");
    const name = document.createElement("td");
    const price = document.createElement("td");
    name.textContent = `${product.name}`;
    price.textContent = `${product.price}円`;
    tr.append(name);
    tr.append(price);
    productList.append(tr);
  });
};

// 安い順
asc.addEventListener("click", () => {
  sortType = "asc";
  render();
});

// 高い順
desc.addEventListener("click", () => {
  sortType = "desc";
  render();
});

// JSONを取得
async function loadProducts() {
  const response = await fetch("products.json");
  products = await response.json();
  render();
}

// JSON読み込み開始
loadProducts();
