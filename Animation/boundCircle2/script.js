const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const ball = {
  x: canvas.width / 2,
  y: 40,
  radius: 20,
  speedx: 3,
  speedy: 0
};
const gravity = 0.1;
const bounce = 0.7;

const update = () => {
  ball.x += ball.speedx;
  ball.y += ball.speedy;
  ball.speedy += gravity;
  if (ball.y > canvas.height-ball.radius) {
    ball.speedy *= -bounce;
    ball.y = canvas.height-ball.radius;
    if (Math.abs(ball.speedy) < 1) {
      ball.speedy = 0;
    }
    ball.speedx *= 0.9;
  }
  if (ball.x < ball.radius ||
      ball.x > canvas.width-ball.radius) {
    if (ball.x < ball.radius) {
      ball.x = ball.radius;
    }
    if (ball.x > canvas.width-ball.radius) {
      ball.x = canvas.width-ball.radius;
    }
    ball.speedx *= -bounce;
    if (Math.abs(ball.speedx) < 1) {
      ball.speedx = 0;
    }
  }
}

const draw  = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
  const g = ctx.createRadialGradient(ball.x - ball.radius*0.3,
                          ball.y - ball.radius*0.3,
                          ball.radius*0.1,
                          ball.x, ball.y, ball.radius);
  g.addColorStop(0, 'white');
  g.addColorStop(0.3, 'gray');
  g.addColorStop(1, 'black');
  ctx.fillStyle = g;
  ctx.fill();
}

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
}
loop();

canvas.addEventListener('click', () => {
  ball.speedy = -7;
  ball.speedx = 3;
});
