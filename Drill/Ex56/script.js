const data = [];

const undoHistory = [];
const redoHistory = [];
const intext = document.getElementById('text');
const add = document.getElementById('add');
const list = document.getElementById('list');
const undo = document.getElementById('undo');
const redo = document.getElementById('redo');

let number = 1;

//-------------------------
// リスト項目を表示
//-------------------------
const render = () => {
  list.innerHTML = '';
  data.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    const btn = document.createElement('button');
    btn.textContent = '削除';
    btn.addEventListener('click', () => {
      undoHistory.push({
        type: 'delete',
        value: item,
        index: index
      });
      redoHistory.length = 0;
      data.splice(index, 1);
      render();
    });

    li.appendChild(btn);
    list.appendChild(li);
  });
};
render();

//-------------------------
// 追加(Add)
//-------------------------
add.addEventListener('click', () => {
  if (intext.value.trim() === '') return;
  data.push(intext.value);
  undoHistory.push({
    type: 'add',
    value: intext.value
  });
  redoHistory.length = 0;
  intext.value = '';
  render();
});

//-------------------------
// 元に戻す(Undo)
//-------------------------
undo.addEventListener('click', () => {
  if (undoHistory.length === 0) return;
  const action = undoHistory.pop();
  switch (action.type) {
    case 'add':
      data.pop();
      redoHistory.push(action);
      break;
    case 'delete':
      data.splice(action.index, 0, action.value);
      redoHistory.push(action);
      break;
  }
  render();
});

//-------------------------
// やり直し(Redo)
//-------------------------
redo.addEventListener('click', () => {
  if (redoHistory.length === 0) return;
  const action = redoHistory.pop();
  switch (action.type) {
    case 'add':
      data.push(action.value);
      undoHistory.push(action);
      break;
    case 'delete':
      data.splice(action.index, 1);
      undoHistory.push(action);
      break;
  }
  render();
});
