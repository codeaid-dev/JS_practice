document.querySelector('#add').addEventListener('click', ()=>{
  const memo = document.querySelector('#todoMemo');
  document.querySelector('#memo').innerHTML += `<li>${memo.value}</li>`;
  memo.value = '';
});
document.querySelector('#delete').addEventListener('click', ()=>{
  document.querySelector('#memo').innerHTML = '';
});
