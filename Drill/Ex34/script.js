let data = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const panel = document.getElementById('panel');
let dragItem = null;

for (let i=0; i<36; i++) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  if (data.length !== 0) {
    const index = Math.floor(Math.random()*data.length);
    tile.textContent = data[index];
    tile.draggable = true;
    data = data.replace(data[index], '');
  }
  panel.appendChild(tile);
}

panel.addEventListener('dragstart', event => { dragItem = event.target; });
panel.addEventListener('dragover', event => event.preventDefault());
panel.addEventListener('drop', event => {
if (event.target.classList.contains('tile') && event.target !== dragItem) {
  panel.insertBefore(dragItem, event.target.nextSibling);
  console.log([...panel.children].map(i => i.textContent));
}
});
