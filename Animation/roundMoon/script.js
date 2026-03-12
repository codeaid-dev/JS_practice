const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

const centerX = 250;
const centerY = 250;
const distance = 200;
const radius = 20;
const moon = new Image();
moon.src = '../img/moon.png';
const earth = new Image();
earth.src = '../img/earth.png';

let angle = 0;
const loop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(earth, canvas.width/2-100, canvas.height/2-100, 200, 200);

  // 度数の1度はMath.PI/180ラジアンとなる
  angle = (angle + 1) % 360;
  const radian = angle * (Math.PI / 180);
  const x = centerX + distance * Math.cos(radian);
  const y = centerY + distance * Math.sin(radian);
  ctx.save();
  ctx.translate(x,y);
  ctx.rotate(radian);
  // ctx.drawImage(moon, x-radius, y-radius, radius*2, radius*2);
  ctx.drawImage(moon, -radius, -radius, radius*2, radius*2);
  ctx.restore();

  requestAnimationFrame(loop);
}

loop();
