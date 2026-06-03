const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;

const polygon = (x, y, radius, points) => {
  ctx.fillStyle = '#f00';
  ctx.beginPath();
  for (let i=0; i<points; i++) {
    const px = x + radius * Math.cos(i*Math.PI*2/points);
    const py = y + radius * Math.sin(i*Math.PI*2/points);
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

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  polygon(centerX,centerY,100,5);
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
