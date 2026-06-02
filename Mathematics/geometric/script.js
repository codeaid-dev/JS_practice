const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let angle = 0;
let radius = canvas.width/4;

const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

const update = () => {
  angle += 0.1;
  x = centerX + radius * Math.cos(degToRad(angle));
  y = centerY + radius * Math.sin(degToRad(angle));
  mx = x + radius * Math.cos(degToRad(angle)*36);
  my = y + radius * Math.sin(degToRad(angle)*36);
};

ctx.fillStyle = '#000';
ctx.fillRect(0,0,canvas.width,canvas.height);
const draw = () => {
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(x,y,2.5,0,Math.PI*2);
  ctx.fill();
  ctx.fillStyle = '#f00';
  ctx.beginPath();
  ctx.arc(mx,my,2.5,0,Math.PI*2);
  ctx.fill();
};

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
};
loop();
