const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;

class Point {
  constructor(x,y,radius=5) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dragging = false;
    this.offsetX = 0;
    this.offsetY = 0;
  }
}

const start = new Point(50, 450);
const cp1 = new Point(250, 50);
const end = new Point(450, 450);
const points = [start,cp1,end];

let t = 0;
const speed = 0.005;
const curve = [];

const lerp = (a, b, t) => a + (b - a) * t;

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle = 'rgb(255 180 0)';
  ctx.fillStyle = 'rgb(255 255 255)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i=1; i<points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();

  for (const p of points) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
    ctx.stroke();
    ctx.fill();
  }

  ctx.strokeStyle = 'rgb(0 0 0)';
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.bezierCurveTo(cp1.x, cp1.y, cp1.x, cp1.y, end.x, end.y);
  ctx.stroke();

  // 制御点start,cp1,endの補間
  const ax = lerp(start.x, cp1.x, t);
  const ay = lerp(start.y, cp1.y, t);
  const bx = lerp(cp1.x, end.x, t);
  const by = lerp(cp1.y, end.y, t);
  const cx = lerp(ax, bx, t);
  const cy = lerp(ay, by, t);

  // 補間線
  ctx.strokeStyle = 'rgb(128 128 128)';
  ctx.beginPath();
  ctx.moveTo(ax, ay);
  ctx.lineTo(bx, by);
  ctx.stroke();
  // 補間点
  ctx.fillStyle = 'rgb(255 0 0)';
  ctx.beginPath();
  ctx.arc(ax, ay, 5, 0, Math.PI*2);
  ctx.fill();
  ctx.fillStyle = 'rgb(0 0 255)';
  ctx.beginPath();
  ctx.arc(bx, by, 5, 0, Math.PI*2);
  ctx.fill();
  ctx.fillStyle = 'rgb(0 255 0)';
  ctx.beginPath();
  ctx.arc(cx, cy, 5, 0, Math.PI*2);
  ctx.fill();
  ctx.font = '12px sans-serif';
  ctx.fillStyle = 'rgb(0 0 0)';
  ctx.textAlign = 'center';
  ctx.fillText(t.toFixed(2), cx, cy-10);

  // ベジェ曲線
  curve.push(new Point(cx,cy));
  ctx.strokeStyle = 'rgb(0 255 0)';
  ctx.beginPath();
  ctx.moveTo(curve[0].x, curve[0].y);
  for (let i=1; i<curve.length; i++) {
    ctx.lineTo(curve[i].x, curve[i].y);
  }
  ctx.stroke();

  t += speed;
  if (t > 1) {
    t = 0;
    curve.length = 0;
  }
};

// マウスを押した
canvas.addEventListener("mousedown",e=>{
  for (const p of points) {
    p.dragging = false;
  }
  for (let i=points.length-1; i>=0; i--) {
    const p = points[i];
    const dx = e.offsetX - p.x;
    const dy = e.offsetY - p.y;
    if(Math.sqrt(dx*dx+dy*dy)<=p.radius){
      p.dragging = true;
      // 円の中心とのずれを保存
      p.offsetX = e.offsetX - p.x;
      p.offsetY = e.offsetY - p.y;
      break;
    }
  }
});

// ドラッグ
canvas.addEventListener("mousemove",e=>{
  for (const p of points) {
    if(!p.dragging) continue;
    p.x = e.offsetX - p.offsetX;
    p.y = e.offsetY - p.offsetY;
  }
});

// マウスを離した
canvas.addEventListener("mouseup",()=>{
  for (const p of points) {
    p.dragging = false;
  }
});

// Canvas外で離した場合
canvas.addEventListener("mouseleave",()=>{
  for (const p of points) {
    p.dragging = false;
  }
});

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
