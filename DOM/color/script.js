const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
let r = 0;
let g = 255;
let b = 0;
div2.style.backgroundColor = `rgb(${r} ${g} ${b})`;

r = r.toString(16).padStart(2, '0');
g = g.toString(16).padStart(2, '0');
b = b.toString(16).padStart(2, '0');
div3.style.backgroundColor = `#${r}${g}${b}`;
