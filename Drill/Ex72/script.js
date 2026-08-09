let step = 0;
let timerId;
let count = 1;
let clear = false;
const TILES = 25;
const bar = document.getElementById('bar');
const start = document.getElementById('start');
const panel = document.getElementById('panel');
const result = document.getElementById('result');

for (let i=0; i<TILES; i++) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  tile.style.background = 'gray';
  panel.appendChild(tile);
  tile.addEventListener('click', (e) => {
    if (step < 100) {
      if (count === Number(e.currentTarget.textContent)) {
        if (count === TILES) {
          clearInterval(timerId);
          timerId = null;
          result.textContent = 'CLEAR';
          result.style.color = 'green';
          clear = true;
        }
        count += 1;
        e.currentTarget.style.background = 'skyblue';
      }
    }
  });
}

let nums;
const createNums = () => {
  nums = [];
  while (true) {
    if (nums.length == TILES) break;
    const n = Math.floor(Math.random()*TILES)+1;
    if (nums.includes(n)) continue;
    nums.push(n);
  }
};
createNums();

start.addEventListener('click', () => {
  if (timerId) return;
  createNums();
  const tile = document.querySelectorAll('.tile');
  tile.forEach((e, i) => {
    e.textContent = nums[i];
    e.style.background = 'white';
  });
  count = 1;
  step = 0;
  bar.style.width = 0;
  result.textContent = '';
  timerId = setInterval(() => {
    step += 4;
    bar.style.width = step + '%';
    if (step >= 100) {
      clearInterval(timerId);
      timerId = null;
      console.log(clear);
      if (!clear) {
        result.textContent = 'TIME UP';
        result.style.color = 'red';
      }
    }
  }, 1000);
});
