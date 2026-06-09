const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

class Ripple {
  x;y;r1=0;r2=0;
}
let rips = [];

const draw = () => {
  ctx.fillStyle = 'rgb(0 0 0 / 0.1)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  for (let rip of [...rips]) {
    if (rip.r1 != 0) rip.r1 += 2;
    if (rip.r1 > 30 || rip.r2 != 0) rip.r2 += 2;
    ctx.strokeStyle = 'rgb(0 255 200)';
    ctx.beginPath();
    ctx.arc(rip.x,rip.y,rip.r1/2,0,Math.PI*2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(rip.x,rip.y,rip.r2/2,0,Math.PI*2);
    ctx.stroke();
    if (rip.r1 > 100) rip.r1 = 0;
    if (rip.r2 > 100) {
      rips = rips.filter(item => item !== rip);
    }
  }
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();

canvas.addEventListener('mousedown', (e) =>{
  const rip = new Ripple();
  rip.x = e.offsetX;
  rip.y = e.offsetY;
  rip.r1 = 1;
  rips.push(rip);
});
