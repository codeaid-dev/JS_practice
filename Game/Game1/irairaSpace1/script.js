const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

const radius=15;
let x=radius,y=radius;

const update = () => {
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.fillStyle = '#00F';
  ctx.fill();
};

canvas.addEventListener('mousemove', (event) => {
  if (event.offsetX > radius && event.offsetX < canvas.width - radius &&
      event.offsetY > radius && event.offsetY < canvas.height - radius) {
    x = event.offsetX;
    y = event.offsetY;
  }
});

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
};

loop();
