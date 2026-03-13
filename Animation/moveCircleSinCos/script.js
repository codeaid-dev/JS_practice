const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let centerX = 250;
let centerY = 250;
const distance = 5;
const radius = 20;
let angle = Math.trunc(Math.random()*360);
// 度数の1度はMath.PI/180ラジアンとなる
let radian = angle * (Math.PI / 180);
const loop = () => {
  const x = centerX + distance * Math.cos(radian);
  const y = centerY + distance * Math.sin(radian);
  centerX = x;
  centerY = y;

  if (x > canvas.width-radius || x < radius) {
    radian = Math.PI - radian;
  }
  if (y > canvas.height-radius || y < radius) {
    radian *= -1;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI*2);
  ctx.fillStyle = '#000';
  ctx.fill();

  requestAnimationFrame(loop);
}

loop();
