const panel = document.getElementById('panel');
const message = document.getElementById('message');
const SIZE = 10;
const MINE_COUNT = 15;
const cells = [];
let gameOver = false;
let openCount = 0;

// 盤面を作る
for (let y = 0; y < SIZE; y++) {
  for (let x = 0; x < SIZE; x++) {
    const cell = {
      x: x,
      y: y,
      mine: false,
      open: false,
      flag: false,
      count: 0,
      element: null
    };
    const div = document.createElement('div');
    div.classList.add('cell');
    // 座標を保存
    div.dataset.x = x;
    div.dataset.y = y;
    cell.element = div;
    cells.push(cell);
    panel.appendChild(div);
  }
}

// 爆弾を配置(重複しない)
let mineCount = 0;
while (mineCount < MINE_COUNT) {
  const index = Math.floor(Math.random() * cells.length);
  const cell = cells[index];
  // すでに爆弾があればやり直す
  if (cell.mine) continue;
  cell.mine = true;
  mineCount++;
}

// テスト
for (let cell of cells) {
  if (cell.mine) {
    cell.element.style.backgroundColor = 'red';
  }
}
