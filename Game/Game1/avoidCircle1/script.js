const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 800;

let x=250,y=400;
let speed=3;
const radius=25;
const keys = {};
let start = false;
ctx.font = '50px sans-serif';
ctx.textAlign = 'center';
ctx.fillStyle = '#00F';
ctx.fillText('<<Space to start>>',
  canvas.width/2,canvas.height/2
);

const update = () => {
  if(keys['ArrowRight']) x += speed;
  if(keys['ArrowLeft']) x -= speed;
  if(keys['ArrowUp']) y -= speed;
  if(keys['ArrowDown']) y += speed;
  if (x < radius)
    x += speed;
  if (x > canvas.width-radius)
    x -= speed;
  if (y < radius)
    y += speed;
  if (y > canvas.height-radius)
    y -= speed;
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
