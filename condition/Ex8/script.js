let r=0;
let b=0;
let w=0;
for (let i=0; i<3; i++) {
  const num = Math.floor(Math.random()*3);
  if (num === 0) {
    r += 1;
  } else if (num === 1) {
    b += 1;
  } else {
    w += 1;
  }
}
if (r === 3 || b === 3 || w === 3 || (r === 1 && b === 1 && w === 1)) {
  console.log(`赤が${r}、青が${b}、白が${w}で勝ち`);
} else {
  console.log(`赤が${r}、青が${b}、白が${w}で負け`);
}
