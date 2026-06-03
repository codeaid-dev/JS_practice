const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

const centerX = canvas.width/2;
const centerY = canvas.height/2;

let angle = 0;
const draw = () => {
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.save();
  ctx.translate(centerX,centerY);
  ctx.rotate(angle*Math.PI/180);
  ctx.translate(-centerX,-centerY);
  ctx.fillStyle = '#fff';
  ctx.fillRect(centerX-25,centerY-25,50,50);
  ctx.restore();
};

const loop = () => {
  angle += 1;
  draw();
  requestAnimationFrame(loop);
};
loop();
