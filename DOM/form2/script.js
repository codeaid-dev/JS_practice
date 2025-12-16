const oderForm = document.forms['oder'];
oderForm.addEventListener('submit', () => {
  const menu = oderForm.elements['menu'];
  console.log(menu.value);
  const meal = oderForm.elements['meals'];
  console.log(meal.value);
  const items = document.querySelectorAll('[name="add-item"]:checked');
  items.forEach((element) => {
    console.log(element.value);
  });
});
