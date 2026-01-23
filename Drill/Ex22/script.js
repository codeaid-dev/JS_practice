const list = document.getElementById('list');
let dragItem = null;

list.addEventListener('dragstart', event => { dragItem = event.target; });
list.addEventListener('dragover', event => event.preventDefault());
list.addEventListener('drop', event => {
  if (event.target.classList.contains('item') && event.target !== dragItem) {
    list.insertBefore(dragItem, event.target.nextSibling);
    console.log([...list.children].map(i => i.textContent));
  }
});
