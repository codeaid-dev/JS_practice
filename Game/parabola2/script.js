const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let x=50,y=canvas.height-25;
let dx=0,dy=0;
let speed=10;
let gravity=0.1;
const radius=25;
let flying=false;
let angle=60;

const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

document.addEventListener('keydown', (event) =>{
  if (event.key == ' ' && !flying) {
    dx = speed*Math.cos(degToRad(angle));
    dy = -speed*Math.sin(degToRad(angle));
    flying=true;
  }
  if (event.key == 'ArrowRight') {
    speed += 1;
    if (speed > 15)
      speed = 15;
  }
  if (event.key == 'ArrowLeft') {
    speed -= 1;
    if (speed < 1)
      speed = 1;
  }
  if (event.key == 'ArrowUp') {
    angle += 1;
    if (angle > 90)
      angle = 90;
  }
  if (event.key == 'ArrowDown') {
    angle -= 1;
    if (angle < 0)
      angle = 0;
  }
});

const update = () => {
  x += dx;
  y += dy;
  dy += gravity;
  if (y>=canvas.height-radius) {
    dx *= 0.98;
    y = canvas.height-radius;
    if (Math.abs(dy) < 1.5) {
      dy = 0;
      flying=false;
      if (Math.abs(dx) < 0.1) {
        dx = 0;
      }
    } else {
      dy *= -0.8;
    }
  }
  if (x<=25 || x>=canvas.width-radius) {
    dx *= -1;
  }
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.font = '40px sans-serif';
  ctx.fillText(`angle: ${angle}, speed: ${speed}`,50,50);
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.fillStyle = 'black';
  ctx.fill();
};

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
};

loop();
