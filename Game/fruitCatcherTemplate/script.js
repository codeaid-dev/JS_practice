const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let bowlX = 200;
let bowlY = 430;
const bowlSpeed = 200;
let appleX = Math.random()*400;
let appleY = -100;
let appleSpeed = 200;
const gravity = 5;
const apple = new Image();
apple.src = '../img/apple.png';
const bowl = new Image();
bowl.src = '../img/bowl.png';

let score = 0;
let gameover = false;
let last = performance.now();

const keys = {};
window.addEventListener("keydown", (event) =>{
    keys[event.key] = true;
});
window.addEventListener("keyup", (event) =>{
    keys[event.key] = false;
});

const update = (delta) => {
  if(keys["ArrowRight"]) bowlX += bowlSpeed * delta;
  if(keys["ArrowLeft"]) bowlX -= bowlSpeed * delta;

  appleY += appleSpeed * delta;
  appleSpeed += gravity * delta;

  if (appleY+apple.height > bowlY
    && appleX+apple.width/2 > bowlX
    && appleX+apple.width/2 < bowlX+bowl.width) {
    score += 1;
    appleX = Math.random()*400;
    appleY = -100;
  }

  if (appleY > canvas.height - apple.height) {
    gameover = true;
  }
}

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bowl, bowlX, bowlY);
  ctx.drawImage(apple, appleX, appleY);

  ctx.font = '40px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText(`SCORE: ${score}`, canvas.width/2, 50);

  if (gameover) {
    ctx.fillText('GAME OVER', canvas.width/2, canvas.height/2);
  }
}

const loop = (time) => {
  const delta = (time - last)/1000;
  last = time;
  update(delta);
  draw();
  if (!gameover)
    requestAnimationFrame(loop);
}

Promise.all([
  new Promise(r => apple.onload = r),
  new Promise(r => bowl.onload = r)
]).then(()=>{
  requestAnimationFrame(loop);
});
