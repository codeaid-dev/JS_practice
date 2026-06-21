const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
canvas.addEventListener('click', (e) => {
  // ctx.clearRect(0,0,canvas.width,canvas.height);
  // const rect = event.target.getBoundingClientRect();
  // const mouseX = event.clientX - rect.left;
  // const mouseY = event.clientY - rect.top;
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(e.offsetX,e.offsetY,50,0,Math.PI*2);
  ctx.fill();
});
