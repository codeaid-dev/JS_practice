const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

const centerX = canvas.width/2;
const centerY = canvas.height/2;

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

let angle = 0;
const targets = [];
for (let i=0; i<3; i++) {
  const info = [];
  const angle = Math.random()*Math.PI*2;
  const distanceW = Math.random()*(canvas.width/2-50)+50;
  const distanceH = Math.random()*(canvas.height/2-50)+50;
  const x = centerX + distanceW * Math.cos(angle);
  const y = centerY + distanceH * Math.sin(angle);
  info.push(x);
  info.push(y);
  info.push(Math.random()*75+25);
  targets.push(info);
}

const collision = (Ax,Ay,Bx,By,Px,Py,radius) => {
  const AP = new Vector(Px-Ax,Py-Ay);
  const AB = new Vector(Bx-Ax,By-Ay);
  AB.normalize();
  const lenAX = AB.x*AP.x+AB.y*AP.y;
  let shortest=0;
  if (lenAX < 0) {
    shortest = Math.sqrt((Ax-Px)**2+(Ay-Py)**2);
  } else if (lenAX > Math.sqrt((Ax-Bx)**2+(Ay-By)**2)) {
    shortest = Math.sqrt((Bx-Px)**2+(By-Py)**2);
  } else {
    const lenPX = AB.x*AP.y-AB.y*AP.x;
    shortest = Math.abs(lenPX);
  }
  return shortest < radius;
};

const degToRad = (degrees) => {
  return degrees * (Math.PI / 180);
};

const draw = () => {
  ctx.fillStyle = 'rgb(0 0 0 / 0.07)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  const x = centerX + centerX * Math.cos(degToRad(angle%360));
  const y = centerY + centerY * Math.sin(degToRad(angle%360));
  ctx.strokeStyle = 'rgb(0 255 0)';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(centerX,centerY);
  ctx.stroke();
  angle += 1;
  angle %= 360;
  for (const t of targets) {
    if (collision(x,y,centerX,centerY,t[0],t[1],t[2]/2)) {
      ctx.fillStyle = 'rgb(0 255 0)';
      ctx.beginPath();
      ctx.arc(t[0],t[1],t[2]/2,0,Math.PI*2);
      ctx.fill();
    }
  }
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
