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
  let p=5;
  for (let y=0; y<3; y++) {
    for (let x=0; x<3; x++) {
      polygon(100+x*150,100+y*150,50,p);
      p+=1;
    }
  }
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
