const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;
let mouseX=0,mouseY=0;

const followEye = (x,y) => {
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(x,y,50,0,Math.PI*2);
  ctx.fill();
  const angle = Math.atan2(mouseY-y,mouseX-x);
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(x+Math.cos(angle)*20,
          y+Math.sin(angle)*20,
          25,0,Math.PI*2);
  ctx.fill();
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'rgb(70 120 200)';
  ctx.beginPath();
  ctx.arc(centerX,centerY,centerX,0,Math.PI*2);
  ctx.fill();
  const leftX = centerX-100;
  const leftY = centerY;
  const rightX = centerX+100;
  const rightY = centerY;
  followEye(leftX,leftY);
  followEye(rightX,rightY);
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
