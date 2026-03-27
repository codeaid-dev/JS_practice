const memo = document.getElementById('memo');
const list = document.getElementById('list');

document.getElementById('add').addEventListener('click', ()=> {
  if (memo.value !== '') {
    const arr = memo.value.split('\n');
    console.log(arr);
    arr.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    memo.value = '';
  } else {
    console.log('blank');
  }
});
document.getElementById('delete').addEventListener('click', ()=> {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});
