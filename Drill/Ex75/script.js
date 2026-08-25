// 8種類の色
const colors = ['red','blue','green','yellow','orange','purple','pink','cyan'];

const panel = document.getElementById('panel');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');
const result = document.getElementById('result');

let firstCard = null; // 1枚目
let secondCard = null; // 2枚目
let canClick = true; // クリック可/不可
// 次の2枚を選べる状態にする
const resetSelection = () => {
  firstCard = null;
  secondCard = null;
  canClick = true;
};
let matchedCount = 0; // 揃ったペアの数
let playing = false; // ゲーム中か否か
let startTime = 0; // ゲーム開始時間
let timerId = null; // タイマー
const startTimer = () => {
  // 開始時刻を保存
  startTime = performance.now();
  // タイマーを開始
  timerId = setInterval(() => {
    const elapsed =
        (performance.now() - startTime) / 1000;
    timer.textContent = elapsed.toFixed(1);
  }, 100);
};
const stopTimer = () => {
  clearInterval(timerId);
  timerId = null;
};

// ゲーム終了
const finish = () => {
    playing = false;
    canClick = false;
    // タイマー停止
    stopTimer();
    // 最終時間を計算
    const elapsed =
        (performance.now() - startTime) / 1000;
    // 最終時間を表示
    timer.textContent = elapsed.toFixed(1);
    // クリア表示
    result.textContent =
      `クリア！ タイム：${elapsed.toFixed(1)}秒`;
    // スタートボタンを再び有効にする
    start.disabled = false;
};

// カード作成(プレイ)
const createCards = () => {
  // 結果をクリアする
  result.textContent = '';
  panel.innerHTML = ''; // 全削除
  // 色のインデックスを2個ずつ作る
  const cards = [...colors.keys(), ...colors.keys()];
  // カードをシャッフル
  for (let i=cards.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  // cards.sort(() => Math.random() - 0.5);

  cards.forEach((colorIndex) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.color = colorIndex; // data-color=色のインデックス
    card.addEventListener('click', () => {
      // クリックできない状態なら何もしない
      if (!canClick) {
        return;
      }
      // すでに開いているカードなら何もしない
      if (card.classList.contains('open')) {
        return;
      }
      // 揃ったカードなら何もしない
      if (card.classList.contains('matched')) {
        return;
      }
      // カードを開く
      const index = Number(card.dataset.color);
      card.style.backgroundColor = colors[index];
      card.classList.add('open');
      // 1枚目
      if (firstCard === null) {
        firstCard = card;
        return;
      }
      // 2枚目
      secondCard = card;
      canClick = false;
      // 色が同じか判定
      if (firstCard.dataset.color === secondCard.dataset.color) {
        // ペア成立
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matchedCount++;
        // 次のペアを選べるようにする
        resetSelection();
        // 8ペア揃った
        if (matchedCount === colors.length) {
          finish();
        }
      } else {
        // 違う色なら1秒後に裏返す
        setTimeout(() => {
          firstCard.style.backgroundColor = '#444';
          secondCard.style.backgroundColor = '#444';
          firstCard.classList.remove('open');
          secondCard.classList.remove('open');
          resetSelection();
        }, 1000);
      }
    });
    // panelにカードを追加
    panel.appendChild(card);
  });
};

// ゲーム開始
start.addEventListener('click', () => {
    // すでにプレイ中なら何もしない
    if (playing) return;
    // ゲーム状態を初期化
    firstCard = null;
    secondCard = null;
    matchedCount = 0;
    canClick = true;
    playing = true;
    // 時間を0にする
    timer.textContent = '0.0';
    // カードを作り直してシャッフル
    createCards();
    // タイマー開始
    startTimer();
    // スタートボタンを無効化
    start.disabled = true;
});

// ゲームリセット
reset.addEventListener('click', () => {
    // ゲーム停止
    playing = false;
    canClick = false;
    // タイマー停止
    stopTimer();
    // カード選択状態をリセット
    firstCard = null;
    secondCard = null;
    matchedCount = 0;
    // 時間を0に戻す
    timer.textContent = '0.0';
    // カードを作り直す
    createCards();
    // スタートボタンを有効にする
    start.disabled = false;
});
