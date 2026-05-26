const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 1;
ctx.strokeStyle = '#007700';

const repeat = 9; // 繰り返し回数
const pitch = 50; // 円の間隔
const radius = 30; // 円の半径
const pitchWidth = pitch * (repeat-1);
const margin = (canvas.width - pitchWidth) / 2; // 余白

for (let i=0; i<repeat; i++) {
  for (let j=0; j<repeat; j++) {
    const fluction = Math.floor(Math.random()*20)-10;
    const px = (margin+fluction) + j * pitch;
    const py = margin + i * pitch;
    ctx.fillStyle = 'rgb(150 210 250 / 0.5)';
    ctx.beginPath();
    ctx.arc(px,py,radius,0,Math.PI*2);
    ctx.fill();
  }
}

for (let i=0; i<repeat; i++) {
  for (let j=0; j<repeat; j++) {
    const fluction = Math.floor(Math.random()*20)-10;
    const px = (margin+fluction) + j * pitch;
    const py = margin + i * pitch;
    ctx.fillStyle = 'rgb(60 190 255 / 0.5)';
    ctx.beginPath();
    ctx.arc(px,py,radius-10,0,Math.PI*2);
    ctx.fill();
  }
}
