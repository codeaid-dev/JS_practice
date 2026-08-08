const words = ['apple', 'banana', 'grape', 'りんご', 'みかん', 'いちご'];
const search = document.getElementById('search');
const suggest = document.getElementById('suggest');

search.addEventListener('input', () => {
  suggest.innerHTML = '';
  if (!search.value) return;

  words.filter(w => w.includes(search.value))
    .forEach(w => {
      const li = document.createElement('li');
      li.textContent = w;
      li.addEventListener('click', () => {
        search.value = w;
        suggest.innerHTML = '';
      });
      suggest.appendChild(li);
    });
});
