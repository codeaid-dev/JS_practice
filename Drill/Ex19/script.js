document.querySelector('form').addEventListener('input', () => {
  const r = document.querySelector('#colorR').value;
  const g = document.querySelector('#colorG').value;
  const b = document.querySelector('#colorB').value;
  const panel = document.querySelector('#panel');
  //panel.setAttribute('style', `background-color:rgb(${r} ${g} ${b})`);
  const hexR = ('0' + parseInt(r).toString(16)).slice(-2);
  const hexG = ('0' + parseInt(g).toString(16)).slice(-2);
  const hexB = ('0' + parseInt(b).toString(16)).slice(-2);
  const rgb = `#${hexR}${hexG}${hexB}`;
  document.querySelector('#color-code').innerHTML = rgb;
  panel.setAttribute('style', `background-color:${rgb}`);
});
/*
文字列から数値(整数)に変換するには、Number()やpaseInt()を使うが
その違いは以下
・Number()は文字列がすべて数字でなくてはならない
・Number()は文字列が小数点数のときは数値に変換後、小数点以下の処理が必要
＞切り捨て、切り上げ、丸め
・parseInt()は文字列に数字以外が含まれていても数値にできるが、文字列は数字で始まらなくてなならない
・parseInt()は文字列が小数点数のときは小数点以下を切り捨てる
※paseInt()は数値の小数点数(実数)でも使えるが処理が遅いので他の利用を推奨
*/