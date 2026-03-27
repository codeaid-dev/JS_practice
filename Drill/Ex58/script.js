const btn = document.querySelector('button');
const computer = document.querySelector('#computer-img');
const player = document.querySelector('#player-img');
const result = document.querySelector('#result');
btn.addEventListener('click',() => {
  const janken = document.querySelector('[name="janken"]:checked');
  const com = Math.floor(Math.random() * 3) + 1;
  const you = Number(janken.value);
  if (you === 1) {
    player.innerHTML = '<img width="150px" height="150px" src="../img/janken_gu.png">';
  } else if (you === 2) {
    player.innerHTML = '<img width="150px" height="150px" src="../img/janken_choki.png">';
  } else if (you === 3) {
    player.innerHTML = '<img width="150px" height="150px" src="../img/janken_pa.png">';
  }

  if (com === 1) {
    computer.innerHTML = '<img width="150px" height="150px" src="../img/janken_gu.png">';
  } else if (com === 2) {
    computer.innerHTML = '<img width="150px" height="150px" src="../img/janken_choki.png">';
  } else if (com === 3) {
    computer.innerHTML = '<img width="150px" height="150px" src="../img/janken_pa.png">';
  }

  if (com === 1 && you === 3 || com === 2 && you === 1 || com === 3 && you === 2) {
    // プレイヤーの勝ち
    result.innerHTML = '<span style="color:red">プレイヤーの勝ち</span>';
  } else if (com === 1 && you === 2 || com === 2 && you === 3 || com === 3 && you === 1) {
    // コンピューターの勝ち
    result.innerHTML = 'コンピューターの勝ち';
  } else {
    // あいこ
    result.innerHTML = 'あいこ';
  }
});
