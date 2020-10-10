let wdays = ['日','月','火','水','木','金','土'];
let btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
  let month = document.querySelector('#month');
  let cal = document.querySelector('#calendar');
  cal.innerHTML = '';
  //if(cal.hasChildNodes()) {
    //cal.removeChild(cal.firstChild);
  //}
  let startDate = new Date(year.value,(month.value-1), 1); // 月の最初
  let endDate = new Date(year.value,month.value, 0); // 月の最後
  let table = document.createElement('table');
  let cnt = 1;
  for (let i = 0; i < 7; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      let td = document.createElement('td');
      if (i == 0) {
        td.innerText = wdays[j];
      } else if (i == 1) {
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
