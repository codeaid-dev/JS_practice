const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let x = 0;
let y = 0;

const daen = {};
daen.cx = 250;
daen.cy = 250;
daen.rw = 100;
daen.rh = 200;
daen.hit = false;
daen.angle = 45*Math.PI/180;
daen.draw = function() {
  ctx.beginPath();
  ctx.ellipse(this.cx, this.cy, this.rw, this.rh, this.angle, 0, Math.PI*2);
  if (this.hit) ctx.fillStyle = 'rgb(255 0 0)';
  else ctx.fillStyle = 'rgb(0 0 0)';
  ctx.fill();
}
daen.collision = function(x,y) {
  // 楕円中心基準の点座標
  const dx = x - this.cx;
  const dy = y - this.cy;
  // 逆回転
  const ca = Math.cos(-this.angle);
  const sa = Math.sin(-this.angle);
  // 逆回転後の楕円中心基準の点座標
  const nx = dx * ca - dy * sa;
  const ny = dx * sa + dy * ca;

  return (nx*nx)/(this.rw*this.rw) + (ny*ny)/(this.rh*this.rh) <= 1;
}

canvas.addEventListener('mousemove', (event) => {
  x = event.offsetX;
  y = event.offsetY;
});

const loop = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  if (daen.collision(x,y)) daen.hit = true;
  else daen.hit = false;
  daen.draw();

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
