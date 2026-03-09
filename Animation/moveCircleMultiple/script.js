const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

const radius = 20;
const circles = [];
const createCircle = () => {
  const circle = {}
  const max = canvas.width - radius;
  const min = radius;
  circle.x = Math.random() * (max - min) + min;
  circle.y = Math.random() * (max - min) + min;
  circle.dx = Math.random() * 3 + 1;
  circle.dy = Math.random() * 4 + 1;
  circle.radius = radius;
  circles.push(circle);
}

const loop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let circle of circles) {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
    ctx.fillStyle = '#000';
    ctx.fill();
    circle.x += circle.dx;
    circle.y += circle.dy;
    if (circle.x > canvas.width-circle.radius || circle.x < circle.radius) {
      circle.dx *= -1;
    }
    if (circle.y > canvas.height-circle.radius || circle.y < circle.radius) {
      circle.dy *= -1;
    }
  }
  requestAnimationFrame(loop);
}

for (let i=0; i<5; i++) {
  createCircle();
}
loop();
