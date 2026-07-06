const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

const en = {
  x:canvas.width/2,
  y:canvas.height/2,
  radius:20,
  color:'black'
};

const render = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(en.x,en.y,en.radius,0,Math.PI*2);
  ctx.fill();
};

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    en.x += 10;
    if (en.x+en.radius > canvas.width) en.x -= 10;
  }
  if (e.key === 'ArrowLeft') {
    en.x -= 10;
    if (en.x-en.radius < 0) en.x += 10;
  }
  if (e.key === 'ArrowDown') {
    en.y += 10;
    if (en.y+en.radius > canvas.height) en.y -= 10;
  }
  if (e.key === 'ArrowUp') {
    en.y -= 10;
    if (en.y-en.radius < 0) en.y += 10;
  }
  render();
});

render();
