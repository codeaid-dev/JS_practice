const color = ['black', 'white'];
const panel = document.getElementById('panel');
for (let i=0; i<9; i++) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  tile.style.backgroundColor = color[Math.floor(Math.random()*2)];
  panel.appendChild(tile);
}

const change = (element) => {
  if (element.style.backgroundColor === 'white') {
    element.style.backgroundColor = 'black';
  } else {
    element.style.backgroundColor = 'white';
  }
}

panel.addEventListener('click', (event) => {
  const oto = new Audio('../audio/button31.mp3');
  oto.currentTime = 0;
  oto.play();
  const tiles = [...panel.children];
  for (let [index, element] of tiles.entries()) {
    if (event.target === element) {
      if (index <= 5) {
        // 下を変更
        change(tiles[index+3]);
      }
      if (index >= 3) {
        // 上を変更
        change(tiles[index-3]);
      }
      if (index % 3 !== 2) {
        // 右を変更
        change(tiles[index+1]);
      }
      if (index % 3 !== 0) {
        // 左を変更
        change(tiles[index-1]);
      }
    }
  }
  change(event.target);
});
