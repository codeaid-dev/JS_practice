const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 800;

class Ball {
  constructor() {
    this.x = 250;
    this.y = 250;
    this.radius = 5;
    this.speed = 5;
    this.angle = Math.random() * 90 + 45;
  }
  update() {
    const radian = this.angle * (Math.PI / 180);
    this.x += this.speed*Math.cos(radian);
    this.y += this.speed*Math.sin(radian);
    if (this.x < this.radius || this.x > canvas.width-this.radius) {
      this.angle = 180-this.angle;
    }
    if (this.y < this.radius || this.y > canvas.height-this.radius) {
      this.angle *= -1;
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fillStyle = 'rgb(255 255 255)';
    ctx.fill();
  }
  collision(brick) {
    let closestX = 0;
    let closestY = 0;
    if (this.x < brick.x) closestX = brick.x;
    else if (this.x > brick.x+brick.w) closestX = brick.x+brick.w;
    else closestX = this.x;
    if (this.y < brick.y) closestY = brick.y;
    else if (this.y > brick.y+brick.h) closestY = brick.y+brick.h;
    else closestY = this.y;
    const distX = this.x-closestX;
    const distY = this.y-closestY;
    const dist = Math.sqrt(distX**2 + distY**2);
    return dist < this.radius;
  }
  isBottom() {
    return this.y+this.radius > canvas.height;
  }
}

class Brick {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = '#FFF';
  }
  draw() {
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}

const ball = new Ball();
const player = new Brick(275, 770, 50, 20);

canvas.addEventListener('mousemove', (event) => {
  player.x = event.offsetX-25;
});

const loop = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ball.update();
  if (ball.collision(player)) {
    // 変換後の最小値+(変換後の範囲)*((指定した数値-変換前の最小値)/(変換前の範囲))
    const hitPos = (ball.x-player.x)/player.w;
    ball.angle = 180 + 180 * hitPos;
    // ボールをバーの上の高さにする
    ball.y = player.y - ball.radius;
  }
  ball.draw();
  player.draw();

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
