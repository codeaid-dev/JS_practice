const canvas = document.getElementById('sketch');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let x = canvas.width/2;
let y = canvas.height/2;
const radius = 50;

// ドラッグ中か
let dragging = false;

// マウスと円の位置のずれ
let offsetX = 0;
let offsetY = 0;

const update = () => {
};

const draw = () => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2);
  ctx.fillStyle = 'black';
  ctx.fill();
};

// マウス座標取得
function getMousePos(e){
  const rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

// マウスを押した
canvas.addEventListener("mousedown",e=>{
  // const mouse = getMousePos(e);
  // const dx = mouse.x - x;
  // const dy = mouse.y - y;
  const dx = e.offsetX - x;
  const dy = e.offsetY - y;
  if(Math.sqrt(dx*dx+dy*dy)<=radius){
    dragging = true;
    // 円の中心とのずれを保存
    // offsetX = mouse.x - x;
    // offsetY = mouse.y - y;
    offsetX = e.offsetX - x;
    offsetY = e.offsetY - y;
  }
});

// ドラッグ
canvas.addEventListener("mousemove",e=>{
  if(!dragging) return;
  // const mouse = getMousePos(e);
  // x = mouse.x - offsetX;
  // y = mouse.y - offsetY;
  x = e.offsetX - offsetX;
  y = e.offsetY - offsetY;
});

// マウスを離した
canvas.addEventListener("mouseup",()=>{
  dragging = false;
});

// Canvas外で離した場合
canvas.addEventListener("mouseleave",()=>{
  dragging = false;
});

const loop = () => {
  update();
  draw();
  requestAnimationFrame(loop);
};

loop();
