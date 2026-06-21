const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
let enX = 0;
let enY = 0;
let push = false;
const ens = [];
canvas.addEventListener('mousedown', (e) => {
  if (!push) {
    const en = [];
    en.push(e.offsetX);
    en.push(e.offsetY);
    en.push(0);
    ens.push(en);
    push = true;
  }
});

canvas.addEventListener('mouseup', (e) => {
  push = false;
});

canvas.addEventListener('mousemove', (e) => {
  if (push) {
    const en = ens[ens.length-1];
    const radius = Math.sqrt((en[0]-e.offsetX)**2 + (en[1]-e.offsetY)**2);
    en[2] = radius;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (const en of ens) {
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(en[0],en[1],en[2],0,Math.PI*2);
      ctx.fill();
    }
  }
});
