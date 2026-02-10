const list = document.getElementById('list');

list.addEventListener('click', (event) => {
  if (event.target.tagName !== 'LI') return;
  if (event.target.nextElementSibling === null) return;
  event.target.nextElementSibling.insertAdjacentElement('afterend', event.target);
});
