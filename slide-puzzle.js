// HTMLが表示されたとき
window.addEventListener('DOMContentLoaded', () => {

  // 各タイルの数字を格納するリスト
  let tiles = ['', '1', '2', '3', '4', '5', '6', '7', '8'];

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
    targets[i].innerText = tiles[i];
    targets[i].addEventListener('click', () => {
      if (i <= 5 && targets[i+3].innerText == '' ) {
        // 下と入れ替え
        let tmp = targets[i].innerText;
        targets[i].innerText = targets[i+3].innerText;
        targets[i+3].innerText = tmp;
      } else if ( i >= 3 && targets[i-3].innerText == '') {
        // 上と入れ替え
        let tmp = targets[i].innerText;
        targets[i].innerText = targets[i-3].innerText;
        targets[i-3].innerText = tmp;
      } else if (i % 3 !== 2 && targets[i+1].innerText == '') {
        // 右と入れ替え
        let tmp = targets[i].innerText;
        targets[i].innerText = targets[i+1].innerText;
        targets[i+1].innerText = tmp;
      } else if (i % 3 !== 0 && targets[i-1].innerText == '') {
        // 左と入れ替え
        let tmp = targets[i].innerText;
        targets[i].innerText = targets[i-1].innerText;
        targets[i-1].innerText = tmp;
      }
    });
  }

});
