const add = document.getElementById('add');
const move = document.getElementById('move');
const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');

add.addEventListener('click', () => {
  const new_block = document.createElement('div');
  new_block.textContent = '新しいブロック';
  block2.insertAdjacentElement('afterend', new_block);
});
move.addEventListener('click', () => {
  block1.insertAdjacentElement('beforebegin', block2);
});
