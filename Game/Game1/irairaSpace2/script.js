const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

const radius=15;
let x=67,y=radius;

class Circle {
  constructor(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = '#F00';
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    ctx.fill();
  }
}
const walls = [];
for (let i=0; i<54; i++) {
  const c = new Circle(
    i%9*66+34, Math.floor(i/9)*66+34, radius);
  walls.push(c);
}

const update = () => {
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.fillStyle = '#00F';
  ctx.fill();
  walls.forEach((c) => {
    c.draw();
  });
};

canvas.addEventListener('mousemove', (event) => {
  if (event.offsetX > radius && event.offsetX < canvas.width - radius &&
      event.offsetY > radius && event.offsetY < canvas.height - radius) {
    x = event.offsetX;
    y = event.offsetY;
  }
});

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
};

loop();
