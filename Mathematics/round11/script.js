const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;
let radiusW = 100;
let radiusH = 200;

const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

const angle = degToRad(45); // 楕円の傾く角度
const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for (let i=0; i<360; i+=10) {
    const rad = degToRad(i);
    // 楕円（回転前）
    const x = radiusW * Math.cos(rad);
    const y = radiusH * Math.sin(rad);
    // 回転
    const xr = x * Math.cos(angle) - y * Math.sin(angle);
    const yr = x * Math.sin(angle) + y * Math.cos(angle);
    // 並行移動
    const ex = centerX + xr;
    const ey = centerY + yr;
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(ex,ey,2.5,0,Math.PI*2);
    ctx.fill();
  }
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
