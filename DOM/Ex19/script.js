const form = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const msg = document.getElementById('message');

form.addEventListener('submit', (event) => {
  const password = passwordInput.value;

  const regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[\S]{8,32}$/;

  if (!regex.test(password)) {
    event.preventDefault();
    msg.style.color = 'red';
    msg.textContent =
      'パスワードは8〜32文字で、大文字・小文字・数字・記号をすべて含めてください。';
  } else {
    msg.style.color = 'black';
    msg.textContent = '登録できました。';
  }
});
