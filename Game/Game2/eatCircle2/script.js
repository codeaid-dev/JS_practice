const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

class Circle {
  constructor(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.enemy = false;
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    if (this.enemy) {
      ctx.fillStyle = `rgb(${this.r} ${this.g} ${this.b})`;
    } else {
      ctx.fillStyle = 'rgb(255 255 255)';
    }
    ctx.fill();
  }
}
const player = new Circle(canvas.width,canvas.height,10);
const enemy = [];
const create_enemy = () => {
  const e = new Circle(0,
    Math.random()*canvas.height,
    Math.random()*player.radius*1.5+player.radius*0.5
  );
  if (Math.floor(Math.random()*2) === 0) {
    e.dx = Math.floor(Math.random()*-3);
  } else {
    e.dx = Math.floor(Math.random()*3+1);
  }
  if (e.dx<0) e.x = canvas.width;
  e.r = Math.random()*256;
  e.g = Math.random()*256;
  e.b = Math.random()*256;
  e.enemy = true;
  enemy.push(e);
};
const delete_enemy = () => {
  [...enemy].forEach((e,index) => {
    if (e.x-e.radius >= canvas.width ||
      e.x+e.radius <= 0) {
      enemy.splice(index,1);
    }
  });
};
const update_enemy = () => {
  for (const e of enemy) {
    e.x += e.dx;
  }
};

let frameCount = 0;
const loop = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  update_enemy();
  delete_enemy();
  if (frameCount % 30 === 0)
    create_enemy();
  for (const e of enemy) {
    e.draw();
  }
  player.draw();
  frameCount += 1;
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
