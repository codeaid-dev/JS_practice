const oderForm = document.forms['data'];
oderForm.addEventListener('submit', () => {
  const select = oderForm.elements['prefecture'];
  console.log(select.value);
});
