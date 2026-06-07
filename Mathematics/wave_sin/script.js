const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#000';
  for (let x=0; x<canvas.width; x++) {
    const y = canvas.height/2+Math.sin(x*0.01)*100;
    ctx.beginPath();
    ctx.arc(x,y,2,0,Math.PI*2);
    ctx.fill();
  }
}
draw();
