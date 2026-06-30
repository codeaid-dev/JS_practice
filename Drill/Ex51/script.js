const words = ['apple', 'banana', 'grape', 'りんご', 'みかん', 'いちご'];
const input = document.getElementById('input');
const suggest = document.getElementById('suggest');

input.addEventListener('input', () => {
  suggest.innerHTML = '';
  if (!input.value) return;

  words.filter(w => w.includes(input.value))
    .forEach(w => {
      const li = document.createElement('li');
      li.textContent = w;
      li.addEventListener('click', () => {
        input.value = w;
        suggest.innerHTML = '';
      });
      suggest.appendChild(li);
    });
});
