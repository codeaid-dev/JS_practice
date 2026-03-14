const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let bowlX = 200;
let bowlY = 430;
const bowlSpeed = 5;
let appleX = Math.random()*400;
let appleY = -100;
let appleSpeed = 5;
const apple = new Image();
apple.src = '../img/apple.png';
const bowl = new Image();
bowl.src = '../img/bowl.png';

let score = 0;

const keys = {};
window.addEventListener("keydown", (event) =>{
    keys[event.key] = true;
});
window.addEventListener("keyup", (event) =>{
    keys[event.key] = false;
});

const loop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if(keys["ArrowRight"]) bowlX += bowlSpeed;
  if(keys["ArrowLeft"]) bowlX -= bowlSpeed;
  ctx.drawImage(bowl, bowlX, bowlY);

  appleY += appleSpeed;
  appleSpeed += 0.001;
  ctx.drawImage(apple, appleX, appleY);

  if (appleY+apple.height > bowlY
    && appleX+apple.width/2 > bowlX
    && appleX+apple.width/2 < bowlX+bowl.width) {
    score += 1;
    appleX = Math.random()*400;
    appleY = -100;
  }

  ctx.font = '40px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText(`SCORE: ${score}`, canvas.width/2, 50);

  if (appleY > canvas.height - apple.height) {
    ctx.fillText('GAME OVER', canvas.width/2, canvas.height/2);
    return;
  }

  requestAnimationFrame(loop);
}

loop();
