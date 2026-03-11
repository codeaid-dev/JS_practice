const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let x = 250;
let y = 250;
let dx = 3;
let dy = 4;
const radius = 20;
const moon = new Image();
moon.src = '../img/moon.png';

const loop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(moon, x-radius, y-radius, radius*2, radius*2);

  x += dx;
  y += dy;
  if (x > canvas.width-radius || x < radius) {
    dx *= -1;
  }
  if (y > canvas.height-radius || y < radius) {
    dy *= -1;
  }

  requestAnimationFrame(loop);
}

loop();
