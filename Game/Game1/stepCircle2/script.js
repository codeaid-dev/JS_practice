const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let x=40,y=40;
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

class Line {
  constructor(x1,y1,x2,y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  draw() {
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(this.x1,this.y1);
    ctx.lineTo(this.x2,this.y2);
    ctx.stroke();
  }
  isHit(x,y,radius) {
    return this.x1 <= x && this.x2 >= x &&
        this.y1 >= y-radius && this.y1 <= y+radius;
  }
}
const lines = [];
for (let i=0; i<6; i++) {
  const l = new Line(
    i*100+10,
    350-i*50,
    i*100+60,
    350-i*50
  );
  lines.push(l);
}

const update = () => {
  if(keys['ArrowRight']) dx += 0.1;
  if(keys['ArrowLeft']) dx -= 0.1;
  if(keys['ArrowUp'] && dy === 0) dy = -7;
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
  for (const line of lines) {
    if (line.isHit(x,y,radius) && dy > 0) {
      dy = 0;
      y = line.y1-radius;
      break;
    }
  }
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.fillStyle = '#00F';
  ctx.fill();
  lines.forEach((line) => {
    line.draw();
  });
};

document.addEventListener('keydown', (event) =>{
  if (start) {
    keys[event.key] = true;
  } else if (event.key == ' ') {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    start = true;
    stime = performance.now();
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
