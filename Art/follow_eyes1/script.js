const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;
let mouseX=0,mouseY=0;

class Eye {
  constructor(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.inRadius = radius/2;
    this.color = '#fff';
    this.inColor = '#000';
  }
}
const eyes = [];
const createEye = () => {
  for (let i=0; i<50; i++) {
    const radius = Math.random()*31+5;
    const x = Math.random()*(canvas.width-radius*2)+radius;
    const y = Math.random()*(canvas.height-radius*2)+radius;
    eyes.push(new Eye(x,y,radius));
  }
};
createEye();

const followEye = (eye) => {
  ctx.fillStyle = eye.color;
  ctx.beginPath();
  ctx.arc(eye.x,eye.y,eye.radius,0,Math.PI*2);
  ctx.fill();
  const angle = Math.atan2(mouseY-eye.y,mouseX-eye.x);
  const move = eye.radius-eye.inRadius;
  ctx.fillStyle = eye.inColor;
  ctx.beginPath();
  ctx.arc(eye.x+Math.cos(angle)*move,
          eye.y+Math.sin(angle)*move,
          eye.inRadius,0,Math.PI*2);
  ctx.fill();
};

const draw = () => {
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  for (let eye of eyes) {
    followEye(eye);
  }
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();

canvas.addEventListener('mousemove', (e) => {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
});
