const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

const random = (min,max) => {
  return Math.random() * (max - min) + min;
};

const map = (value,start1,stop1,start2,stop2) => {
  return start2 + (value - start1) * (stop2 - start2) / (stop1 - start1);
};

const constrain = (value,min,max) => {
  return Math.min(Math.max(value,min),max);
};

const lerp = (start,stop,amount) => {
  return start + (stop - start) * amount;
};

class Snow {
  constructor() {
    this.x = random(0,canvas.width);
    this.y = random(-canvas.height,canvas.height);
    this.z = random(0.2,1.0); // 1に近いほど手前

    this.speed = map(this.z,0.2,1.0,0.5,4.0); // 手前ほど速い
    this.radius = map(this.z,0.2,1.0,0.75,3.5); // 手前ほど大きい

    this.angle = random(0,Math.PI*2);
    this.swing1 = random(0.01,0.03);
    this.swing2 = map(this.z,0.2,1.0,0.2,1.5); // 手前ほど横揺れが大きい
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
    // 雪が地面に到着
    const ix = constrain(Math.floor(this.x),0,canvas.width-1);
    if (this.y+this.radius >= ground[ix]) {
      fallenSnow(ix,this.radius*2*0.3); // 積雪
      this.reset(); // 新しい雪を上から降らせる
    }
  }
 
  draw() {
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    ctx.fill();
  }

  reset() {
    this.x = random(canvas.width);
    this.y = random(-100,-10);
    this.z = random(0.2,1.0);
    this.speed = map(this.z,0.2,1.0,0.5,4.0);
    this.radius = map(this.z,0.2,1.0,0.75,3.5);
    this.swing2 = map(this.z,0.2,1.0,0.2,1.5);
  }
}

const snows = [];
for (let i=0; i<200; i++) {
  snows.push(new Snow());
}
const ground = [];
for (let i=0; i<canvas.width; i++) {
  ground.push(canvas.height);
}

// 雪を積もらせる
function fallenSnow(x, amount) {
  // 周辺に少し広げる
  for (let i=-3; i<=3; i++) {
    const ix = x + i;
    if (ix >= 0 && ix < canvas.width) {
      // 中央ほど多く積もる
      const weight = 1.0 - Math.abs(i) / 4.0;
      ground[ix] -= amount * weight;
    }
  }
  // 雪が画面上まで来ないようにする
  for (let i=0; i<canvas.width; i++) {
    ground[i] = Math.max(ground[i], 250);
  }
}

// 積もった雪を描画
function drawGround() {
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  // 左上から
  ctx.moveTo(0,ground[0]);
  // 地面の雪のライン
  for (let x=0; x<canvas.width; x++) {
    ctx.lineTo(x,ground[x]);
  }
  // 画面下
  ctx.lineTo(canvas.width,canvas.height);
  ctx.lineTo(0,canvas.height);
  ctx.closePath();
  ctx.fill();
}

function smoothSnow() {
  const newGround = [];
  // 周囲の雪を均す
  for (let i=0; i<canvas.width; i++) {
    if (i==0 || i==canvas.width-1) {
      newGround.push(ground[i]);
    } else {
      newGround.push((ground[i-1] + ground[i] + ground[i+1]) / 3.0);
    }
  }
  // 少しずつ平均値に近づける
  for (let x=0; x<canvas.width; x++) {
    ground[x] = lerp(ground[x], newGround[x], 0.05);
  }
}

const loop = () => {
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  for (const snow of snows) {
    snow.update();
    snow.draw();
  }
  // 雪の面積を少しずつ平らにする
  smoothSnow();
  drawGround();

  requestAnimationFrame(loop);
};
loop();
