// HTMLが表示されたとき
document.addEventListener('DOMContentLoaded', () => {

  // 各タイルの数字を格納するリスト
  const tiles = ['', '1', '2', '3', '4', '5', '6', '7', '8'];

  // タイルの場所をランダムに配置する
  for (let i = 1; i < tiles.length; i++) {
    const w = Math.floor(Math.random() * i);
    const tmp = tiles[i];
    tiles[i] = tiles[w];
    tiles[w] = tmp;
  }

  const targets = document.querySelectorAll('.tile');

  // タイルがクリックされたときのイベント処理
  for (let i = 0; i < tiles.length; i++) {
    targets[i].innerText = tiles[i];
    targets[i].addEventListener('click', () => {
      if (i <= 5 && targets[i+3].innerText == '' ) {
        // 下と入れ替え
        const tmp = targets[i].innerText;
        targets[i].innerText = targets[i+3].innerText;
        targets[i+3].innerText = tmp;
      } else if ( i >= 3 && targets[i-3].innerText == '') {
        // 上と入れ替え
        const tmp = targets[i].innerText;
        targets[i].innerText = targets[i-3].innerText;
        targets[i-3].innerText = tmp;
      } else if (i % 3 !== 2 && targets[i+1].innerText == '') {
        // 右と入れ替え
        const tmp = targets[i].innerText;
        targets[i].innerText = targets[i+1].innerText;
        targets[i+1].innerText = tmp;
      } else if (i % 3 !== 0 && targets[i-1].innerText == '') {
        // 左と入れ替え
        const tmp = targets[i].innerText;
        targets[i].innerText = targets[i-1].innerText;
        targets[i-1].innerText = tmp;
      }
    });
  }

});
