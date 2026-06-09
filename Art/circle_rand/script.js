const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

const centerX = canvas.width/2;
const centerY = canvas.height/2;

ctx.fillStyle = '#000';
ctx.fillRect(0,0,canvas.width,canvas.height);

const draw = () => {
  const x = Math.random()*canvas.width;
  const y = Math.random()*canvas.height;
  const dst = Math.sqrt((centerX-x)**2 + (centerY-y)**2);
  const diameter = (centerY-dst)/10;
  if (diameter > 0) {
    ctx.fillStyle = 'rgb(0 0 255)';
    ctx.beginPath();
    ctx.arc(x,y,diameter/2,0,Math.PI*2);
    ctx.fill();
  }
};

const loop = () => {
  draw();
  requestAnimationFrame(loop);
};
loop();
