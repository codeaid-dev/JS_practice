const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

const circle = {};
circle.x = 50;
circle.y = 50;
circle.radius = 50;
circle.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
  ctx.fillStyle = 'rgb(100 150 250)';
  ctx.fill();
}

const rect = {};
rect.x = 200;
rect.y = 200;
rect.w = 100;
rect.h = 100;
rect.hit = false;
rect.draw = function() {
  if (!this.hit) ctx.fillStyle = 'rgb(0 0 0)';
  else ctx.fillStyle = 'rgb(255 0 0 / 40%)';
  ctx.fillRect(this.x, this.y, this.w, this.h);
}
rect.collision = function(cx, cy, cr, rx, ry, rw, rh) {
  let closestX = 0;
  let closestY = 0;
  if (cx < rx) closestX = rx;
  else if (cx > rx+rw) closestX = rx+rw;
  else closestX = cx;

  if (cy < ry) closestY = ry;
  else if (cy > ry+rh) closestY = ry+rh;
  else closestY = cy;

  const dx = cx - closestX;
  const dy = cy - closestY;
  dist = Math.sqrt((dx*dx) + (dy*dy));
  if (dist < cr) this.hit = true;
  else this.hit = false;
}

canvas.addEventListener('mousemove', (event) => {
  circle.x = event.offsetX;
  circle.y = event.offsetY;
});

const loop = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  rect.collision(circle.x,
                circle.y,
                circle.radius,
                rect.x,
                rect.y,
                rect.w,
                rect.h
  );
  circle.draw();
  rect.draw();

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
