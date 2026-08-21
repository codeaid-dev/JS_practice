const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

const random = (min,max) => {
  return Math.random() * (max - min) + min;
};

class Snow {
  constructor() {
    this.x = random(0,canvas.width);
    this.y = random(-canvas.height,canvas.height);
    this.speed = random(1,3);
    this.radius = random(1,3);

    this.angle = random(0,Math.PI*2);
    this.swing1 = random(0.01,0.03);
    this.swing2 = random(0.5,2);
  }
 
  update() {
    this.y += this.speed;
    this.angle += this.swing1;
    this.x += Math.sin(this.angle) * this.swing2;
    if (this.y > canvas.height) {
      this.y = random(-50,0);
      this.x = random(0,canvas.width);
    }
    if (this.x < 0) {
      this.x = canvas.width;
    } else if (this.x > canvas.width) {
      this.x = 0;
    }
  }
 
  draw() {
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    ctx.fill();
  }
}

const snows = [];
for (let i=0; i<200; i++) {
  snows.push(new Snow());
}

const loop = () => {
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  for (const snow of snows) {
    snow.update();
    snow.draw();
  }
  requestAnimationFrame(loop);
};
loop();
