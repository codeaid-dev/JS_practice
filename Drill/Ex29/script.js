document.querySelector('#add').addEventListener('click', ()=>{
  let memo = document.querySelector('#todoMemo');
  document.querySelector('#memo').innerHTML += `<li>${memo.value}</li>`;
  memo.value = '';
});
document.querySelector('#delete').addEventListener('click', ()=>{
  document.querySelector('#memo').innerHTML = '';
});
