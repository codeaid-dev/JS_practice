const all = document.getElementById('all');
const items = document.querySelectorAll('.item');

all.addEventListener('change', () => {
  items.forEach(item => item.checked = all.checked);
});

items.forEach(item => {
  item.addEventListener('change', () => {
    let count = 0;
    for (item of items) {
      if (item.checked) {
        count++;
      }
    }
    // const count = [...items].filter(i => i.checked).length;

    if (count === items.length) {
      all.checked = true;
    } else {
      all.checked = false;
    }
    if (count > 0 && count < items.length) {
      all.indeterminate = true;
    } else {
      all.indeterminate = false;
    }
    // all.checked = count === items.length;
    // all.indeterminate = count > 0 && count < items.length;
  });
});
