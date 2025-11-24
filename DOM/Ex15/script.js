const search = document.getElementById('search');
const list = document.getElementById('list');
const items = list.querySelectorAll('li');
const noResult = document.getElementById('noResult');

search.addEventListener('input', () => {
  let count = 0;
  items.forEach(li => {
    if (li.textContent.includes(search.value)) {
      li.style.display = '';
      count++;
    } else {
      li.style.display = 'none';
    }
  });
  noResult.style.display = count === 0 ? 'block' : 'none';
});
