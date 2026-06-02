const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;
let x = centerX;
let y = centerY;
let angle = Math.floor(Math.random()*360);
const speed = 5;
const radius = 15;

const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

const update = () => {
  x += speed * Math.cos(degToRad(angle));
  y += speed * Math.sin(degToRad(angle));
  if (x < radius || x > canvas.width-radius) {
    angle = 180-angle;
  }
  if (y < radius || y > canvas.height-radius) {
    angle *= -1;
  }
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(x,y,15,0,Math.PI*2);
  ctx.fill();
};

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
};
loop();
