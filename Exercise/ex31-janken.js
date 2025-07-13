const ipt = document.querySelector('input');
const btn = document.querySelector('button');
const computer = document.querySelector('#computer-img');
const player = document.querySelector('#player-img');
const result = document.querySelector('#result');
btn.addEventListener('click',()=>{
  const cValue = Math.floor(Math.random() * 3) + 1;
  if (isNaN(ipt.value)) {
    result.innerHTML = '<span style="color:red;">数値に変換できません！</span>';
  } else {
    if (ipt.value == 1) {
      player.innerHTML = '<img width="150px" height="150px" src="img/janken_gu.png">';
    } else if (ipt.value == 2) {
      player.innerHTML = '<img width="150px" height="150px" src="img/janken_choki.png">';
    } else if (ipt.value == 3) {
      player.innerHTML = '<img width="150px" height="150px" src="img/janken_pa.png">';
    }

    if (cValue == 1) {
      computer.innerHTML = '<img width="150px" height="150px" src="img/janken_gu.png">';
    } else if (cValue == 2) {
      computer.innerHTML = '<img width="150px" height="150px" src="img/janken_choki.png">';
    } else if (cValue == 3) {
      computer.innerHTML = '<img width="150px" height="150px" src="img/janken_pa.png">';
    }

    if (cValue == 1 && ipt.value == 3 || cValue == 2 && ipt.value == 1 || cValue == 3 && ipt.value == 2) {
      // プレイヤーの勝ち
      result.innerHTML = '<span style="color:red">プレイヤーの勝ち</span>';
    } else if (cValue == 1 && ipt.value == 2 || cValue == 2 && ipt.value == 3 || cValue == 3 && ipt.value == 1) {
      // コンピューターの勝ち
      result.innerHTML = 'コンピューターの勝ち';
    } else {
      // あいこ
      result.innerHTML = 'あいこ';
    }
  }
});
