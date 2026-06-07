const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const x1=100,y1=100;
const x2=400,y2=400;
let circleX=x1,circleY=y1;
const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#000';
  ctx.strokeStyle = '#000';
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(circleX,circleY,30,0,Math.PI*2);
  ctx.fill();
  const dx = x2 - circleX;
  const dy = y2 - circleY;
  const angle = Math.atan2(dy,dx);
  circleX += Math.cos(angle)*2;
  circleY += Math.sin(angle)*2;
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
