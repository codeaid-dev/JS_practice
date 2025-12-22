const prefForm = document.forms['data'];
prefForm.addEventListener('submit', () => {
  const select = prefForm.elements['prefecture'];
  console.log(select.value);
});
