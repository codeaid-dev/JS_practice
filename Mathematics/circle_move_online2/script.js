const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const x1=100,y1=100;
const x2=400,y2=400;
let circleX=x1,circleY=y1;
let status = true;
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
  let dx,dy;
  if (status) {
    dx = x2 - circleX;
    dy = y2 - circleY;
    if (Math.sqrt(dx**2+dy**2) < 1)
      status = false;
  } else {
    dx = x1 - circleX;
    dy = y1 - circleY;
    if (Math.sqrt(dx**2+dy**2) < 1)
      status = true;
  }
  const angle = Math.atan2(dy,dx);
  circleX += Math.cos(angle)*2;
  circleY += Math.sin(angle)*2;
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
