const btn = document.querySelector('button');
const elem = document.getElementById('result');
btn.addEventListener('click',()=>{
  let uranai = Math.floor(Math.random() * 10);
  if (uranai === 0) {
    elem.setAttribute('style', 'background-color:blue');
    elem.innerText = '大吉';
  } else if (uranai >= 1 && uranai <= 3) {
    elem.setAttribute('style', 'background-color:green');
    elem.innerText = '吉';
  } else if (uranai >= 4 && uranai <= 7) {
    elem.setAttribute('style', 'background-color:yellow');
    elem.innerText = '凶';
  } else if (uranai >= 8 && uranai <= 9) {
    elem.setAttribute('style', 'background-color:red');
    elem.innerText = '大凶';
  }
});
