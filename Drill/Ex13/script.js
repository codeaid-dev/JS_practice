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
