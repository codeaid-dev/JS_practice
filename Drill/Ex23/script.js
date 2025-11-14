const col = document.querySelector('#col');
const row = document.querySelector('#row');
const contents = document.querySelector('#contents');
const btn = document.querySelector('button');
const result = document.querySelector('#result');
btn.addEventListener('click', () => {
  if (col.value === '' || row.value === '' || contents.value === '') {
    result.innerHTML = '<span style="color:red;">空白の欄があります。</span>';
  } else if (isNaN(col.value) || isNaN(row.value)) {
    result.innerHTML = '<span style="color:red;">列数と行数は数値を入力してください。</span>';
  } else {
    let tbl = '<table>';
    for (let i=0; i<row.value; i++) {
      tbl += '<tr>';
      for (let j=0; j<col.value; j++) {
        tbl += `<td>${contents.value}</td>`;
      }
      tbl += '</tr>';
    }
    tbl += '</table>';
    result.innerHTML = tbl;
  }
});
