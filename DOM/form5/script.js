const oderForm = document.forms['data'];
const selected = [];
oderForm.addEventListener('submit', () => {
  const select = oderForm.elements['prefecture'];
  for (let s of select) {
    if (s.selected) {
      selected.push(s.value);
    }
  }
  console.log(selected);
});
