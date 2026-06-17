const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;
const centerX = canvas.width/2;
const centerY = canvas.height/2;

class Circle {
  x;y;d;
}
let index = 0;
const ens = [];
for (let i=0; i<360; i++) {
  const x = centerX + 200 * Math.cos(i*Math.PI/180);
  const y = centerY + 200 * Math.sin(i*Math.PI/180);
  for (let j=0; j<4; j++) {
    const en = new Circle();
    en.d = Math.random()*3+2;
    en.x = x + (Math.random()*60-30);
    en.y = y + (Math.random()*60-30);
    ens.push(en);
  }
}
ctx.fillStyle = '#000';
ctx.fillRect(0,0,canvas.width,canvas.height);

const draw = () => {
  ctx.fillStyle = '#0f0';
  for (let i=0; i<2; i++) {
    ctx.beginPath();
    ctx.arc(ens[index].x,ens[index].y,
      ens[index].d/2,0,Math.PI*2);
    ctx.fill();
    index = (index+1)%1440;
  }
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
