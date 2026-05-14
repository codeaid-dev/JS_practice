const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

class Ellipse {}

const e1 = new Ellipse();
const e2 = new Ellipse();

e1.cx = 0;
e1.cy = 0;
e1.rw = 100;
e1.rh = 50;
e1.angle = 45*Math.PI/180;
e2.cx = 250;
e2.cy = 250;
e2.rw = 50;
e2.rh = 100;

canvas.addEventListener('mousemove', (event) => {
  e1.cx = event.offsetX;
  e1.cy = event.offsetY;
});

const getPoint = (e, rad) => {
  // 楕円（回転前）
  const x = e.rw * Math.cos(rad)
  const y = e.rh * Math.sin(rad)
  // 回転
  const xr = x * Math.cos(e.angle) - y * Math.sin(e.angle)
  const yr = x * Math.sin(e.angle) + y * Math.cos(e.angle)
  // 平行移動
  return [e.cx + xr, e.cy + yr];
}

const collision = (e1, e2) => {
  let hit = false;
  for (let i=0; i<360; i+=5) {
    const rad = i * (Math.PI / 180);
    // e1の境界点
    const [ex, ey] = getPoint(e1, rad);
    // e2中心での距離
    const dx = ex - e2.cx;
    const dy = ey - e2.cy;
    // e2の中に入っているかチェック
    if ((dx*dx)/(e2.rw*e2.rw) + (dy*dy)/(e2.rh*e2.rh) <= 1) {
      hit = true;
      break;
    }
  }
  return hit;
}

const draw = () => {
  ctx.beginPath();
  ctx.ellipse(e1.cx, e1.cy, e1.rw, e1.rh, e1.angle, 0, Math.PI*2);
  ctx.fillStyle = 'rgb(0 255 0)';
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(e2.cx, e2.cy, e2.rw, e2.rh, 0, 0, Math.PI*2);
  if (collision(e1, e2)) ctx.fillStyle = 'rgb(255 0 0 / 60%)';
  else ctx.fillStyle = 'rgb(0 0 0)';
  ctx.fill();
}

const loop = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  draw();

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
