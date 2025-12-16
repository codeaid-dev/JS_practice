const oderForm = document.forms['oder'];
oderForm.addEventListener('submit', (event) => {
  const menu = oderForm.elements['menu'];
  console.log(menu.value);
  const meal = oderForm.elements['meals'];
  console.log(meal.value);
  const items = document.querySelectorAll('[name="add-item"]:checked');
  items.forEach((element) => {
    console.log(element.value);
  });
  if (menu.value.length === 0) {
    const err = document.getElementById('error');
    const msg = document.createElement('p');
    err.textContent = '食事が空白です。';
    err.appendChild(msg);
    event.preventDefault();
  }
});
