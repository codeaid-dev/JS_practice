const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let x = 250;
let y = 250;
let dx = 3;
let dy = 4;
const radius = 20;

canvas.addEventListener('mousemove', (event) => {
  // const rect = event.target.getBoundingClientRect();
  // const mouseX = event.clientX - rect.left;
  // const mouseY = event.clientY - rect.top;

  // if (mouseX > radius && mouseX < canvas.width - radius &&
  //     mouseY > radius && mouseY < canvas.height - radius) {
  //   x = mouseX;
  //   y = mouseY;
  // }

  if (event.offsetX > radius && event.offsetX < canvas.width - radius &&
      event.offsetY > radius && event.offsetY < canvas.height - radius) {
    x = event.offsetX;
    y = event.offsetY;
  }
});

const loop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI*2);
  ctx.fillStyle = '#000';
  ctx.fill();

  requestAnimationFrame(loop);
}

loop();
