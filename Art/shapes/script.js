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

  ctx.beginPath();
  ctx.moveTo(70, 300);
  ctx.lineTo(120, 450);
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#ffcc00';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(90, 300);
  ctx.lineTo(140, 450);
  ctx.closePath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#888';
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(160, 300);
  ctx.lineTo(260, 450);
  ctx.lineTo(160, 450);
  ctx.lineTo(260, 300);
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#007700';
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(380, 300, 100, 0, Math.PI*2, false);
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#007700';
  ctx.fillStyle = '#66dd66';
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(380, 300, 50, 0, Math.PI*2, false);
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#ffcc00';
  ctx.fillStyle = '#ffff66';
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  //ctx.arc(380, 500, 80, -30*Math.PI/180, -150*Math.PI/180, true);
  ctx.arc(380, 500, 80, 330*Math.PI/180, 210*Math.PI/180, true);
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#007700';
  ctx.fillStyle = '#66dd66';
  ctx.fill();
  ctx.stroke();
}

draw();
