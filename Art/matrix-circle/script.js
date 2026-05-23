const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 2;
ctx.strokeStyle = '#007700';

for (let i=0; i<9; i++) {
  for (let j=0; j<9; j++) {
    ctx.beginPath();
    ctx.arc(50+j*50,50+i*50,20,0,Math.PI*2);
    ctx.stroke();
  }
}
