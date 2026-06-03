const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;
let point = 5;

const star = (x, y, radius1, radius2, n) => {
  const angle = (Math.PI*2)/(n*2);
  ctx.fillStyle = '#ff0';
  ctx.beginPath();
  for (let i=0; i<n*2; i++) {
    let radius = 0;
    if (i%2==0) radius = radius1;
    else radius = radius2;
    const px = x + radius * Math.cos(i*angle);
    const py = y + radius * Math.sin(i*angle);
    if (i == 0) {
      ctx.moveTo(px,py);
    } else {
      ctx.lineTo(px,py);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
};

ctx.translate(centerX,centerY);
ctx.rotate(-Math.PI/2);
ctx.translate(-centerX,-centerY);
const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  star(centerX,centerY,100,40,point);
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();

document.addEventListener('keydown', (e) => {
  if (e.key >= '1' && e.key <= '9') {
    point = Number(e.key);
  }
});
