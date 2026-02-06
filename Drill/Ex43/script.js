const data = [
  { eto: '巳', year: 2025 },
  { eto: '午', year: 2026 },
  { eto: '未', year: 2027 },
  { eto: '申', year: 2028 },
  { eto: '酉', year: 2029 }
];

function render() {
  const sort = document.getElementById('sort').value;
  const filter = document.getElementById('filter').checked;
  const list = document.getElementById('list');

  let result = [...data]; // 配列をコピー

  if (filter) {
    result = result.filter(d => d.year >= 2027);
  }

  result.sort((a, b) =>
    sort === 'asc' ? a.year - b.year : b.year - a.year
  );

  list.innerHTML = ''; // リスト項目を全て削除
  result.forEach(d => {
    const li = document.createElement('li');
    li.textContent = `${d.eto}: ${d.year}`;
    list.appendChild(li);
  });
}

document.getElementById('sort').addEventListener('change', render);
document.getElementById('filter').addEventListener('change', render);
// document.querySelectorAll('#sort, #filter')
//   .forEach(element => element.addEventListener('change', render));

render();
