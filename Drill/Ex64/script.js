const color = ['red','green','blue','magenta','cyan'];
const data = Array.from({ length: 45 }, (_, i) => `Item ${i + 1}`);
const page = document.getElementById('page');
const pageText = document.getElementById('pageText');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentPage = 1;
const perPage = 9;

function render() {
  page.innerHTML = '';

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  data.slice(start, end).forEach(item => {
    const div = document.createElement('div');
    div.classList.add('tile');
    div.style.background = color[Math.ceil(start/perPage)];
    div.textContent = item;
    page.appendChild(div);
  });

  pageText.textContent = `${currentPage} / ${Math.ceil(data.length / perPage)}`;

  if (currentPage <= 1) prev.disabled = true;
  else prev.disabled = false;
  if (currentPage >= Math.ceil(data.length / perPage)) next.disabled = true;
  else next.disabled = false;
}

prev.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    render();
  }
});

next.addEventListener('click', () => {
  if (currentPage * perPage < data.length) {
    currentPage++;
    render();
  }
});

render();
