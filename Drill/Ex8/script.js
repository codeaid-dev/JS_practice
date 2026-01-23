document.querySelector('#add').addEventListener('click', () => {
  const memo = document.querySelector('#memo');
  if (memo.value !== '') {
    document.querySelector('#list').innerHTML += `<li>${memo.value}</li>`;
    memo.value = '';
  }
});
document.querySelector('#delete').addEventListener('click', () => {
  document.querySelector('#list').innerHTML = '';
});
