let data = ['項目1', '項目2', '項目3', '項目4'];

const history = [];

const list = document.getElementById('list');
const undo = document.getElementById('undo');

function render() {
  list.innerHTML = '';
  data.forEach((item,index)=>{
    const li = document.createElement('li');
    li.textContent = item;
    const del = document.createElement('button');
    del.textContent = '削除';
    del.style.marginLeft = '10px';

    del.addEventListener('click', () => {
      // 現在状態を保存
      history.push([...data]);
      data.splice(index,1);
      render();
    });
    li.appendChild(del);
    list.appendChild(li);
  });
}

undo.addEventListener('click', ()=>{
  if(history.length===0) return;
  data = history.pop();
  render();
});

render();
