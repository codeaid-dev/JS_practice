const memo = document.getElementById('memo');
const add = document.getElementById('add');
const delAll = document.getElementById('delAll');
add.addEventListener('click', ()=>{
  const todo = document.getElementById('todoMemo');
  if (todo.value.trim() === '') return;
  const li = document.createElement('li');
  li.innerHTML = `
    ${todo.value}
    <button class="delete">削除</button>
  `;
  memo.appendChild(li);
  todo.value = '';
});
delAll.addEventListener('click', ()=>{
  memo.innerHTML = '';
});
memo.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (!li) return;

    // 削除ボタン
    if (event.target.classList.contains('delete')) {
      // event.stopPropagation();
      li.remove();
      return;
    }

    // 選択処理
    memo.querySelectorAll('li')
      .forEach(item => item.classList.remove('selected'));
    li.classList.add('selected');
});
