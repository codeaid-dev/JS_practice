const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

let mouseX = 0;
let mouseY = 0;

const draw = () => {
  // ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#000';
  for (let x=0; x<canvas.width; x++) {
    const y = canvas.height/2+Math.sin((x+mouseX)*0.01)*mouseY;
    ctx.beginPath();
    ctx.arc(x,y,0.5,0,Math.PI*2);
    ctx.fill();
  }
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();

canvas.addEventListener('mousemove', (e) => {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
});
