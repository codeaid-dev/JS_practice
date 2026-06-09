const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;

const draw = () => {
  for (let i=0; i<360; i++) {
    ctx.strokeStyle = `hsl(${i} 100% 50%)`;
    ctx.lineWidth = 3;
    const x = centerX+200*Math.cos(i*Math.PI/180);
    const y = centerY+200*Math.sin(i*Math.PI/180);
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.lineTo(x,y);
    ctx.stroke();
  }
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
