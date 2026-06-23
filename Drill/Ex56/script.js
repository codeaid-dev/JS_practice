const monthYear = document.getElementById('monthYear');
const calendar = document.getElementById('calendar');
const selected = document.getElementById('selected');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const todayBtn = document.getElementById('todayBtn');
const jump = document.getElementById('jump');
const inputMonth = document.getElementById('inputMonth');

const date = new Date();
const today = [date.getFullYear(), date.getMonth(), date.getDate()];
const days = ['日','月','火','水','木','金','土'];

function renderCalendar() {
  calendar.innerHTML = '';
  const year = date.getFullYear();
  const month = date.getMonth();
  monthYear.textContent = `${year}年 ${month + 1}月`;
  const firstDay = new Date(year, month, 1).getDay(); //月の最初
  const lastDate = new Date(year, month + 1, 0).getDate(); //月の最後
  const table = document.createElement('table');
  let row = document.createElement('tr');
  for (let i = 0; i < days.length; i++) {
    const day = document.createElement('th');
    day.textContent = days[i];
    row.appendChild(day);
  }
  table.appendChild(row);
  row = document.createElement('tr');
  for (let i = 0; i < firstDay; i++) row.appendChild(document.createElement('td'));
  for (let d = 1; d <= lastDate; d++) {
    const cell = document.createElement('td');
    cell.textContent = d;
    if (year === today[0] && month === today[1] && d === today[2]) {
      cell.style.color = 'orange';
    }
    row.appendChild(cell);
    if ((firstDay + d) % 7 === 0) {
      table.appendChild(row);
      row = document.createElement('tr');
    }
  }
  table.appendChild(row);
  calendar.appendChild(table);
}

prev.addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

next.addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

todayBtn.addEventListener('click', () => {
  const now = new Date();
  date.setFullYear(now.getFullYear());
  date.setMonth(now.getMonth());
  renderCalendar();
});

jump.addEventListener('click', () => {
  const jumpMonth = inputMonth.value;
  if (jumpMonth.length != 0) {
    const j = new Date(jumpMonth);
    date.setFullYear(j.getFullYear());
    date.setMonth(j.getMonth());
    renderCalendar();
  }
});

renderCalendar();
