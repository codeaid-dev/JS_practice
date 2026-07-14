const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

const radius=15;
let x=67,y=radius;

class Circle {
  constructor(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.goal = false;
  }
  draw() {
    ctx.beginPath();
    if (this.goal)
      ctx.fillStyle = '#00F';
    else
      ctx.fillStyle = '#F00';
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    ctx.fill();
  }
  collision(x,y,radius) {
    const dst = Math.sqrt((this.x-x)**2+(this.y-y)**2);
    return dst < (this.radius+radius);
  }
}
const walls = [];
const goal = Math.floor(Math.random()*54);
for (let i=0; i<54; i++) {
  const c = new Circle(
    i%9*66+34, Math.floor(i/9)*66+34, radius);
  if (i === goal)
    c.goal = true;
  walls.push(c);
}

let stime = 0; // ゲーム開始時間
let etime = 0; // ゲーム終了時間
let over = false; // ゲームオーバー
let clear = false; // ゲームクリア

const update = () => {
  walls.forEach((w) => {
    if (w.collision(x,y,radius)) {
      if (w.goal && !clear && !over) {
        clear = true;
        etime = performance.now();
      } else if (!over && !clear) {
        over = true;
      }
    }
  });
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.fillStyle = '#00F';
  ctx.fill();
  walls.forEach((c) => {
    c.draw();
  });
  ctx.font = '50px sans-serif';
  ctx.textAlign = 'center';
  if (over) {
    ctx.fillStyle = '#000';
    ctx.fillText('GAME OVER',
      canvas.width/2,canvas.height/2
    );
    return;
  }
  if (clear) {
    ctx.fillStyle = '#0F0';
    ctx.fillText('GAME CLEAR',
      canvas.width/2,canvas.height/2
    );
    ctx.fillText(`経過時間：${(Math.ceil((etime-stime)/1000))}秒`,
      canvas.width/2,canvas.height/2+50
    );
  }
};

let playing = false;
canvas.addEventListener('mousemove', (event) => {
  if (!playing) {
    const dx = event.offsetX - x;
    const dy = event.offsetY - y;
    if (Math.sqrt(dx**2+dy**2) <= radius) {
      playing = true;
      stime = performance.now();
    }
    return;
  }
  if (event.offsetX > radius && event.offsetX < canvas.width - radius &&
      event.offsetY > radius && event.offsetY < canvas.height - radius) {
    x = event.offsetX;
    y = event.offsetY;
  }
});

canvas.addEventListener('mouseleave', () => {
  if (playing && !clear && !over) {
    over = true;
  }
});

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
};

loop();
