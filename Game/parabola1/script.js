const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let x=50,y=25;
let dx=3,dy=0;
let gravity=0.1;
const radius=25;

const update = () => {
  x += dx;
  y += dy;
  dy += gravity;
  if (y>=canvas.height-radius) {
    dx *= 0.98;
    y = canvas.height-radius;
    if (Math.abs(dy) < 1.5) {
      dy = 0;
      if (Math.abs(dx) < 0.1) {
        dx = 0;
      }
    } else {
      dy *= -0.8;
    }
  }
  if (x<=25 || x>=canvas.width-radius) {
    dx *= -1;
  }
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.fillStyle = 'black';
  ctx.fill();
};

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
};

loop();
