const canvas = document.getElementById("sketch");
const ctx = canvas.getContext("2d");

// 2つのボール
let ballFrame = { x: 50, y: 100, r: 20, color: "red" };   // Δt未使用（フレームごと）
let ballDelta = { x: 50, y: 200, r: 20, color: "cyan" }; // Δt使用（時間ベース）

// フレームごとに移動する量（px/frame）
const stepPerFrame = 2;

// 速度（px/s）
const speedPerSec = 120;

let lastTime = performance.now();

function loop(now) {
  // 経過時間（秒）
  const dt = (now - lastTime) / 1000;
  lastTime = now;

  // --- Δtを無視した移動（環境依存） ---
  ballFrame.x += stepPerFrame;
  if (ballFrame.x - ballFrame.r > canvas.width) {
    ballFrame.x = -ballFrame.r;
  }

  // --- Δtを使った移動（環境非依存） ---
  ballDelta.x += speedPerSec * dt;
  if (ballDelta.x - ballDelta.r > canvas.width) {
    ballDelta.x = -ballDelta.r;
  }

  // 描画
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 赤（フレーム依存）
  ctx.beginPath();
  ctx.arc(ballFrame.x, ballFrame.y, ballFrame.r, 0, Math.PI * 2);
  ctx.fillStyle = ballFrame.color;
  ctx.fill();
  ctx.fillStyle = "white";
  ctx.fillText("フレーム依存 (赤)", 20, 40);

  // 青（Δt使用）
  ctx.beginPath();
  ctx.arc(ballDelta.x, ballDelta.y, ballDelta.r, 0, Math.PI * 2);
  ctx.fillStyle = ballDelta.color;
  ctx.fill();
  ctx.fillStyle = "white";
  ctx.fillText("Δt使用 (青)", 20, 240);

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
