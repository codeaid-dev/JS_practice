let ipt = document.querySelector('input');
let btn = document.querySelector('button');
let result = document.getElementById('answer');
btn.addEventListener('click',()=>{
  if (isNaN(ipt.value)) {
    result.innerHTML = '<span style="color:red;">数値に変換できません！</span>';
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
      result.innerText = "その駅はありません";
    }
    if (station >= 1 && station <= 5) {
      result.innerText = "その駅には" + type + "の電車が停まります";
    }
  }
});
