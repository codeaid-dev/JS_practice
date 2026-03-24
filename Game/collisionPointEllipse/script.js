const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let x = 0;
let y = 0;

const daen = {};
daen.cx = 250;
daen.cy = 250;
daen.rx = 100;
daen.ry = 200;
daen.hit = false;
daen.draw = function() {
  ctx.beginPath();
  ctx.ellipse(this.cx, this.cy, this.rx, this.ry, 0, 0, Math.PI*2);
  if (this.hit) ctx.fillStyle = 'rgb(255 0 0)';
  else ctx.fillStyle = 'rgb(0 0 0)';
  ctx.fill();
}
daen.collision = function(x,y) {
  const dx = x - this.cx;
  const dy = y - this.cy;
  return (dx*dx)/(this.rx*this.rx) + (dy*dy)/(this.ry*this.ry) <= 1;
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
