const btn = document.querySelector('button');
const result = document.getElementById('result');
btn.addEventListener('click',()=>{
  let uranai = Math.floor(Math.random() * 10);
  if (uranai === 0) {
    result.setAttribute('style', 'background-color:blue');
    result.innerText = '大吉';
  } else if (uranai >= 1 && uranai <= 3) {
    result.setAttribute('style', 'background-color:green');
    result.innerText = '吉';
  } else if (uranai >= 4 && uranai <= 7) {
    result.setAttribute('style', 'background-color:yellow');
    result.innerText = '凶';
  } else if (uranai >= 8 && uranai <= 9) {
    result.setAttribute('style', 'background-color:red');
    result.innerText = '大凶';
  }
});
