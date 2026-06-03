const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

const centerX = canvas.width/2;
const centerY = canvas.height/2;

ctx.fillStyle = '#000';
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.translate(centerX,centerY);
ctx.rotate(Math.PI/4);
ctx.translate(-centerX,-centerY);
const draw = () => {
  ctx.fillStyle = '#fff';
  ctx.fillRect(centerX-25,centerY-25,50,50);
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
