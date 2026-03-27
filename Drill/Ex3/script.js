let ipt = document.querySelector('input');
let btn = document.querySelector('button');
let elem = document.querySelector('#answer');
btn.addEventListener('click',()=>{
  if (isNaN(ipt.value)) {
    elem.innerHTML = '<span style="color:red;">数値に変換できません！</span>';
  } else {
    let type;
    let station = Number(ipt.value);
    if (station === 1 || station === 3 || station === 4) {
      type = "快速";
    }else if (station === 2) {
      type = "快速・急行";
    } else if (station === 5) {
      type = "快速・急行・特急";
    } else {
      elem.innerText = "その駅はありません";
    }
    if (station >= 1 && station <= 5) {
      elem.innerText = "その駅には" + type + "の電車が停まります";
    }
  }
});
