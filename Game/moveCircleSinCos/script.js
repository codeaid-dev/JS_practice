const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let centerX = 250;
let centerY = 250;
const radius = 20;
const speed = 300;
let angle = Math.trunc(Math.random()*360);
// 度数の1度はMath.PI/180ラジアンとなる
let radian = angle * (Math.PI / 180);

let last = performance.now();

const update = (delta) => {
  const x = centerX + speed * Math.cos(radian) * delta;
  const y = centerY + speed * Math.sin(radian) * delta;
  centerX = x;
  centerY = y;
  if (x < radius || x > canvas.width-radius) {
    radian = Math.PI - radian;
  }

  if (y < radius || y > canvas.height-radius) {
    radian *= -1;
  }
}

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI*2);
  ctx.fillStyle = '#000';
  ctx.fill();
}

const loop = (time) => {
  const delta = (time - last)/1000;
  last = time;
  fps = delta > 0 ? 1/delta : 0;
  update(delta);
  draw();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
