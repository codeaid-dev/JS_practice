const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;

let angle = 0;
const draw = () => {
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  for (let i=0; i<4; i++) {
    const x = 125+i%2*250;
    const y = 125+Math.floor(i/2)*250;
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(angle*Math.PI/180);
    ctx.translate(-x,-y);
    ctx.fillStyle = '#fff';
    ctx.fillRect(x-25,y-25,50,50);
    ctx.restore();
  }
};

const loop = () => {
  angle += 1;
  draw();
  requestAnimationFrame(loop);
};
loop();
