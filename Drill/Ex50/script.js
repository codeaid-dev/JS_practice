const data = ['A', 'B', 'C', 'D', 'E'];
let mode = 'list';

const render = () => {
  const view = document.getElementById('view');
  const list = document.createElement('ul');
  view.innerHTML = '';
  if (mode === 'list') {
    view.appendChild(list);
  }

  data.forEach(d => {
    const el = document.createElement(mode === 'list' ? 'li' : 'div');
    el.textContent = d + ' ';
    if (mode === 'list') {
      list.appendChild(el);
    } else {
      view.appendChild(el);
    }
  });
}

document.getElementById('toggle').addEventListener('click', () => {
  mode = mode === 'list' ? 'card' : 'list';
  render();
});

render();
