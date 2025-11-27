
const table = document.getElementById('table');
const tbody = table.querySelector('tbody');
const theads = table.querySelectorAll('th');
let asc = true;

for (let i=0; i<theads.length; i++) {
  theads[i].addEventListener('click', () => {
  });
}
theads.forEach((th, index) => {
  th.addEventListener('click', () => {
    const rows = [...tbody.querySelectorAll('tr')];
    rows.sort((a, b) => {
      const valA = a.children[index].textContent;
      const valB = b.children[index].textContent;
      return asc ? valA.localeCompare(valB, 'ja', { numeric: true }) : valB.localeCompare(valA, 'ja', { numeric: true });
    });
    rows.forEach(r => tbody.appendChild(r));

    const baseText = th.textContent.replace(/↑|↓/g, ''); // 元の文字だけ取り出す
    th.textContent = asc ? baseText + ' ↑' : baseText + ' ↓';
    asc = !asc;
  });
});