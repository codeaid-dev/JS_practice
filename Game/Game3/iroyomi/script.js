const iro = ['red', 'green', 'blue', 'orange'];
const yomi = ['赤', '緑', '青', '黄'];
const question = ['いろ', 'よみ'];
let numIro = 0;
let numYomi = 0;
let numQ = 0;
let score = 0;
let intervalId = null;
let time = 0;
const panel = document.getElementById('panel');
for (let i=0; i<9; i++) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  if (i === 0) {
    tile.style.backgroundColor = iro[0];
  } else if (i === 2) {
    tile.style.backgroundColor = iro[1];
  } else if (i === 6) {
    tile.style.backgroundColor = iro[2];
  } else if (i === 8) {
    tile.style.backgroundColor = iro[3];
  }
  panel.appendChild(tile);
}

const init = ()  => {
  for (let [index, element] of [...panel.children].entries()) {
    if (index === 4) {
      element.style.fontSize = '80px';
      numYomi = Math.floor(Math.random()*yomi.length);
      element.textContent = yomi[numYomi];
      numIro = Math.floor(Math.random()*iro.length);
      element.style.color = iro[numIro];
    } else if (index === 7) {
      numQ = Math.floor(Math.random()*question.length);
      element.textContent = question[numQ];
    }
  }
}
init();

const judge = (event) => {
  if (numQ === 0) {
    if (event.target.style.backgroundColor === iro[numIro]) {
      score += 1;
      result.textContent = `SCORE: ${score}`;
      init();
    }
  } else {
    if (event.target.style.backgroundColor === iro[numYomi]) {
      score += 1;
      result.textContent = `SCORE: ${score}`;
      init();
    }
  }
}

const result = document.getElementById('result');
result.textContent = `SCORE: ${score}`;
const timer = document.getElementById('timer');
timer.textContent = `経過時間: ${time}秒`;

panel.addEventListener('click', judge);

intervalId = setInterval(() => {
  if (time === 20) {
    clearInterval(intervalId);
    panel.removeEventListener('click', judge);
  }
  timer.textContent = `経過時間: ${time}秒`;
  time += 1;
}, 1000);
