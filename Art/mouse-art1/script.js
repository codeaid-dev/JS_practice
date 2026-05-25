const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');

const centerX = canvas.width/2;
const centerY = canvas.height/2;
let mouseX = 0;
let mouseY = 0;
let pmouseX = 0;
let pmouseY = 0;
let drawing = false;

const drawLine = () => {
  const angle = Math.atan2(mouseY-centerY,mouseX-centerX);
  const pd = Math.sqrt((pmouseX-centerX)**2 + (pmouseY-centerY)**2);
  const d = Math.sqrt((mouseX-centerX)**2 + (mouseY-centerY)**2);
  for (let i=0; i<Math.PI*2; i+=Math.PI*2/36) {
    const px = centerX+pd*Math.cos(angle+i);
    const py = centerY+pd*Math.sin(angle+i);
    const x = centerX+d*Math.cos(angle+i);
    const y = centerY+d*Math.sin(angle+i);
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(x, y);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#fff';
    ctx.stroke();
  }
};

canvas.addEventListener('mousedown', (event) => {
  drawing = true;
  pmouseX = mouseX;
  pmouseY = mouseY;
  mouseX = event.offsetX;
  mouseY = event.offsetY;
});

canvas.addEventListener('mousemove', (event) => {
  pmouseX = mouseX;
  pmouseY = mouseY;
  mouseX = event.offsetX;
  mouseY = event.offsetY;
  if (drawing) {
    drawLine();
  }
});

canvas.addEventListener('mouseup', () => {
  drawing = false;
});

canvas.addEventListener('mouseleave', () => {
  drawing = false;
});
