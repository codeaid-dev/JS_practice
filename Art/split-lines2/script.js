const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 2;
ctx.strokeStyle = '#007700';

for (let i=0; i<21; i++) {
  ctx.beginPath();
  ctx.moveTo(50+i*20,50);
  ctx.lineTo(50+i*20,450);
  ctx.moveTo(50,50+i*20);
  ctx.lineTo(450,50+i*20);
  ctx.closePath();
  ctx.stroke();
}
