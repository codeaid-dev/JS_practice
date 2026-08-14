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

// 周囲の爆弾数を調べる(隣接する爆弾数を数える)
for (const cell of cells) {
  // 爆弾以外のcellを調べる
  if (cell.mine) continue;
  let count = 0;
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      // 自分自身は除外
      if (dx === 0 && dy === 0) {
        continue;
      }
      const x = cell.x + dx;
      const y = cell.y + dy;
      // 盤面の外
      if (x < 0 || x >= SIZE ||
          y < 0 || y >= SIZE) {
        continue;
      }
      const neighbor = cells[y*SIZE+x];
      if (neighbor.mine) {
        count++;
      }
    }
  }
  cell.count = count;
}

// テスト
for (let cell of cells) {
  if (cell.mine) {
    cell.element.style.backgroundColor = 'red';
  }
  // 周囲の爆弾数を表示
  if (cell.count > 0) {
    cell.element.textContent = cell.count;
  }
}
