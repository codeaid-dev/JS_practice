document.querySelector('#add').addEventListener('click', ()=>{
  let todo = document.querySelector('#todoMemo');
  if (todo.value.trim() === '') return;
  document.querySelector('#memo').innerHTML += `<li>${todo.value}</li>`;
  todo.value = '';
});
document.querySelector('#delete').addEventListener('click', ()=>{
  document.querySelector('#memo').innerHTML = '';
});
