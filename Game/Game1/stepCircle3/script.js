const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let x=40,y=40;
let dx=0,dy=0;
const radius=15;
const keys = {};
let start = false;
ctx.font = '50px sans-serif';
ctx.textAlign = 'center';
ctx.fillStyle = '#00F';
ctx.fillText('<<Space to start>>',
  canvas.width/2,canvas.height/2
);

class Line {
  constructor(x1,y1,x2,y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.dy = 1;
    this.baseY = y1;
    this.prevY = y1;
    this.time = Math.random()*Math.PI*2;
  }
  update() {
    this.prevY = this.y1; // 前回の座標を保存

    // this.y1 += this.dy;
    // this.y2 += this.dy;
    // if (this.y1 > 350 || this.y1 < 100) {
    //   this.dy *= -1;
    // }
    this.time += 0.03;
    this.y1 = this.baseY+Math.sin(this.time)*45;
    this.y2 = this.y1;
  }
  draw() {
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(this.x1,this.y1);
    ctx.lineTo(this.x2,this.y2);
    ctx.stroke();
  }
  isHit(x,y,radius) {
    return this.x1 <= x && this.x2 >= x &&
        this.y1 >= y-radius && this.y1 <= y+radius;
  }
}
const lines = [];
for (let i=0; i<6; i++) {
  const l = new Line(
    i*100+10,
    350-i*50,
    i*100+60,
    350-i*50
  );
  lines.push(l);
}

let rideLine = null;
let onGround = false;
const update = () => {
  onGround = false;
  // 足場を動かす
  for (const line of lines) {
    line.update();
  }
  // キー入力
  if(keys['ArrowRight']) dx += 0.1;
  if(keys['ArrowLeft']) dx -= 0.1;
  if(keys['ArrowUp'] && (dy === 0 || rideLine)) {
    dy = -7;
    rideLine = null;
  }
  if(keys['ArrowDown']) dy += 2;
  dx *= 0.98;
  // 座標更新
  x += dx;
  y += dy;
  // 足場に乗っている状態のとき
  if (rideLine) {
    // 足場に乗っていたら一緒に動く
    y += rideLine.y1 - rideLine.prevY;
    // 横にはみだしたら落ちる
    if (x < rideLine.x1 || x > rideLine.x2) {
      rideLine = null;
    }
    if (dy < 0) { // ジャンプしたら落ちる
      rideLine = null;
    }
    if (rideLine) { // まだ乗っていたら位置を固定
      dy = 0;
      y = rideLine.y1-radius;
      onGround = true;
    }
  }
  // 空中にいるとき
  if (!rideLine && dy > 0) {
    for (const line of lines) {
      // 足場に当たったとき
      if (line.isHit(x,y,radius)) {
        dy = 0;
        y = line.y1-radius;
        rideLine = line;
        onGround = true;
        break;
      }
    }
  }
  // 画面下端に着いたとき
  if (y > canvas.height-radius) {
    dy = 0;
    y = canvas.height-radius;
    onGround = true;
  }
  // 重力
  if (!onGround) {
    dy += 0.3;
  }
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.fillStyle = '#00F';
  ctx.fill();
  lines.forEach((line) => {
    line.draw();
  });
};

document.addEventListener('keydown', (event) =>{
  if (start) {
    keys[event.key] = true;
  } else if (event.key == ' ') {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    start = true;
    stime = performance.now();
  }
});

document.addEventListener('keyup', (event) =>{
  if (start) {
    keys[event.key] = false;
  }
});

const loop = () => {
  if (start) {
    update();
    draw();
  }
  requestAnimationFrame(loop);
};

loop();
