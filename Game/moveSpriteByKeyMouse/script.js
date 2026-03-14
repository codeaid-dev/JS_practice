const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let circleX = 250;
let circleY = 250;
const radius = 20;
let moving = false;

const keys = {};
let rectX = 200;
let rectY = 350;
const rectSpeed = 10;

canvas.addEventListener('mousemove', (event) => {
  if (moving) {
    if (event.offsetX > radius && event.offsetX < canvas.width - radius &&
        event.offsetY > radius && event.offsetY < canvas.height - radius) {
      circleX = event.offsetX;
      circleY = event.offsetY;
    }
  }
});
canvas.addEventListener('mousedown', (event) => {
  const dist = Math.sqrt((circleX-event.offsetX)**2 + (circleY-event.offsetY)**2);
  if (dist < radius) {
    moving = !moving;
  }
});

window.addEventListener("keydown", (event) =>{
    keys[event.key] = true;
});

window.addEventListener("keyup", (event) =>{
    keys[event.key] = false;
});

const loop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(circleX, circleY, radius, 0, Math.PI*2);
  ctx.fillStyle = 'green';
  ctx.fill();

  if(keys["ArrowRight"]) rectX += rectSpeed;
  if(keys["ArrowLeft"]) rectX -= rectSpeed;
  if(keys["ArrowUp"]) rectY -= rectSpeed;
  if(keys["ArrowDown"]) rectY += rectSpeed;
  ctx.fillStyle = 'blue';
  ctx.fillRect(rectX, rectY, 100, 50);

  requestAnimationFrame(loop);
}

loop();
