const zipcode = document.getElementById('zipcode');
const send = document.getElementById('send');
const error = document.getElementById('error');
send.addEventListener('click', (event) => {
  if (!/^\d{3}-?\d{4}$/.test(zipcode.value)) {
    event.preventDefault();
    error.textContent = '正しく郵便番号を入力してください';
  }
});
