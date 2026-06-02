const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;
let x = 0;
let y = 0;
let angle = 0;
let radius = 200;

const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

const update = () => {
  angle += 1;
  x = centerX + 0 * Math.cos(degToRad(angle));
  y = centerY + radius * Math.sin(degToRad(angle));
};

const draw = () => {
  ctx.fillStyle = 'rgb(255 255 255 / 0.05)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(x,y,5,0,Math.PI*2);
  ctx.fill();
};

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
};
loop();
