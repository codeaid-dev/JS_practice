const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;

const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

const drawDial = () => {
  for (let i=0; i<60; i++) {
    const rad = degToRad(i*6);
    let dia = 0;
    if (i%5==0) {
      ctx.fillStyle = '#f00';
      dia = 10;
    } else {
      ctx.fillStyle = 'rgb(100 100 100)';
      dia = 5;
    }
    const x = centerX+200*Math.cos(rad);
    const y = centerY+200*Math.sin(rad);
    ctx.beginPath();
    ctx.arc(x,y,dia,0,Math.PI*2);
    ctx.fill();
  }
};

const draw = () => {
  const date = new Date();
  const s = date.getSeconds();
  const m = date.getMinutes();
  const h = date.getHours() % 12;
  const hangle = h*30-90;
  const mangle = m*6-90;
  const sangle = s*6-90;
  ctx.clearRect(0,0,canvas.width,canvas.height);

  drawDial();

  ctx.lineWidth = 5;
  const hx = centerX+150*Math.cos(degToRad(hangle));
  const hy = centerY+150*Math.sin(degToRad(hangle));
  ctx.strokeStyle = '#000';
  ctx.beginPath();
  ctx.moveTo(centerX,centerY);
  ctx.lineTo(hx,hy);
  ctx.stroke();

  ctx.lineWidth = 3;
  const mx = centerX+200*Math.cos(degToRad(mangle));
  const my = centerY+200*Math.sin(degToRad(mangle));
  ctx.strokeStyle = '#000';
  ctx.beginPath();
  ctx.moveTo(centerX,centerY);
  ctx.lineTo(mx,my);
  ctx.stroke();

  ctx.lineWidth = 2;
  const sx = centerX+200*Math.cos(degToRad(sangle));
  const sy = centerY+200*Math.sin(degToRad(sangle));
  ctx.strokeStyle = '#000';
  ctx.beginPath();
  ctx.moveTo(centerX,centerY);
  ctx.lineTo(sx,sy);
  ctx.stroke();
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
