const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

let mouseX=0,mouseY=0;
let followX=450, followY=450;
const drawSinCos = (x,y) => {
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000';
  ctx.beginPath();
  ctx.moveTo(followX,followY);
  ctx.lineTo(x,y);
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgb(0 200 0)';
  ctx.beginPath();
  ctx.moveTo(followX,followY);
  ctx.lineTo(followX,y);
  ctx.stroke();
  ctx.fillStyle = 'rgb(0 200 0)';
  ctx.beginPath();
  ctx.arc(followX,y,2,0,Math.PI*2);
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgb(255 175 0)';
  ctx.beginPath();
  ctx.moveTo(followX,followY);
  ctx.lineTo(x,followY);
  ctx.stroke();
  ctx.fillStyle = 'rgb(255 175 0)';
  ctx.beginPath();
  ctx.arc(x,followY,2,0,Math.PI*2);
  ctx.fill();
};

const radToDeg = (rad) => {
  return rad / (Math.PI / 180);
};

const showDegrees = (angle) => {
  angle = (angle+Math.PI*2)%(Math.PI*2);
  ctx.font = '30px sans-serif';
  ctx.fillStyle = '#000';
  ctx.beginPath();
  const str1 = Math.ceil(radToDeg(angle))+' degrees';
  ctx.fillText(str1,
      150,canvas.height-100);
  const str2 = Math.floor(angle*100)/100.0+' radians';
  ctx.fillText(str2,
      150,canvas.height-50);
};

const followCircle = () => {
  const dx = mouseX - followX;
  const dy = mouseY - followY;
  const angle = Math.atan2(dy,dx);
  const distance = Math.sqrt((followX-mouseX)**2 + (followY-mouseY)**2);
  if (distance >= 1) {
    followX += Math.cos(angle)*2;
    followY += Math.sin(angle)*2;
  }
  ctx.fillStyle = '#f00';
  ctx.beginPath();
  ctx.arc(followX,followY,10,0,Math.PI*2);
  ctx.fill();
  showDegrees(angle);
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(mouseX,mouseY,5,0,Math.PI*2);
  ctx.fill();

  drawSinCos(mouseX,mouseY);
  followCircle();
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();

canvas.addEventListener('mousemove', (e) => {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
});
