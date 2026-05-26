const screen = window.screen;
const canvas = document.getElementById("sketch");
const ctx = canvas.getContext("2d");

const width = canvas.width = screen.width;
const height = canvas.height = screen.height;

// let matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789#$%^&*()*&^%";
let matrix = "アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ123456789#$%^&*()*&^%";

matrix = matrix.split("");

const font_size = 10;
const columns = width / font_size;
const drops = [];
for(let x = 0; x < columns; x++)
  drops[x] = 1;

const draw = ()=>{
  ctx.fillStyle = "rgb(0 0 0 / 0.04)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#0F0";
  ctx.font = font_size + "px arial";
  for( let i = 0; i < drops.length; i++ ) {
    const text = matrix[ Math.floor( Math.random() * matrix.length ) ];
    ctx.fillText(text, i * font_size, drops[i] * font_size);
    if( drops[i] * font_size > height && Math.random() > 0.975 )
      drops[i] = 0;
    drops[i]++;
  }
}
setInterval( draw, 35 );
