const ipt = document.querySelector('input');
const btn = document.querySelector('button');
const result = document.querySelector('#result');
btn.addEventListener('click',()=>{
  result.textContent = ipt.value;
});
