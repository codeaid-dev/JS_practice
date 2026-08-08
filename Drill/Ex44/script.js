document.getElementById('list').addEventListener('click', event => {
  if (!event.target.classList.contains('edit')) return;

  const li = event.target.closest('li');
  const span = li.querySelector('.text');

  const input = document.createElement('input');
  input.value = span.textContent;

  const saveBtn = document.createElement('button');
  saveBtn.textContent = '保存';

  li.replaceChild(input, span);
  li.replaceChild(saveBtn, event.target);

  saveBtn.addEventListener('click', () => {
    span.textContent = input.value;
    li.replaceChild(span, input);
    li.replaceChild(event.target, saveBtn);
  });
});
