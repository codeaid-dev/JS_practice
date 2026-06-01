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
let radian = 0;

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

ctx.font = '20px sans-serif';
const showDegrees = () => {
  const deg = Math.ceil(radToDeg(radian));
  const text1 = `${deg} degrees`;
  const text2 = `${radian.toFixed(2)} radians`;
  ctx.strokeStyle = '#000';
  ctx.beginPath();
  ctx.fillText(text1,centerX-60,centerY+50);
  ctx.fillText(text2,centerX-60,centerY+75);
};

const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

const radToDeg = (rad) => {
  return rad / (Math.PI / 180);
};

const update = () => {
  const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
  x = centerX+200*Math.cos(angle);
  y = centerY+200*Math.sin(angle);
  radian = (angle+2*Math.PI)%(2*Math.PI);
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
  ctx.beginPath();
  ctx.arc(centerX,centerY,25,0,radian);
  ctx.stroke();
  showDegrees();
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
