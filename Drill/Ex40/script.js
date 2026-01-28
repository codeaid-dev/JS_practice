const tiles = document.querySelectorAll('.tile');

<<<<<<< HEAD
tiles.forEach((tile, i) => {
=======
// tiles.forEach((tile, i) => {
//   tile.addEventListener('click', () => {
//     if (tile.style.background === 'red') {
//       tile.style.background = null;
//       tile.innerText = '';
//     } else if (tiles[i].style.background === 'blue') {
//       tile.style.background = 'red';
//       tile.innerText = Number(i)+1;
//     } else {
//       tile.style = 'background:blue';
//       tile.innerText = Number(i)+1;
//     }
//   });
// });

for (let tile of tiles) {
>>>>>>> cb4fae48b5a054c5fc4e60aa6958f028492bca95
  tile.addEventListener('click', () => {
    if (tile.style.background === 'red') {
      tile.style.background = null;
      tile.innerText = '';
    } else if (tile.style.background === 'blue') {
      tile.style.background = 'red';
      tile.innerText = Number(i)+1;
    } else {
      tile.style = 'background:blue';
      tile.innerText = Number(i)+1;
    }
  });
});

// for (let tile of tiles) {
//   tile.addEventListener('click', () => {
//     if (tile.style.background === 'red') {
//       tile.style.background = null;
//       tile.innerText = '';
//     } else if (tile.style.background === 'blue') {
//       tile.style.background = 'red';
//       tile.innerText = Array.from(tiles).indexOf(tile)+1;
//     } else {
//       tile.style = 'background:blue';
//       tile.innerText = Array.from(tiles).indexOf(tile)+1;
//     }
//   });
// }
