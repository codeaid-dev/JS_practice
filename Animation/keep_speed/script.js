const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const ball = {
  x: canvas.width / 2,
  y: canvas.height  / 2,
  dx: 3,
  dy: 4,
  radius: 20,
  hue: 0,
  saturation: 0
};

const xpos = [];
const ypos = [];
for (let i=0; i<50; i++) {
  xpos.push(ball.x);
  ypos.push(ball.y);
}

const setAngle = (ball) => {
  const speed =
    Math.sqrt(ball.dx**2 + ball.dy**2);
  const rad = Math.random() * Math.PI * 2;
  ball.dx = speed * Math.cos(rad);
  ball.dy = speed * Math.sin(rad);
}

const update = () => {
  xpos[xpos.length-1] += ball.dx;
  ypos[ypos.length-1] += ball.dy;
  for (let i=0; i<49; i++) {
    xpos[i] = xpos[i+1];
    ypos[i] = ypos[i+1];
  }
  if (xpos[xpos.length-1] > canvas.width-ball.radius
     || xpos[xpos.length-1] < ball.radius) {
    ball.dx *= -1;
  }
  if (ypos[ypos.length-1] > canvas.height-ball.radius
     || ypos[ypos.length-1] < ball.radius) {
    ball.dy *= -1;
  }
}

const draw  = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i=0; i<50; i++) {
    ctx.beginPath();
    ctx.arc(xpos[i], ypos[i], i/2, 0, Math.PI*2);
    ctx.fillStyle = `hsl(${ball.hue} ${ball.saturation}% ${100-i}%)`;
    ctx.fill();
  }
}

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
}
loop();

canvas.addEventListener('click', (e) => {
  // クリックした位置にワープ
  const rect = canvas.getBoundingClientRect();
  const cx = e.clientX - rect.left;
  const cy = e.clientY - rect.top;
  for (let i=0; i<xpos.length; i++) {
    xpos[i] = cx;
    ypos[i] = cy;
  }
  // ランダムな色と向き
  setAngle(ball);
  ball.hue = Math.floor(Math.random()*360);
  ball.saturation = Math.floor(Math.random()*100);
});
