const canvas = document.getElementById('panel');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
// 1マスの大きさ
const SIZE = 30;
// ----------------------------
// Snakeクラス
// ----------------------------
class Snake {
  constructor() {
    // ヘビの体
    this.body = [
      { x: 10, y: 10 },
      { x: 9,  y: 10 },
      { x: 8,  y: 10 }
    ];
    // 最初は右方向
    this.dx = 1;
    this.dy = 0;
  }

  // ヘビを移動させる
  move(grow = false) {
    const head = this.body[0];
    const newHead = {
      x: head.x + this.dx,
      y: head.y + this.dy
    };
    // 先頭に新しい頭を追加
    this.body.unshift(newHead);
    // growがfalseなら尻尾を削除
    if (!grow) {
      this.body.pop();
    }
  }

  // 方向を変更
  setDirection(dx, dy) {
    // 逆方向には進めない
    if (this.dx === -dx && this.dy === -dy) {
      return;
    }
    this.dx = dx;
    this.dy = dy;
  }

  // 頭を取得
  getHead() {
    return this.body[0];
  }

  // 自分の体に衝突したか
  hitSelf() {
    const head = this.getHead();
    for (let i = 1; i < this.body.length; i++) {
      if (
        head.x === this.body[i].x &&
        head.y === this.body[i].y
      ) {
        return true;
      }
    }
    return false;
  }

  draw() {
    ctx.fillStyle = "lime";
    for (const part of this.body) {
      ctx.fillRect(
        part.x * SIZE,
        part.y * SIZE,
        SIZE - 1,
        SIZE - 1
      );
    }
  }
}

// ----------------------------
// Foodクラス
// ----------------------------
class Food {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.reset();
  }

  // 食べ物をランダムな場所に配置
  reset() {
    const columns = canvas.width / SIZE;
    const rows = canvas.height / SIZE;
    this.x = Math.floor(Math.random() * columns);
    this.y = Math.floor(Math.random() * rows);
  }

  // 描画
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(
      this.x * SIZE,
      this.y * SIZE,
      SIZE - 1,
      SIZE - 1
    );
  }
}

// ----------------------------
// ゲーム本体
// ----------------------------
const snake = new Snake();
const food = new Food();
let gameStarted = false;
let gameOver = false;
// キーボード操作
document.addEventListener("keydown", (event) => {
  // スペースキー
  if (event.code === "Space") {
    // ゲーム開始
    if (!gameStarted && !gameOver) {
      gameStarted = true;
    }
    return;
  }
  // ゲーム開始前・ゲームオーバー後は
  // 矢印キーを無効にする
  if (!gameStarted || gameOver) {
    return;
  }  
  switch (event.key) {
    case "ArrowUp":
      snake.setDirection(0, -1);
      break;
    case "ArrowDown":
      snake.setDirection(0, 1);
      break;
    case "ArrowLeft":
      snake.setDirection(-1, 0);
      break;
    case "ArrowRight":
      snake.setDirection(1, 0);
      break;
  }
});

// 壁との衝突判定
function hitWall() {
  const head = snake.getHead();
  const maxX = canvas.width / SIZE;
  const maxY = canvas.height / SIZE;
  return (
    head.x < 0 ||
    head.x >= maxX ||
    head.y < 0 ||
    head.y >= maxY
  );
}

// 食べ物を食べたか
function eatFood() {
  const head = snake.getHead();
  return (
    head.x === food.x &&
    head.y === food.y
  );
}

// ----------------------------
// ゲームループ
// ----------------------------
function update() {
  if (!gameStarted || gameOver) {
    return;
  }

  // ヘビの移動
  snake.move();
  // 壁に衝突
  if (hitWall()) {
    gameOver = true;
    return;
  }

  // 自分自身に衝突
  if (snake.hitSelf()) {
    gameOver = true;
    return;
  }

  // 食べ物を食べた場合
  if (eatFood()) {
    // 直前のmove()で尻尾が削除されているので、
    // もう一度尻尾を追加して1マス伸ばす
    const tail = snake.body[snake.body.length - 1];
    snake.body.push({
      x: tail.x,
      y: tail.y
    });
    food.reset();
  }
}

function draw() {
  // 背景
  ctx.fillStyle = "#222";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  snake.draw();
  food.draw();

  // 開始前
  if (!gameStarted) {
    ctx.fillStyle = "white";
    ctx.font = "36px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(
      "PRESS SPACE TO START",
      canvas.width / 2,
      canvas.height / 2
    );
  }
  // ゲームオーバー表示
  if (gameOver) {
    ctx.fillStyle = "white";
    ctx.font = "48px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(
      "GAME OVER",
      canvas.width / 2,
      canvas.height / 2
    );
  }
}

// 100msごとにゲームを更新(setInterval)
// setInterval(() => {
//   update();
//   draw();
// }, 100);

let lastMoveTime = 0;
const moveInterval = 100; // 100msごとに1マス移動
function loop(currentTime) {
  // 前回移動してから100ms経過したか
  if (currentTime - lastMoveTime >= moveInterval) {
    update();
    lastMoveTime = currentTime;
  }
  draw();
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
