const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 720;
canvas.height = 200;

const draw = () => {
  for (let i=0; i<360; i++) {
    ctx.strokeStyle = `hsl(${i} 100% 50%)`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(i*2,0);
    ctx.lineTo(i*2,canvas.height);
    ctx.stroke();
  }
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
