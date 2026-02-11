const template = document.getElementById('template');
const blocks = document.getElementById('blocks');

document.getElementById('add').addEventListener('click', () => {
  const item = document.querySelector('[name="item"]');
  if (item.value.length > 0) {
    addItem(item.value);
  }
});

function addItem(value) {
  const clone = template.cloneNode(true);
  clone.hidden = false;
  clone.querySelector('.contents').textContent = value;

  clone.querySelector('.remove').addEventListener('click', () => {
    clone.remove();
  });

  blocks.appendChild(clone);
}
