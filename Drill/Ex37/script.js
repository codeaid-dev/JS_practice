const yoko = document.querySelector('#yoko');
const tate = document.querySelector('#tate');
const iro = document.querySelector('#iro');
const cnt = document.querySelector('#cnt');
const result = document.querySelector('#result');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  if (yoko.value === '' || tate.value === '' || iro.value === '' || cnt.value === '') {
    result.innerHTML = '<span style="color:red;">空白の欄があります。</span>';
  } else if (isNaN(yoko.value) || isNaN(tate.value) || isNaN(cnt.value)) {
    result.innerHTML = '<span style="color:red;">横幅・縦幅・個数は数値を入力してください。</span>';
  } else if (Number(yoko.value) <= 0 || Number(tate.value) <= 0 || Number(cnt.value) <= 0) {
    result.innerHTML = '<span style="color:red;">横幅・縦幅・個数は1以上の数値を入力してください。</span>';
  } else {
    result.innerHTML = null;
    for (let i=0; i<cnt.value; i++) {
      const div = document.createElement('div');
      div.style.width = yoko.value + 'px';
      div.style.height = tate.value + 'px';
      div.style.background = iro.value;
      div.style.margin = '10px';
      div.style.float = 'left';
      //div.setAttribute('style', `width:${yoko.value}px;height:${tate.value}px;background:${iro.value};margin:10px;float:left;`);
      result.append(div);
    }
  }
});
