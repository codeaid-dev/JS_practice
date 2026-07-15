const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let x=300,y=200;
let dx=0,dy=0;
const radius=15;
const keys = {};
let start = false;
ctx.font = '50px sans-serif';
ctx.textAlign = 'center';
ctx.fillStyle = '#00F';
ctx.fillText('<<Space to start>>',
  canvas.width/2,canvas.height/2
);

class Ball {
  constructor(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = '#000';
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    ctx.fill();
  }
}
const balls = [];
for (let i=0; i<5; i++) {
  const r = Math.random()*(canvas.height/4-10)+10;
  const x = Math.random()*canvas.width+canvas.width;
  const y = canvas.height-r;
  const b = new Ball(x,y,r);
  balls.push(b);
}

const update = () => {
  if(keys['ArrowRight']) dx += 0.1;
  if(keys['ArrowLeft']) dx -= 0.1;
  if(keys['ArrowUp'] && dy === 0) dy = -12;
  if(keys['ArrowDown']) dy += 2;
  dx *= 0.98;
  x += dx;
  y += dy;
  if (y > canvas.height-radius) {
    dy = 0;
    y = canvas.height-radius;
  } else {
    dy += 0.3;
  }
  balls.forEach((ball) => {
    ball.x -= 3;
    if (ball.x < ball.radius)
      ball.x = Math.random()*canvas.width+canvas.width;
  });
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.fillStyle = '#00F';
  ctx.fill();
  balls.forEach((ball) => {
    ball.draw();
  });
};

document.addEventListener('keydown', (event) =>{
  if (start) {
    keys[event.key] = true;
  } else if (event.key == ' ') {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    start = true;
  }
});

document.addEventListener('keyup', (event) =>{
  if (start) {
    keys[event.key] = false;
  }
});

const loop = () => {
  if (start) {
    update();
    draw();
  }
  requestAnimationFrame(loop);
};

loop();
