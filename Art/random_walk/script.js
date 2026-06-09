const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

let x=canvas.width/2,y=canvas.height/2;

ctx.fillStyle = '#000';
ctx.fillRect(0,0,canvas.width,canvas.height);
const draw = () => {
  let nextX = x+Math.floor(Math.random()*11-5);
  let nextY = y+Math.floor(Math.random()*11-5);
  if (nextX<0) {
    nextX=0;
  } else if (nextX>canvas.width) {
    nextX=canvas.width;
  }
  if (nextY<0) {
    nextY=0;
  } else if (nextY>canvas.height) {
    nextY=canvas.height;
  }
  ctx.strokeStyle = 'rgb(0 255 0 / 0.1)';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(nextX,nextY);
  ctx.stroke();
  x = nextX;
  y = nextY;
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
