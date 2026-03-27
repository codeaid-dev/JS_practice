const wdays = ['日','月','火','水','木','金','土'];
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  const year = document.querySelector('#year');
  const month = document.querySelector('#month');
  const cal = document.querySelector('#calendar');
  cal.innerHTML = '';
  //if(cal.hasChildNodes()) {
    //cal.removeChild(cal.firstChild);
  //}
  const startDate = new Date(year.value,(month.value-1), 1); // 月の最初
  const endDate = new Date(year.value,month.value, 0); // 月の最後
  const table = document.createElement('table');
  let cnt = 1;
  for (let i = 0; i < 7; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const td = document.createElement('td');
      if (i === 0) {
        td.innerText = wdays[j];
      } else if (i === 1) {
        if (j >= startDate.getDay()) {
          td.innerText = cnt;
          cnt++;
        }
      } else {
        if (cnt <= endDate.getDate()) {
          td.innerText = cnt;
          cnt++;
        }
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  cal.appendChild(table);
});
