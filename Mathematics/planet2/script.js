const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;
let x = 0;
let y = 0;
let angle = 0;
let radiusW = 200;
let radiusH = 50;

const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

const update = () => {
  angle += 0.5;
  x = centerX + radiusW * Math.cos(degToRad(angle));
  y = centerY + radiusH * Math.sin(degToRad(angle));
};

const draw = () => {
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'rgb(255 200 0)';
  ctx.beginPath();
  ctx.arc(centerX,centerY,100,0,Math.PI);
  ctx.fill();
  ctx.fillStyle = 'rgb(0 200 200)';
  ctx.beginPath();
  ctx.arc(x,y,10,0,Math.PI*2);
  ctx.fill();
  ctx.fillStyle = 'rgb(255 200 0)';
  ctx.beginPath();
  ctx.arc(centerX,centerY,100,Math.PI,Math.PI*2);
  ctx.fill();
};

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
};
loop();
