const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const ball = {
  x: canvas.width / 2,
  y: 40,
  radius: 20,
  speed: 0
};
const gravity = 0.1;

const update = () => {
  ball.y += ball.speed;
  ball.speed += gravity;
  if (ball.y > canvas.height-ball.radius) {
    ball.speed *= -0.98;
    ball.y = canvas.height-ball.radius;
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
  // ctx.fillStyle = '#000';
  ctx.fill();
}

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
}
loop();
