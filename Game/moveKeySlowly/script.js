const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const keys = {};
let circleX = 300;
let circleY = 300;
const radius = 50;
let dx = 0;
let dy = 0;

document.addEventListener('keydown', (event) =>{
  keys[event.key] = true;
});

document.addEventListener('keyup', (event) =>{
  keys[event.key] = false;
});

const update = () => {
  if(keys['ArrowRight']) dx += 1;
  if(keys['ArrowLeft']) dx -= 1;
  if(keys['ArrowUp']) dy -= 1;
  if(keys['ArrowDown']) dy += 1;
  dx *= 0.98;
  dy *= 0.98;
  circleX += dx;
  circleY += dy;

  if (circleX<radius)
    circleX=radius;
  if (circleX>canvas.width-radius)
    circleX=canvas.width-radius;
  if (circleY<radius)
    circleY=radius;
  if (circleY>canvas.height-radius)
    circleY=canvas.height-radius;
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(circleX, circleY, radius, 0, Math.PI*2);
  ctx.fillStyle = 'black';
  ctx.fill();
};

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
};

loop();
