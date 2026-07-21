const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

class Circle {
  constructor(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fillStyle = 'rgb(255 255 255)';
    ctx.fill();
  }
}
const player = new Circle(canvas.width,canvas.height,10);

const loop = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  player.draw();

  requestAnimationFrame(loop);
};

canvas.addEventListener('mousemove', (event) => {
  player.x = event.offsetX;
  player.y = event.offsetY;
});

ctx.fillStyle = '#000';
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.font = '50px sans-serif';
ctx.textAlign = 'center';
ctx.fillStyle = '#FFF';
ctx.fillText('<<Click to start>>',
  canvas.width/2,canvas.height/2
);
let started = false;
document.addEventListener('click', () => {
  if (!started) {
    started = true;
    requestAnimationFrame(loop);
  }
}, { once: true });
