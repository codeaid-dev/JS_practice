const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 800;

class Ball {
  constructor() {
    this.x = 300;
    this.y = 400;
    this.prevX = this.x;
    this.prevY = this.y;
    this.radius = 5;
    this.speed = 5;
    this.angle = Math.random() * 90 + 45;
  }
  update() {
    this.prevX = this.x;
    this.prevY = this.y;
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
    this.alive = true;
  }
  draw() {
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}

const ball = new Ball();
const player = new Brick(275, 770, 50, 20);
const sound = new Audio('../audio/button52.mp3');
const bricks = [];
for (let i=0; i<30; i++) {
  const b = new Brick(60+(i%5)*100,40+(~~(i/5))*50,
                  80,30)
  b.c = `hsl(${~~(i/5)*60} 100 50)`;
  bricks.push(b);
}

canvas.addEventListener('mousemove', (event) => {
  player.x = event.offsetX-25;
});

let ring = false;
const loop = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ball.update();
  if (ball.collision(player)) {
    if (!ring) {
      sound.currentTime = 0;
      sound.play();
      ring = true;
    }
    // 変換後の最小値+(変換後の範囲)*((指定した数値-変換前の最小値)/(変換前の範囲))
    const hitPos = (ball.x-player.x)/player.w;
    ball.angle = 210 + 120 * hitPos;
    // ボールをバーの上の高さにする
    ball.y = player.y - ball.radius;
  } else {
    ring = false;
  }
  if (ball.isBottom()) {
    ctx.font = '50px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = '#F00';
    ctx.fillText('GAME OVER',
      canvas.width/2,canvas.height/2
    );
    return;
  }
  let count = 0;
  for (let b of bricks) {
    if (b.alive && ball.collision(b)) {
      b.alive = false;
      const hitPos = (ball.x-b.x)/b.w;
      if (ball.prevY + ball.radius <= b.y) {
        ball.angle *= -1;
        ball.y = b.y - ball.radius;
      } else if (ball.prevY - ball.radius >= b.y + b.h) {
        ball.angle *= -1;
        ball.y = b.y + b.h + ball.radius;
      } else if (ball.prevX + ball.radius <= b.x) {
        ball.angle = 180 - ball.angle;
        ball.x = b.x - ball.radius;
      } else if (ball.prevX - ball.radius >= b.x + b.w) {
        ball.angle = 180 - ball.angle;
        ball.x = b.x + b.w + ball.radius;
      }
    }
    if (b.alive) {
      count += 1;
      b.draw();
    }
  }
  if (count == 0) {
    ctx.font = '50px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = '#0F0';
    ctx.fillText('GAME CLEAR',
      canvas.width/2,canvas.height/2
    );
    return;
  }
  ball.draw();
  player.draw();

  requestAnimationFrame(loop);
};

ctx.font = '50px sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'bottom';
ctx.fillStyle = '#F00';
ctx.fillText('<<Click to start>>',
  canvas.width/2,canvas.height/2
);
let started = false;
document.addEventListener('click', () => {
  if (!started) {
    started = true;
    // 音声再生許可取得
    sound.play();
    sound.pause();
    sound.currentTime = 0;
    requestAnimationFrame(loop);
  }
}, { once: true });
