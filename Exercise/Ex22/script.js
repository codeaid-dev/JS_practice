const digit = document.querySelector('#digit');
const pass = document.querySelector('#pass');
const btn = document.querySelector('button');
const msg = document.querySelector('#msg');
const ascii = [];
for (let i = 33; i <= 126; i++) {
  ascii.push(String.fromCharCode(i));
}
btn.addEventListener('click',()=>{
  const password = [];
  msg.innerText = '';
  if (digit.value < 8 || digit.value > 32) {
    pass.value = '';
    msg.innerHTML = '<span style="color:red">桁数は8桁以上、32桁以下で生成してください。</span>';
  } else {
    for (let i = 0; i < digit.value; i++) {
      const index = Math.floor(Math.random() * ascii.length);
      password.push(ascii[index]);
    }
    pass.value = password.join('');
  }
});
