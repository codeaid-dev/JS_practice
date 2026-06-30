const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;
class Circle {
  collide(en) {
    const dst = Math.sqrt((this.x-en.x)**2 + (this.y-en.y)**2);
    return dst < this.size/2+en.size/2;
  }
}
const ens = [];
for (let i=0; i<100; i++) {
  const en = new Circle();
  en.size = Math.random()*20+30;
  let ok = false;
  while (!ok) {
    en.x = Math.random() * (canvas.width-en.size) + en.size/2;
    en.y = Math.random() * (canvas.height-en.size) + en.size/2;
    ok = true;
    for (const other of ens) {
      const dx = en.x - other.x;
      const dy = en.y - other.y;
      const dist = Math.sqrt(dx**2 + dy**2);
      if (dist < en.size/2 + other.size/2) {
        ok = false;
        break;
      }
    }
  }
  en.angle = Math.random()*360;
  en.speed = Math.random()*2+1;
  en.iro = `rgb(${Math.random()*255} ${Math.random()*255} ${Math.random()*255})`;
  en.move = true;
  ens.push(en);
}

const update = () => {
  for (const en of [...ens]) {
    if (en.move) {
      en.x += en.speed * Math.cos(en.angle*Math.PI/180);
      en.y += en.speed * Math.sin(en.angle*Math.PI/180);
      if (en.x < en.size/2 || en.x > canvas.width-en.size/2) {
        en.angle = 180-en.angle;
        if (en.x < en.size/2) {
          en.x = en.size/2;
        } else if (en.x > canvas.width-en.size/2) {
          en.x = canvas.width-en.size/2;
        }
      }
      if (en.y < en.size/2 || en.y > canvas.height-en.size/2) {
        en.angle *= -1;
        if (en.y < en.size/2) {
          en.y = en.size/2;
        } else if (en.y > canvas.height-en.size/2) {
          en.y = canvas.height-en.size/2;
        }
      }
    }
    for (const other of [...ens]) {
      if (en == other) {
        continue;
      }
      if (en.collide(other) && en.move && other.move) {
        if (en.size <= other.size) {
          //ens.remove(en);
          en.move = false;
          en.iro = 'rgb(255 255 255 / 0)';
          other.size = Math.sqrt(en.size**2 + other.size**2);
          if (other.x < other.size/2)
            other.x = other.size/2;
          if (other.x > canvas.width-other.size/2)
            other.x = canvas.width-other.size/2;
          if (other.y < other.size/2)
            other.y = other.size/2;
          if (other.y > canvas.height-en.size/2)
            other.y = canvas.height-en.size/2;
        }
        break;
      }
    }
  }
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for (const en of ens) {
    if (!en.move) continue;
    ctx.fillStyle = en.iro;
    ctx.beginPath();
    ctx.arc(en.x,en.y,en.size/2,0,Math.PI*2);
    ctx.fill();
  }
};

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
};
loop();

canvas.addEventListener('mousedown', (e) => {
  for (const en of ens) {
    const dist = Math.sqrt((e.offsetX-en.x)**2 + (e.offsetY-en.y)**2);
    if (dist < en.size/2 && en.move) {
      en.move = false;
      en.iro = 'rgb(255 255 255 / 0)';
      for (let n=0; n<360; n+=30) {
        const new_en = new Circle();
        new_en.angle = n;
        new_en.x = en.x + en.size/2 * Math.cos(n*Math.PI/180);
        new_en.y = en.y + en.size/2 * Math.sin(n*Math.PI/180);
        const nextX = en.x + en.size/2 * Math.cos((n+30)*Math.PI/180);
        const nextY = en.y + en.size/2 * Math.sin((n+30)*Math.PI/180);
        new_en.size = Math.sqrt((new_en.x-nextX)**2 + (new_en.y-nextY)**2);
        new_en.speed = 1.5;
        new_en.iro = `rgb(${Math.random()*255} ${Math.random()*255} ${Math.random()*255})`;
        new_en.move = true;
        ens.push(new_en);
      }
      break;
    }
  }
});
