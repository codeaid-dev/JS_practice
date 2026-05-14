const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

// 高DPR対応
function fitCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener('resize', fitCanvas);
fitCanvas();

// UI
const speedInput = document.getElementById('speed');
const jitterInput = document.getElementById('jitter');
const modeSelect = document.getElementById('mode');

// 円オブジェクト
const ball = {
  x: canvas.width / (window.devicePixelRatio||1) / 2,
  y: canvas.height / (window.devicePixelRatio||1) / 2,
  vx: 1, // 初期ベクトルは単位ベクトルに後でスケール
  vy: 0,
  r: 18,
  color: null
};

// 0〜360の色相をランダム
function randomHueColor() {
  const h = Math.floor(Math.random()*360);
  return `hsl(${h} 90% 60%)`;
}
ball.color = randomHueColor();

// 速度を保つためにベクトルを正規化
function normalize(vx, vy) {
  const len = Math.hypot(vx, vy);
  if (len === 0) return [1,0];
  return [vx/len, vy/len];
}
[ball.vx, ball.vy] = normalize(ball.vx, ball.vy);

let last = performance.now();

function update(dtSec) {
  // dtSec: 秒での経過
  const speed = Number(speedInput.value); // px/s
  // jitter: 方向をどれくらい乱すか（角度のラジアン幅）
  const jitter = Number(jitterInput.value); // 0..80 (we'll map to radians)

  // 現在の速度ベクトルに少しランダムな回転を加えて滑らかに方向転換
  // jitter の大きさで回転角度分布の幅を決める
  const maxAngle = (jitter / 100) * Math.PI; // jitter 100 -> π rad
  // small random angle in [-maxAngle, +maxAngle]
  const angle = (Math.random() * 2 - 1) * maxAngle * dtSec * 10; 
  // 回転行列を適用
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);
  let nvx = ball.vx * cosA - ball.vy * sinA;
  let nvy = ball.vx * sinA + ball.vy * cosA;
  [nvx, nvy] = normalize(nvx, nvy);
  ball.vx = nvx;
  ball.vy = nvy;

  // 位置更新
  ball.x += ball.vx * speed * dtSec;
  ball.y += ball.vy * speed * dtSec;

  const w = canvas.width / (window.devicePixelRatio||1);
  const h = canvas.height / (window.devicePixelRatio||1);

  // 境界処理
  const mode = modeSelect.value;
  if (mode === 'bounce') {
    // 円が壁を突き抜けないようにラッピング（跳ね返る）
    if (ball.x - ball.r < 0) {
      ball.x = ball.r;
      ball.vx = Math.abs(ball.vx); // x方向を反転（正に）
    } else if (ball.x + ball.r > w) {
      ball.x = w - ball.r;
      ball.vx = -Math.abs(ball.vx);
    }
    if (ball.y - ball.r < 0) {
      ball.y = ball.r;
      ball.vy = Math.abs(ball.vy);
    } else if (ball.y + ball.r > h) {
      ball.y = h - ball.r;
      ball.vy = -Math.abs(ball.vy);
    }
  } else if (mode === 'wrap') {
    // 端をすり抜けて反対側から出てくる（ワープ）
    if (ball.x + ball.r < 0) ball.x = w + ball.r;
    if (ball.x - ball.r > w) ball.x = -ball.r;
    if (ball.y + ball.r < 0) ball.y = h + ball.r;
    if (ball.y - ball.r > h) ball.y = -ball.r;
  }
}

function draw() {
  const w = canvas.width / (window.devicePixelRatio||1);
  const h = canvas.height / (window.devicePixelRatio||1);

  // 背景を少しだけ透過で塗ってトレイルを残す風にする（完全クリアなら opaque fill）
  ctx.fillStyle = 'rgba(0,0,0,0.18)';
  ctx.fillRect(0,0,w,h);

  // 円を描く
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
  // グラデーション
  const g = ctx.createRadialGradient(ball.x - ball.r*0.3, ball.y - ball.r*0.3, ball.r*0.1, ball.x, ball.y, ball.r);
  g.addColorStop(0, 'white');
  g.addColorStop(0.12, ball.color);
  g.addColorStop(1, 'rgba(255,255,255,0.06)');
  ctx.fillStyle = g;
  ctx.fill();

  // 軌跡方向を示す短いライン（見た目向上）
  ctx.beginPath();
  ctx.moveTo(ball.x, ball.y);
  ctx.lineTo(ball.x - ball.vx * ball.r * 1.8, ball.y - ball.vy * ball.r * 1.8);
  ctx.strokeStyle = 'rgba(255,255,255,0.14)';
  ctx.lineWidth = 2;
  ctx.stroke();
}

function loop(now) {
  const dt = (now - last) / 1000; // 秒
  last = now;
  // cap dt to avoid very large jumps if tab was inactive
  const dtCap = Math.min(dt, 0.05);
  update(dtCap);
  draw();
  requestAnimationFrame(loop);
}

// 初期画面塗りつぶし
ctx.fillStyle = '#111';
ctx.fillRect(0,0,canvas.width,canvas.height);

// クリックで色を変える・位置を移動するデモ
canvas.addEventListener('click', (e) => {
  // クリックした位置にワープ
  const rect = canvas.getBoundingClientRect();
  const cx = e.clientX - rect.left;
  const cy = e.clientY - rect.top;
  ball.x = cx;
  ball.y = cy;
  // ランダムな向き
  const ang = Math.random() * Math.PI * 2;
  ball.vx = Math.cos(ang);
  ball.vy = Math.sin(ang);
  ball.color = randomHueColor();
});

// 最初の向きをちょっとだけランダムに
const a = Math.random()*Math.PI*2;
ball.vx = Math.cos(a);
ball.vy = Math.sin(a);

requestAnimationFrame((t)=>{ last = t; loop(t); });
