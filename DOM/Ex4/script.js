// const input = document.getElementById('itemInput');
// const button = document.getElementById('addBtn');
// const list = document.getElementById('list');
const input = document.querySelector('#itemInput');
const button = document.querySelector('#addBtn');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    input.value = ''; // 入力をリセット
  }
});
