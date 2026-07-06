const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

const en = {
  x:canvas.width/2,
  y:canvas.height/2,
  radius:20,
  color:'black'
};
const keys = {};

const loop = () => {
  if(keys['ArrowRight']) {
    en.x += 10;
    if (en.x+en.radius > canvas.width) en.x -= 10;
  }
  if(keys['ArrowLeft']) {
    en.x -= 10;
    if (en.x-en.radius < 0) en.x += 10;
  }
  if(keys['ArrowDown']) {
    en.y += 10;
    if (en.y+en.radius > canvas.height) en.y -= 10;
  }
  if(keys['ArrowUp']) {
    en.y -= 10;
    if (en.y-en.radius < 0) en.y += 10;
  }

  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(en.x,en.y,en.radius,0,Math.PI*2);
  ctx.fill();

  requestAnimationFrame(loop);
};

document.addEventListener('keydown', e => {
  keys[e.key] = true;
});

document.addEventListener('keyup', e => {
  keys[e.key] = false;
});

loop();
