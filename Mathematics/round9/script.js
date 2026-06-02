const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;
let x = 0;
let y = 0;
let angle = 0;
let radius = 0;

const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

const update = () => {
  radius += 2;
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'rgb(255 200 0)';
  ctx.beginPath();
  ctx.arc(centerX,centerY,15,0,Math.PI*2);
  ctx.fill();
  for (let i=0; i<360; i+=10) {
    x = centerX + radius * Math.cos(degToRad(i));
    y = centerY + radius * Math.sin(degToRad(i));
    ctx.fillStyle = 'rgb(0 200 200)';
    ctx.beginPath();
    ctx.arc(x,y,2.5,0,Math.PI*2);
    ctx.fill();
  }
};

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
};
loop();
