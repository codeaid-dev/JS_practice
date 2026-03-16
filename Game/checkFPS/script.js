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
let fps = 0;

const update = (delta) => {
  x += dx * delta;
  y += dy * delta;
  if (x < radius || x > canvas.width-radius) {
    dx *= -1;
  }

  if (y < radius || y > canvas.height-radius) {
    dy *= -1;
  }
}

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI*2);
  ctx.fillStyle = '#000';
  ctx.fill();
  ctx.font = "20px sans-serif";
  ctx.fillText("FPS: " + fps.toFixed(1),20,30);
}

const loop = (time) => {
  const delta = (time - last)/1000;
  last = time;
  fps = delta > 0 ? 1/delta : 0;
  update(delta);
  draw();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
