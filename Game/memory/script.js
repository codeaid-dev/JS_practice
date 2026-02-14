let start_time;      // 開始時間
let timer;          // 経過時間
let wait_time;      // カードをめくった時の待ち時間(setTimeoutの戻り値)
let flg_turn = true;  // true: 1枚目、false: 2枚目
let first_card;     // 1枚目のカードを格納(div要素)
let count = 0;      // 消した回数

document.addEventListener('DOMContentLoaded', () => {
  const arr = [];
  for (let i = 0; i < 10; i++) { // ペアの数字を10組
    arr.push(i);
    arr.push(i);
  }

  shuffle(arr);

  const panel = document.getElementById('panel');

  for (i = 0; i < 20; i++) { // カードを並べる
    const div = document.createElement('div');
    div.className = 'card back';
    div.index = i;
    div.number = arr[i];
    div.innerHTML = '';
    panel.appendChild(div);

    div.addEventListener('click', turn);
  }

  start_time = Date.now(); // 開始時刻を取得

  timer = setInterval(()=>{ // タイマー開始
    const elapsed_time = Math.floor((Date.now() - start_time) / 1000);
    const str = '経過時間: ' + elapsed_time + '秒';
  
    const re = document.getElementById('result');
    re.innerHTML = str;
   }, 1000);

});

/*
 * Fisher–Yates Shuffle https://bost.ocks.org/mike/shuffle/
 */
function shuffle(array) {
  let m = array.length;
  let temp, i;

  // While there remain elements to shuffle...
  while (m) {
    //Pick a remaining element...
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    temp = array[m];
    array[m] = array[i];
    array[i] = temp;
  }
  return array;
}

/*
 * クリックしたときにカードをめくる
 */
function turn(e){
  const div = e.target; // クリックされたカードのdiv要素

  if (wait_time) return; // 2枚目クリック時の待ち中はreturn

  if (div.innerHTML === '') { // 裏向きのカードをクリックした時は数字を表示
    div.className = 'card';
    div.innerHTML = div.number; 
  } else { // 数字が表示されているカードをクリックするとreturn
    return;
  }

  if (flg_turn) { // 1枚目をクリック
    first_card = div; // 1枚目カードを保存
    flg_turn = false; // 次は2枚目
  } else { // 2枚目をクリック
    if (first_card.number === div.number) { // 1枚目と2枚目が同じ
      count++;
      wait_time = setTimeout(()=>{ // 500ms後、透明にして非表示にする
        div.className = 'card finish';
        first_card.className = 'card finish';
        wait_time = NaN;
        
        if (count === 10) { // 全て消したらタイマー終了
            clearInterval(timer);
        }
      }, 500);

    } else { // 1枚目と2枚目が違う
      wait_time = setTimeout(()=>{ // 500ms後、カードを裏にする
        div.className = 'card back';
        div.innerHTML = '';
        first_card.className = 'card back';
        first_card.innerHTML = '';
        wait_time = NaN;
      }, 500);
    }

    flg_turn = true; // 次は1枚目
  }
}
