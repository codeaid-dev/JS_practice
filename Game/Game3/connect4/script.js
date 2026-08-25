const panel = document.getElementById('panel');
const result = document.getElementById('result');

const judge = (i) => {
    const player = cards[i].stat;
    if (player === 0)
      return 0;
    const row = Math.floor(i / 7);
    const col = i % 7;
    const directions = [
        [1, 0],    // 右
        [0, 1],    // 下
        [1, 1],    // 右下
        [1, -1]    // 右上
    ];
    for (const [dx, dy] of directions) {
      let count = 1
      // 正方向を調べる
      for (let n=1; n<4; n++) {
        const x = col + dx * n;
        const y = row + dy * n;
        if (0 <= x && x < 7 &&
          0 <= y && y < 6) {
          const index = y * 7 + x;
          if (cards[index].stat === player) {
            count += 1
          } else {
            break;
          }
        } else {
          break;
        }
      }
      // 逆方向を調べる
      for (let n=1; n<4; n++) {
        const x = col - dx * n;
        const y = row - dy * n;
        if (0 <= x && x < 7 &&
          0 <= y && y < 6) {
          const index = y * 7 + x;
          if (cards[index].stat === player) {
            count += 1
          } else {
            break;
          }
        } else {
          break;
        }
      }
      if (count >= 4) {
        return player;
      }
    }
    return 0;
};
let over = false;
let turn = false // true:red, false:yellow
const cards = [];
for (let i=0; i<42; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.addEventListener('click', (event) => {
    if (over) return;
    for (const [index,data] of cards.entries()) {
      if (data.element === event.target) {
        if ((index>=35 && data.stat==0)
           || (index<35 && cards[index+7].stat!=0 && data.stat==0)) {
          if (turn) {
            event.target.style.backgroundColor = 'red';
            turn = false;
            data.stat = 1;
          } else {
            event.target.style.backgroundColor = 'yellow';
            turn = true;
            data.stat = 2;
          }
          // 今置いたコマを起点に判定
          const winner = judge(index);
          if (winner===1) {
            result.textContent = '赤の勝ち';
            over = true;
          }
          if (winner===2) {
            result.textContent = '黄の勝ち';
            over = true;
          }
          break;
        }
      }
    }
  });
  panel.appendChild(card);
  const data = {
    stat: 0, // 0:other,1:red,2:yellow
    element: card
  };
  cards.push(data);
}

