// 各タイルの<div>を格納するリスト
let tiles = [];

// HTMLが表示されたとき
window.onload = () => {

  let initial = ['', '1', '2', '3', '4', '5', '6', '7', '8'];

  // タイルの場所をランダムに配置する
  for (let i = 1; i < initial.length; i++) {
    let w = Math.floor(Math.random() * i);
    let tmp = initial[i];
    initial[i] = initial[w];
    initial[w] = tmp;
  }

  // タイルの<div>を作成しpanelとリストへ追加
  for (let i = 0; i < initial.length; i++) {
    let div = document.createElement('div');
    div.className = 'tile';
    div.index = i;
    div.innerText = initial[i];
    div.onclick = click;
    panel.appendChild(div);
    tiles.push(div);
  }
}

// タイルのtextContentを入れ替える
function swap(i, k) {
  let temp = tiles[i].textContent;
  tiles[i].textContent = tiles[k].textContent;
  tiles[k].textContent = temp;
}

// クリック時の処理
function click(e) {
  let i = e.target.index;
  if (i <= 5 && tiles[i+3].textContent == '' ) {
    // 下と入れ替え
    swap(i, i+3);
  } else if ( i >= 3 && tiles[i-3].textContent == '') {
    // 上と入れ替え
    swap(i, i-3);
  } else if (i % 3 !== 2 && tiles[i+1].textContent == '') {
    // 右と入れ替え
    swap(i, i+1);
  } else if (i % 3 !== 0 && tiles[i-1].textContent == '') {
    // 左と入れ替え
    swap(i, i-1);
  }
}
