const showtxts = ['表示するテキストを入力してください', 'サイズを入力してください', '色を入力してください', '表示数を入力してください'];
let text = '空です';
let size = 14;
let color = 'black';
let num = 1;
for (const [i, e] of showtxts.entries()) {
  console.log(i, e);
  let ans = prompt(e);
  if (i === 0 && ans !== '') {
    text = ans;
  } else if (i === 1 && ans !== '') {
    size = ans;
  } else if (i === 2 && ans !== '') {
    color = ans;
  } else if (i === 3 && ans !== '') {
    num = ans;
  }
}
show = document.getElementById('inner');
show.setAttribute('style', `font-size:${size}px; color:${color};`);

for (let cnt=0; cnt<num; cnt++) {
  // show.innerHTML += '<p>' + text + '</p>';
  show.insertAdjacentHTML('beforeend', `<p>${text}</p>`);
}
