const password = document.getElementById("password");
const register = document.getElementById("register");
const message = document.getElementById("message");

register.addEventListener("click", (event) => {
  // パスワードの登録条件
  const pattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!-/:-@[-`{-~]).{8,32}$/;
  if (!pattern.test(password.value)) {
    event.preventDefault();
    message.textContent =
      "英大文字、英小文字、数字、記号をそれぞれ1文字以上含み、8文字以上32文字以下で入力してください。";
    message.style.color = "red";
  }
});
