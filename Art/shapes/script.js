function draw() {
  const canvas = document.getElementById('sketch');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgb(255 0 0)';
  ctx.fillRect(50, 50, 100, 100);

  ctx.fillStyle = 'rgb(0 0 255 / 50%)';
  ctx.fillRect(110, 110, 100, 100);

  ctx.fillStyle = 'rgb(0 0 0)';
  ctx.fillRect(290, 50, 100, 100);
  ctx.clearRect(310, 70, 60, 60);
  ctx.strokeRect(315, 75, 50, 50);

  ctx.beginPath();
  ctx.moveTo(50, 300);
  ctx.lineTo(100, 450);
  ctx.closePath();
  ctx.stroke();
}

draw();
