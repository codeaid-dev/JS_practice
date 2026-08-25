const panel = document.getElementById('panel');
const result = document.getElementById('result');

const judge = () => {
  for (let i=0; i<cards.length; i++) {
    if (0<=i%7 && i%7<=3) {
      if (cards[i].stat===1 && cards[i+1].stat===1 && cards[i+2].stat===1 && cards[i+3].stat===1)
        return 1;
      if (cards[i].stat===2 && cards[i+1].stat===2 && cards[i+2].stat===2 && cards[i+3].stat===2)
        return 2;
    }
    if (0<=i/7 && i/7<=2) {
      if (cards[i].stat===1 && cards[i+7].stat===1 && cards[i+14].stat===1 && cards[i+21].stat===1)
        return 1;
      if (cards[i].stat===2 && cards[i+7].stat===2 && cards[i+14].stat===2 && cards[i+21].stat===2)
        return 2;
    }
    if ((3<=i && i<=6) || (10<=i && i<=13) || (17<=i && i<=20)) {
      if (cards[i].stat===1 && cards[i+6].stat===1 && cards[i+12].stat===1 && cards[i+18].stat===1)
        return 1;
      if (cards[i].stat===2 && cards[i+6].stat===2 && cards[i+12].stat===2 && cards[i+18].stat===2)
        return 2;
    }
    if ((0<=i && i<=3) || (7<=i && i<=10) || (14<=i && i<=17)) {
      if (cards[i].stat===1 && cards[i+8].stat===1 && cards[i+16].stat===1 && cards[i+24].stat===1)
        return 1;
      if (cards[i].stat===2 && cards[i+8].stat===2 && cards[i+16].stat===2 && cards[i+24].stat===2)
        return 2;
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
    cards.forEach((data, index) => {
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
        }
      }
      if (judge()===1) {
        result.textContent = '赤の勝ち';
        over = true;
      }
      if (judge()===2) {
        result.textContent = '黄の勝ち';
        over = true;
      }
    });
  });
  panel.appendChild(card);
  const data = {
    stat: 0, // 0:other,1:red,2:yellow
    element: card
  };
  cards.push(data);
}

