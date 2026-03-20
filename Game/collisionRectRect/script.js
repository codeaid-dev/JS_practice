const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

const rectA = {};
rectA.x = 50;
rectA.y = 50;
rectA.w = 100;
rectA.h = 100;
rectA.draw = function() {
  ctx.fillStyle = 'rgb(0 255 0)';
  ctx.fillRect(this.x, this.y, this.w, this.h);
}

const rectB = {};
rectB.x = 200;
rectB.y = 200;
rectB.w = 100;
rectB.h = 100;
rectB.hit = false;
rectB.draw = function() {
  if (!this.hit) ctx.fillStyle = 'rgb(0 0 0)';
  else ctx.fillStyle = 'rgb(255 0 0 / 40%)';
  ctx.fillRect(this.x, this.y, this.w, this.h);
}
rectB.collision = function(rect) {
  if (this.x <= rect.x+rect.w &&
    this.x+this.w >= rect.x &&
    this.y <= rect.y+rect.h &&
    this.y+this.h >= rect.y) {
      this.hit = true;
  } else {
    this.hit = false;
  }
}

canvas.addEventListener('mousemove', (event) => {
  rectA.x = event.offsetX-50;
  rectA.y = event.offsetY-50;
});

const loop = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  rectB.collision(rectA);
  rectA.draw();
  rectB.draw();

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
