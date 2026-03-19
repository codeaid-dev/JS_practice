const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let x = 250;
let y = 250;
let dx = 150;
let dy = 190;
const radius = 20;

let last = performance.now();
let accumulator = 0;
const FPS = 60;
const step = 1/FPS;
let ufps = 0;
let count = 0;
let timer = 0;

const update = (step) => {
  x += dx * step;
  y += dy * step;
  if (x < radius || x > canvas.width-radius) {
    dx *= -1;
  }

  if (y < radius || y > canvas.height-radius) {
    dy *= -1;
  }

  count++;
  timer += step;
  if (timer >= 1) {
    ufps = count;
    count = 0;
    timer = 0;
  }
}

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI*2);
  ctx.fillStyle = '#000';
  ctx.fill();

  ctx.font = "20px sans-serif";
  ctx.fillText("FPS: " + ufps.toFixed(1),20,30);
}

const loop = (time) => {
  const delta = (time - last)/1000;
  last = time;
  accumulator += delta;
  while (accumulator >= step) {
    update(step);
    accumulator -= step;
  }
  draw();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
