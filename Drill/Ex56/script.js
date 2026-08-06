const headings = document.querySelectorAll('#content h1, h2, h3');
const toc = document.getElementById('toc');
const topul = document.createElement('ul');
toc.appendChild(topul);
let currentH1, currentH2;

headings.forEach(h => {
  const level = Number(h.tagName[1]);
  const item = document.createElement('li');
  item.textContent = h.textContent;

  if (level === 1) {
    topul.appendChild(item);
    currentH1 = item;
    currentH2 = null;
  }

  if (level === 2 && currentH1) {
    const secondul = document.createElement('ul');
    secondul.appendChild(item);
    currentH1.appendChild(secondul);
    currentH2 = item;
  }

  if (level === 3 && currentH2) {
    const thirdul = document.createElement('ul');
    thirdul.appendChild(item);
    currentH2.appendChild(thirdul);
  }
});
