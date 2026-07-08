const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let x=250,y=25;
let speed=0;
let gravity=0.1;
const radius=25;

const update = () => {
  y += speed;
  speed += gravity;
  if (y>=canvas.height-radius) {
    speed *= -0.98;
    y = canvas.height-radius;
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
