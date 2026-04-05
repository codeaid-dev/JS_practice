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
e2.angle = 45*Math.PI/180;

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

const isInEllipse = (e,x,y) => {
  // 楕円中心基準の点座標
  const dx = x - e.cx;
  const dy = y - e.cy;
  // 逆回転
  const ca = Math.cos(-e.angle);
  const sa = Math.sin(-e.angle);
  // 逆回転後の楕円中心基準の点座標
  const nx = dx * ca - dy * sa;
  const ny = dx * sa + dy * ca;

  const val = (nx*nx)/(e.rw*e.rw) + (ny*ny)/(e.rh*e.rh);
  return val <= 1;
}

const collision = (e1, e2) => {
  // e1 -> e2をチェック
  for (let i=0; i<360; i+=5) {
    const rad = i * (Math.PI / 180);
    const [x, y] = getPoint(e1, rad);
    if (isInEllipse(e2, x, y)) {
      return true;
    }
  }

  // e2 -> e1もチェック
  for (let i=0; i<360; i+=5) {
    const rad = i * (Math.PI / 180);
    const [x, y] = getPoint(e2, rad);
    if (isInEllipse(e1, x, y)) {
      return true;
    }
  }
  return false;
}

const draw = () => {
  ctx.beginPath();
  ctx.ellipse(e1.cx, e1.cy, e1.rw, e1.rh, e1.angle, 0, Math.PI*2);
  ctx.fillStyle = 'rgb(0 255 0)';
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(e2.cx, e2.cy, e2.rw, e2.rh, e2.angle, 0, Math.PI*2);
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
