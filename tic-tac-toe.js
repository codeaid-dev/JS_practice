let tiles = [0,1,2,3,4,5,6,7,8]; // マス情報を格納するリスト
let first = "○";
let second = "Ｘ";
let turn = true; // true:first, false:second
let status = 0; // ゲームの手数と終了フラグ 1 ~ 10, 9:全ターン終了、10:ゲーム終了
let targets = document.querySelectorAll('.tile');
let result = document.querySelector('.result');

// タイルがクリックされたときのイベント処理
for (let i = 0; i < tiles.length; i++) {
  targets[i].addEventListener('click', () => {
    if (targets[i].textContent == '') {
      if (status == 10) return;
      status++;
      targets[i].textContent = (turn) ? first : second;
      tiles[i] = targets[i].textContent;
      let str = judge();
      if (str != "") {
        result.textContent = str;
      }
      turn = (turn) ? false : true;
    }
  });
}

function judge() {
  if (tiles[0] == tiles[1] && tiles[0] == tiles[2]
    || tiles[3] == tiles[4] && tiles[3] == tiles[5]
    || tiles[6] == tiles[7] && tiles[6] == tiles[8]
    || tiles[0] == tiles[3] && tiles[0] == tiles[6]
    || tiles[1] == tiles[4] && tiles[1] == tiles[7]
    || tiles[2] == tiles[5] && tiles[2] == tiles[8]
    || tiles[0] == tiles[4] && tiles[0] == tiles[8]
    || tiles[2] == tiles[4] && tiles[2] == tiles[6]) {
      if (turn) {
        status = 10;
        return "○の勝ち";
      } else {
        status = 10;
        return "Ｘの勝ち";
      }
    } else if (status == 9) {
      return "引き分け";
    }
    return "";
}
