const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;
let mouseX = 0;
let mouseY = 0;
let x = 0;
let y = 0;

const drawGuide = () => {
  ctx.strokeStyle = '#C8C8C8';
  ctx.beginPath();
  ctx.arc(centerX,centerY,200,0,Math.PI*2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(centerX,centerY-200);
  ctx.lineTo(centerX,centerY+200);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(centerX-200,centerY);
  ctx.lineTo(centerX+200,centerY);
  ctx.stroke();
};

const update = () => {
  const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
  x = centerX+200*Math.cos(angle);
  y = centerY+200*Math.sin(angle);
};

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGuide();
  ctx.strokeStyle = '#000';
  ctx.beginPath();
  ctx.moveTo(centerX,centerY);
  ctx.lineTo(x,y);
  ctx.stroke();
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

canvas.addEventListener('mousemove', (event) => {
  mouseX = event.offsetX;
  mouseY = event.offsetY;
});
