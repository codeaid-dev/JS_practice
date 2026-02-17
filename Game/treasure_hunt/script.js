const WIDTH = 21;
const HEIGHT = 21;
const maze = [...Array(HEIGHT)].map(() => Array(WIDTH).fill(0));

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
}

const init = () => {
  panel.innerHTML = ''; // 子要素を全て削除
  for (let cell of maze) {
    cell.fill(0); // 0で初期化
  }
  make_maze();
  for (let y=0; y<HEIGHT; y++) {
    for (let x=0; x<WIDTH; x++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      if (maze[y][x] === 1) {
        tile.style.backgroundColor = 'grey';
      }
      panel.appendChild(tile);
    }
  }
}

init();
