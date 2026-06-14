const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

class Circle {
  angle;distance;diameter;speed;
}

const ens = [];
for (let i=0; i<500; i++) {
  const en = new Circle();
  en.angle = Math.random()*360;
  en.distance = 0;
  en.diameter = Math.random()*15+5;
  en.speed = Math.random()*4+1;
  ens.push(en);
}

const draw = () => {
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  for (const en of ens) {
    const x = canvas.width/2 + en.distance*Math.cos(en.angle*Math.PI/180);
    const y = canvas.height/2 + en.distance*Math.sin(en.angle*Math.PI/180);
    ctx.fillStyle = 'rgb(255 255 255 / 0.5)';
    ctx.beginPath();
    ctx.arc(x,y,en.diameter/2,0,Math.PI*2);
    ctx.fill();
    if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
      en.angle = Math.random()*360;
      en.distance = 0;
      en.diameter = Math.random()*15+5;
      en.speed = Math.random()*4+1;
    } else {
      en.distance += en.speed;
    }
  }
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
