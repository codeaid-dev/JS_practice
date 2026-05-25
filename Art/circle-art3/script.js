const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 1;
ctx.strokeStyle = '#007700';

const repeat = 9; // 繰り返し回数
const pitch = 50; // 円の間隔
const radius = 20; // 円の半径
const pitchWidth = pitch * (repeat-1);
const margin = (canvas.width - pitchWidth) / 2; // 余白

for (let i=0; i<repeat; i++) {
  for (let j=0; j<repeat; j++) {
    const px = margin + j * pitch;
    const py = margin + i * pitch;
    ctx.beginPath();
    ctx.arc(px,py,radius,0,Math.PI*2);
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    ctx.fillStyle = `rgb(${r} ${g} ${b})`;
    ctx.fill();
  }
}
