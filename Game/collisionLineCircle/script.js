const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

class Vector {
  constructor(x=0,y=0) {
    this.x = x;
    this.y = y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  normalize() {
    const len = this.length();
    if (len !== 0) {
      this.x /= len;
      this.y /= len;
    }
    return this;
  }
}

const Ax = 150;
const Ay = 350;
const Bx = 350;
const By = 150;

const circle = {};
circle.x = 50;
circle.y = 50;
circle.radius = 50;
circle.hit = false;
circle.hitX = 0;
circle.hitY = 0;
circle.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
  if (this.hit) {
    ctx.fillStyle = 'rgb(255 0 0)';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.hitX, this.hitY, 5, 0, Math.PI*2);
    ctx.fillStyle = 'rgb(255 255 0)';
    ctx.fill();
  } else {
    ctx.fillStyle = 'rgb(0 255 0)';
    ctx.fill();
  }
}
circle.collision = function(Ax,Ay,Bx,By) {
  const Px = this.x;
  const Py = this.y;
  const radius = this.radius;
  const AP = new Vector(Px-Ax, Py-Ay);
  const AB = new Vector(Bx-Ax, By-Ay);
  AB.normalize();
  // 単位ベクトルABとベクトルAPの内積(AXの距離)
  const lenAX = AB.x*AP.x+AB.y*AP.y;
  let shortest = 0;
  if (lenAX < 0) {
    // AXが負ならAPが最短距離
    shortest = Math.sqrt((Ax-Px)**2 + (Ay-Py)**2);
  } else if (lenAX > Math.sqrt((Ax-Bx)**2 + (Ay-By)**2)) {
    // AXがABより長い場合はBPが最短距離
    shortest = Math.sqrt((Bx-Px)**2 + (By-Py)**2);
  } else {
    // 単位ベクトルAPとベクトルAPの外積(PXの距離)
    let lenPX = AB.x*AP.y - AB.y*AP.x;
    shortest = Math.abs(lenPX);
  }
  if (shortest < radius) {
    this.hit = true;
    this.hitX = Ax+(AB.x*lenAX);
    this.hitY = Ay+(AB.y*lenAX);
    return true;
  }
  this.hit = false;
  return false;
}

canvas.addEventListener('mousemove', (event) => {
  circle.x = event.offsetX;
  circle.y = event.offsetY;
});

const loop = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.beginPath();
  ctx.moveTo(Ax, Ay);
  ctx.lineTo(Bx, By);
  ctx.stroke();
  circle.collision(Ax,Ay,Bx,By)
  circle.draw();

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
