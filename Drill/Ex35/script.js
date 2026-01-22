const zipcode = document.getElementById('zipcode');
const send = document.getElementById('send');
const form = document.querySelector('form');
const error = document.getElementById('error');
form.addEventListener('submit', (event) => {
  if (!/^\d{3}-?\d{4}$/.test(zipcode.value)) {
    event.preventDefault();
    error.textContent = '正しく郵便番号を入力してください';
  }
});
