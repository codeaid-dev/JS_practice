const products = {
  'ST001': '商品A',
  'ST002': '商品B',
  'ST003': '商品C'
}
const details = {
  'ST001': '最近では20代に人気となっている',
  'ST002': '比較的に安価で入手可能',
  'ST003': '毎日のように利用されている'
}
const listView = document.getElementById('listView');
for (let item in products) {
  const btn = document.createElement('button');
  btn.dataset.id = item;
  btn.textContent = products[item];
  btn.style.marginLeft = '5px';
  listView.appendChild(btn);
}
const detailView = document.getElementById('detailView');
const detail = document.getElementById('detail');
const back = document.getElementById('back');

listView.addEventListener('click', (event) => {
  if (!event.target.dataset.id) return;
  const id = event.target.dataset.id;
  detail.innerHTML = `選択ID: ${id}<br>`;
  detail.innerHTML += details[id];
  listView.style.display = 'none';
  detailView.style.display = 'block';
});

back.addEventListener('click', () => {
  detailView.style.display = 'none';
  listView.style.display = 'block';
});
