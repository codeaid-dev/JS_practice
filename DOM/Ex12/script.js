const eye = document.getElementById('eye');
eye.addEventListener('click', () => {
  const pw = document.getElementById('pw');
  pw.type = (pw.type === 'password') ? 'text' : 'password';
  console.log(pw.type);
});
