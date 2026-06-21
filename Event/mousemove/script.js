const screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", (e) => {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}
    Offset X/Y: ${e.offsetX}, ${e.offsetY}`;
});

const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 300;
canvas.addEventListener('mousemove', (e) => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.font = "20px sans-serif";
  ctx.fillText(`Screen X/Y: ${e.screenX},${e.screenY}`,50,50);
  ctx.fillText(`Client X/Y: ${e.clientX}, ${e.clientY}`,50,80);
  ctx.fillText(`Offset X/Y: ${e.offsetX}, ${e.offsetY}`,50,110);
  const rect = e.target.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;
  ctx.fillText(`Rect X/Y: ${mouseX}, ${mouseY}`,50,140);
});
