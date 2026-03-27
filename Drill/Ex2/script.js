const one = document.getElementById('one');
const two = document.getElementById('two');
const btn = document.querySelector('button');
btn.addEventListener('click',()=>{
  const w1 = one.innerText;
  const w2 = two.innerText;
  one.innerText = w2;
  two.innerText = w1;
});
