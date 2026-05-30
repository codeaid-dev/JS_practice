const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

const ball = {
  x: canvas.width / 2,
  y: canvas.height  / 2,
  dx: 3,
  dy: 4,
  r: 18,
  color: null
};

const randomHueColor = () => {
  const h = Math.floor(Math.random()*360);
  return `hsl(${h} 90% 60%)`;
};
ball.color = randomHueColor();

const setAngle = () => {
  const speed = Math.sqrt(ball.dx**2 + ball.dy**2);
  // const speed = Math.hypot(ball.dx,ball.dy);
  const rad = Math.random() * Math.PI * 2;
  ball.dx = speed * Math.cos(rad);
  ball.dy = speed * Math.sin(rad);
};

const update = () => {
  ball.x += ball.dx;
  ball.y += ball.dy;
  if (ball.x - ball.r < 0 || ball.x + ball.r > canvas.width) {
    ball.dx *= -1;
  }
  if (ball.y - ball.r < 0 || ball.y + ball.r > canvas.height) {
    ball.dy *= -1;
  }
};

const draw = () => {
  ctx.fillStyle = 'rgb(0 0 0 / 0.08)';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
  ctx.fillStyle = ball.color;
  ctx.fill();
};

const loop = () => {
  update();
  draw();

  requestAnimationFrame(loop);
};
loop();

canvas.addEventListener('click', (event) => {
  // クリックした位置にワープ
  const rect = canvas.getBoundingClientRect();
  const cx = event.clientX - rect.left;
  const cy = event.clientY - rect.top;
  ball.x = cx;
  ball.y = cy;
  // ランダムな色と向き
  setAngle();
  ball.color = randomHueColor();
});