const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// let x = canvas.width/2;
// let y = canvas.height/2;
const radius = 20;
const xpos = [];
const ypos = [];
for (let i=0; i<50; i++) {
  xpos.push(0);
  ypos.push(0);
}

canvas.addEventListener('mousemove', (event) => {
  // x = event.offsetX;
  // y = event.offsetY;
  xpos[xpos.length-1] = event.offsetX;
  ypos[ypos.length-1] = event.offsetY;
});

const loop = () => {
  for (let i=0; i<49; i++) {
    xpos[i] = xpos[i+1];
    ypos[i] = ypos[i+1];
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i=0; i<50; i++) {
    ctx.beginPath();
    ctx.arc(xpos[i], ypos[i], i/2, 0, Math.PI*2);
    ctx.fillStyle = `rgb(${255-i*5} ${255-i*5} ${255-i*5})`;
    ctx.fill();
  }
  // ctx.beginPath();
  // ctx.arc(x, y, radius, 0, Math.PI*2);
  // ctx.fillStyle = '#000';
  // ctx.fill();

  requestAnimationFrame(loop);
}
loop();
