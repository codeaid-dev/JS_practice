const box = document.getElementById("box");
let x = 50, y = 50;

document.addEventListener('keydown', (e) => {
  if (e.key === "ArrowUp") y -= 10;
  if (e.key === "ArrowDown") y += 10;
  if (e.key === "ArrowLeft") x -= 10;
  if (e.key === "ArrowRight") x += 10;
  x = Math.max(0, Math.min(window.innerWidth - 100, x));
  y = Math.max(0, Math.min(window.innerHeight - 100, y));
  box.style.left = x + "px";
  box.style.top = y + "px";
});
