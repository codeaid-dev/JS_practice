// 各タイルの数字を格納するリスト
let tiles = ['', '1', '2', '3', '4', '5', '6', '7', '8'];

// HTMLが表示されたとき
window.addEventListener('DOMContentLoaded', () => {

  // タイルの場所をランダムに配置する
  for (let i = 1; i < tiles.length; i++) {
    let w = Math.floor(Math.random() * i);
    let tmp = tiles[i];
    tiles[i] = tiles[w];
    tiles[w] = tmp;
  }

  let targets = document.querySelectorAll('.tile');

  // タイルがクリックされたときのイベント処理
  for (let i = 0; i < tiles.length; i++) {
    targets[i].textContent = tiles[i];
    targets[i].addEventListener('click', () => {
      if (i <= 5 && targets[i+3].textContent == '' ) {
        // 下と入れ替え
        let tmp = targets[i].textContent;
        targets[i].textContent = targets[i+3].textContent;
        targets[i+3].textContent = tmp;
      } else if ( i >= 3 && targets[i-3].textContent == '') {
        // 上と入れ替え
        let tmp = targets[i].textContent;
        targets[i].textContent = targets[i-3].textContent;
        targets[i-3].textContent = tmp;
      } else if (i % 3 !== 2 && targets[i+1].textContent == '') {
        // 右と入れ替え
        let tmp = targets[i].textContent;
        targets[i].textContent = targets[i+1].textContent;
        targets[i+1].textContent = tmp;
      } else if (i % 3 !== 0 && targets[i-1].textContent == '') {
        // 左と入れ替え
        let tmp = targets[i].textContent;
        targets[i].textContent = targets[i-1].textContent;
        targets[i-1].textContent = tmp;
      }
    });
  }

});
