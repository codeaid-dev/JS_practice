const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

let rectX = 0;
let rectY = 0;
const rectW = canvas.width/12;
const rectH = canvas.height/12;

document.addEventListener('keydown', (event) =>{
  if (event.key == 'ArrowRight') {
    rectX += rectW;
    if (rectX > canvas.width-rectW)
      rectX -= rectW;
  }
  if (event.key == 'ArrowLeft') {
    rectX -= rectW;
    if (rectX < 0)
      rectX += rectW;
  }
  if (event.key == 'ArrowUp') {
    rectY -= rectH;
    if (rectY <  0)
      rectY += rectH;
  }
  if (event.key == 'ArrowDown') {
    rectY += rectH;
    if (rectY > canvas.height-rectH)
      rectY -= rectH;
  }
});

const draw = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'black';
  ctx.fillRect(rectX, rectY, rectW, rectH);
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};

loop();
