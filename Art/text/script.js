const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

const baselines = [
  'top',
  'hanging',
  'alphabetic',
  'ideographic',
  'bottom'
];
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(0,50);
ctx.lineTo(canvas.width,50);
ctx.stroke();

baselines.forEach((baseline, index) => {
  ctx.font = '20px sans-serif';
  ctx.textBaseline = baseline;
  let x = index*100;
  ctx.fillStyle = 'green';
  ctx.fillText('good job!',x,50);
  ctx.font = '16px sans-serif';
  ctx.fillText(baseline,x,100);
});

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(canvas.width/2,canvas.height/2);
ctx.lineTo(canvas.width/2,canvas.height);
ctx.stroke();

ctx.font = '50px sans-serif';
ctx.fillStyle = 'green';
ctx.textAlign = "left";
ctx.fillText("左揃え",
  canvas.width/2, canvas.height/2+50);
ctx.textAlign = 'center';
ctx.fillText('中央揃え',
  canvas.width/2,canvas.height/2+100);
ctx.textAlign = "right";
ctx.fillText("右揃え",
  canvas.width/2, canvas.height/2+150);
ctx.textAlign = "start";
ctx.fillText("先頭揃え",
  canvas.width/2, canvas.height/2+200);
ctx.textAlign = "end";
ctx.fillText("末尾揃え",
  canvas.width/2, canvas.height/2+250);
