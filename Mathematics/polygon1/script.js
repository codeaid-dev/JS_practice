const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;

const polygon = (x, y, radius, points) => {
  for (let i=0; i<points; i++) {
    const px = x + radius * Math.cos(i*Math.PI*2/points);
    const py = y + radius * Math.sin(i*Math.PI*2/points);
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(px,py,5,0,Math.PI*2);
    ctx.fill();
  } 
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  polygon(centerX,centerY,100,5);
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
