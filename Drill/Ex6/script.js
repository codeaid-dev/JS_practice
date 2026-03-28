const yoko = document.getElementById('yoko');
const tate = document.getElementById('tate');
const btn = document.querySelector('button');
const result = document.getElementById('answer');
btn.addEventListener('click',()=>{
  if (isNaN(yoko.value) || isNaN(tate.value)) {
    result.innerHTML = '<span style="color:red;">数値に変換できません！</span>';
  } else {
    let tile = ['○', '✕'];
    let index = 1;
    let ans = "";
    for (let i = 0; i < tate.value; i++) {
      index = 1 - index;
      for (let j = 0; j < yoko.value; j++) {
        if (j % 2 === 0) {
          ans += tile[index];
        } else {
          ans += tile[1 - index];
        }
      }
      ans += '<br>';
    }
    result.innerHTML = ans;
  }
});
