const data = ['項目1', '項目2', '項目3', '項目4'];

const undoHistory = [];
const redoHistory = [];
const list = document.getElementById('list');
const undo = document.getElementById('undo');
const redo = document.getElementById('redo');

const render = ()=>{
  list.innerHTML = '';
  data.forEach((item,index)=>{
    const li = document.createElement('li');
    li.textContent = item;
    const btn = document.createElement('button');
    btn.textContent = '削除';
    btn.addEventListener('click', ()=>{
      // 配列をコピーしUndo用に現在状態を保存
      // undoHistory.push([...data]);
      // Undo用に差分だけ保存
      undoHistory.push({
        index:index,
        value:item
      })

      // 新しい操作をしたらRedo履歴は破棄
      redoHistory.length = 0;
      data.splice(index,1);
      render();
    });
    li.appendChild(btn);
    list.appendChild(li);
  });
};

undo.addEventListener('click', ()=>{
  if(undoHistory.length===0)return;

  // Redo用に現在を保存
  // redoHistory.push([...data]);
  // 配列を元の場所へ戻す
  // data = undoHistory.pop(); // Undo
  // 差分だけ保存したものを元の場所へ戻す
  const last = undoHistory.pop();
  data.splice(last.index,0,last.value);
  redoHistory.push(last);

  render();
});

redo.addEventListener('click', ()=>{
  if(redoHistory.length===0)return;
  // Undoできるように現在を保存
  // undoHistory.push([...data]);
  // data = redoHistory.pop(); // Redo

  // 差分だけ保存したものをやり直し
  const last=redoHistory.pop();
  undoHistory.push(last);
  data.splice(last.index,1);

  render();
});
render();
