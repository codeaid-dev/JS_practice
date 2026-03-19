const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let last = performance.now();

const target = {};
target.x = 250;
target.y = 250;
target.radius = 50;
target.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
  ctx.fillStyle = '#000';
  ctx.fill();
}

const circles = [];
const createCircle = () => {
  const circle = {};
  circle.centerX = 50;
  circle.centerY = 50;
  circle.radius = 10;
  circle.speed = 300;
  circle.stop = false;
  circle.angle = Math.trunc(Math.random()*360);
  // 度数の1度はMath.PI/180ラジアンとなる
  circle.radian = circle.angle * (Math.PI / 180);

  circle.update = function(delta) {
    if (!this.stop) {
      const x = this.centerX + this.speed * Math.cos(this.radian) * delta;
      const y = this.centerY + this.speed * Math.sin(this.radian) * delta;
      this.centerX = x;
      this.centerY = y;
      if (x < this.radius || x > canvas.width-this.radius) {
        this.radian = Math.PI - this.radian;
      }

      if (y < this.radius || y > canvas.height-this.radius) {
        this.radian *= -1;
      }
    }
  }

  circle.draw = function() {
    ctx.beginPath();
    ctx.arc(this.centerX, this.centerY, this.radius, 0, Math.PI*2);
    if (this.stop) ctx.fillStyle = '#808080';
    else ctx.fillStyle = '#0f0';
    ctx.fill();
  }

  circle.collision = function(target) {
    const dist = Math.sqrt((this.centerX - target.x)**2 + (this.centerY - target.y)**2);
    if (dist < (this.radius + target.radius)) {
      this.stop = true;
    }
  }

  circles.push(circle);
}

const loop = (time) => {
  const delta = (time - last)/1000;
  last = time;

  ctx.clearRect(0,0,canvas.width,canvas.height);

  for (let circle of circles) {
    circle.update(delta);
    circle.collision(target);
    circle.draw();
  }
  target.draw();
  requestAnimationFrame(loop);
}

for (let i=0; i<10; i++) {
  createCircle();
}
requestAnimationFrame(loop);
