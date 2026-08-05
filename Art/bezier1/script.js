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
