// const list = document.getElementById('list');
const list = document.querySelector('#list');

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.remove();
  }
});
