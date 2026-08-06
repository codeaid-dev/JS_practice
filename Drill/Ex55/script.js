let data = ['項目1', '項目2', '項目3', '項目4'];

const history = [];
const future=[];
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
      // history.push([...data]);
      // Undo用に差分だけ保存
      history.push({
        index:index,
        item:item
      })

      // 新しい操作をしたらRedo履歴は破棄
      future.length = 0;
      data.splice(index,1);
      render();
    });
    li.appendChild(btn);
    list.appendChild(li);
  });
};

undo.addEventListener('click', ()=>{
  if(history.length===0)return;

  // Redo用に現在を保存
  // future.push([...data]);
  // 配列を元の場所へ戻す
  // data = history.pop(); // Undo
  // 差分だけ保存したものを元の場所へ戻す
  const last = history.pop();
  data.splice(last.index,0,last.item);
  future.push(last);

  render();
});

redo.addEventListener('click', ()=>{
  if(future.length===0)return;
  // Undoできるように現在を保存
  // history.push([...data]);
  // data = future.pop(); // Redo

  // 差分だけ保存したものをやり直し
  const last=future.pop();
  history.push(last);
  data.splice(last.index,1);

  render();
});
render();
