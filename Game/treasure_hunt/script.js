const WIDTH = 21;
const HEIGHT = 21;
const maze = [...Array(HEIGHT)].map(() => Array(WIDTH).fill(0));
let px = 0;
let py = 0;
let finish = false;
const panel = document.getElementById('panel');

const make_maze = () => {
  const dx = [-1,1,0,0];
  const dy = [0,0,1,-1];
  for (let y=1; y<HEIGHT-1; y+=2) {
    for (let x=1; x<WIDTH-1; x+=2) {
      maze[y][x] = 1;
      let num = Math.floor(Math.random()*3);
      if (y === 1) num = Math.floor(Math.random()*4);
      maze[y+dy[num]][x+dx[num]] = 1;
    }
  }
  px = 0;
  py = 0;
  maze[py][px] = 3;
}

const set_treacure = () => {
  while (true) {
    const x = Math.floor(Math.random()*WIDTH);
    const y = Math.floor(Math.random()*HEIGHT);
    if (maze[y][x] !== 0) continue;
    maze[y][x] = 2;
    break;
  }
}

const init = () => {
  for (let cell of maze) {
    cell.fill(0); // 0で初期化
  }
  make_maze();
  set_treacure();
}
init();

const draw_tiles = () => {
  panel.innerHTML = ''; // 子要素を全て削除
  for (let y=0; y<HEIGHT; y++) {
    for (let x=0; x<WIDTH; x++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      if (maze[y][x] === 1) {
        tile.style.backgroundColor = 'grey';
      } else if (finish && maze[y][x] === 2) {
        tile.style.backgroundColor = 'red';
      } else if (maze[y][x] === 3) {
        tile.style.backgroundColor = 'green';
      }
      panel.appendChild(tile);
    }
  }
}
draw_tiles();

document.addEventListener('keydown', e => {
  if (finish) return;
  maze[py][px] = 0;
  if (e.key === 'ArrowRight') {
    if (px >= 0 && px < WIDTH-1 && maze[py][px+1] !== 1) {
      px += 1;
    }
  }
  if (e.key === 'ArrowLeft') {
    if (px > 0 && px <= WIDTH-1 && maze[py][px-1] !== 1) {
      px -= 1;
    }
  }
  if (e.key === 'ArrowDown') {
    if (py >= 0 && py < HEIGHT-1 && maze[py+1][px] !== 1) {
      py += 1;
    }
  }
  if (e.key === 'ArrowUp') {
    if (py > 0 && py <= HEIGHT-1 && maze[py-1][px] !== 1) {
      py -= 1;
    }
  }
  if (maze[py][px] === 0) maze[py][px] = 3;
  else if (maze[py][px] === 2) finish = true;
  draw_tiles();
});
