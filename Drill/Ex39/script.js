const checks = document.querySelectorAll('input[type="checkbox"]');
const items = document.querySelectorAll('#items li');

checks.forEach((cb) => {
  cb.addEventListener('change', updateFilter);
});
updateFilter();

function updateFilter() {
  const checkTypes = [...checks].filter((cb) => cb.checked);
  const activeTypes = [];
  checkTypes.forEach((cb) => {
    activeTypes.push(cb.value);
  });
  // const activeTypes = [...checks].filter(cb => cb.checked).map(cb => cb.value);

  items.forEach(item => {
    const type = item.dataset.type;
    if (activeTypes.includes(type))
      item.style.display = 'list-item';
    else
      item.style.display = 'none';
    // item.style.display = activeTypes.includes(type) ? 'list-item' : 'none';
  });
}
