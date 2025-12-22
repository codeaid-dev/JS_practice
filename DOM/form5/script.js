const prefForm = document.forms['data'];
const selected = [];
prefForm.addEventListener('submit', () => {
  const select = prefForm.elements['prefecture'];
  for (let s of select) {
    if (s.selected) {
      selected.push(s.value);
    }
  }
  console.log(selected);
});
