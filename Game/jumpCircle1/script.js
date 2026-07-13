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
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.fillStyle = '#00F';
  ctx.fill();
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
