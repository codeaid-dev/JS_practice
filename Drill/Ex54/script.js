const data = ['項目1', '項目2', '項目3', '項目4'];

// 履歴
const undoHistory = [];
const list = document.getElementById('list');
const undo = document.getElementById('undo');

const render = ()=>{
  list.innerHTML = '';
  data.forEach((item,index)=>{
    const li = document.createElement('li');
    li.textContent = item;
    const btn = document.createElement('button');
    btn.textContent = '削除';
    btn.addEventListener('click', ()=>{
      // 配列をコピーし現在状態を保存
      // undoHistory.push([...data]);
      // 差分だけ保存
      undoHistory.push({
        index:index,
        value:item
      })

      data.splice(index,1);
      render();
    });
    li.appendChild(btn);
    list.appendChild(li);
  });
};

undo.addEventListener('click', ()=>{
  if(undoHistory.length===0)return;

  // 配列を元の場所へ戻す
  // data = undoHistory.pop();
  // 差分だけ保存したものを元の場所へ戻す
  const last = undoHistory.pop();
  data.splice(last.index,0,last.value);

  render();
});
render();
