const tiles = document.querySelectorAll('.tile');
let index = 4;

function update() {
  tiles.forEach((li, i) => {
    li.classList.toggle('active', i === index);
  });
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    console.log('Right');
    if ((index + 1) % 3 !== 0) index += 1;
    console.log(index);
  }
  if (e.key === 'ArrowLeft') {
    console.log('Left');
    if (index !== 0 && (index - 1) % 3 !== 2) index -= 1;
    console.log(index);
  }
  if (e.key === 'ArrowDown') {
    console.log('Down');
    if (index + 3 < tiles.length) index += 3;
    console.log(index);
  }
  if (e.key === 'ArrowUp') {
    console.log('Up');
    if (index - 3 >= 0) index -= 3;
    console.log(index);
  }
  update();
});

update();
