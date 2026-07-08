const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let x=canvas.width/2,y=canvas.height/2;
let dx=3,dy=2;
const radius=25;

const update = () => {
  x += dx;
  y += dy;
  if (x<radius || x>canvas.width-radius)
    dx *= -1;
  if (y<radius || y>canvas.height-radius)
    dy *= -1;
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.fillStyle = 'green';
  ctx.fill();
};

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
};

loop();
