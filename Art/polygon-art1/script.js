const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 1;
ctx.strokeStyle = '#007700';

const repeat = 9; // 繰り返し回数
const pitch = 50; // マスの間隔
const pitchWidth = pitch * (repeat-1);
const margin = (canvas.width - pitchWidth) / 2; // 余白

const drawPolygon = (centerX, centerY, size) => {
  const pos1 = Math.floor(Math.random()*size)+1;
  const pos2 = Math.floor(Math.random()*size)+1;
  const pos3 = Math.floor(Math.random()*size)+1;
  const pos4 = Math.floor(Math.random()*size)+1;

  ctx.beginPath();
  ctx.moveTo(centerX - pos1, centerY - pos1);
  ctx.lineTo(centerX + pos2, centerY - pos2);
  ctx.lineTo(centerX + pos3, centerY + pos3);
  ctx.lineTo(centerX - pos4, centerY + pos4);
  ctx.closePath();
};

for (let i=0; i<repeat; i++) {
  for (let j=0; j<repeat; j++) {
    const px = margin + j * pitch;
    const py = margin + i * pitch;
    ctx.fillStyle = 'rgb(200 30 30 / 0.5)';
    drawPolygon(px, py, pitch);
    ctx.fill();
  }
}
