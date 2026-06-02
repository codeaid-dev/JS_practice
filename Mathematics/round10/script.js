const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;
let radiusW = 100;
let radiusH = 200;

const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for (let i=0; i<360; i+=10) {
    const rad = degToRad(i);
    const x = centerX + radiusW * Math.cos(rad);
    const y = centerY + radiusH * Math.sin(rad);
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(x,y,2.5,0,Math.PI*2);
    ctx.fill();
  }
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
