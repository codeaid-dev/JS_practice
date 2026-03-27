document.querySelector('#add').addEventListener('click', ()=>{
  let todo = document.querySelector('#memo');
  if (todo.value.trim() === '') return;
  document.querySelector('#list').innerHTML += `<li>${todo.value}</li>`;
  todo.value = '';
});
document.querySelector('#delete').addEventListener('click', ()=>{
  document.querySelector('#list').innerHTML = '';
});
