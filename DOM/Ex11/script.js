const terms = document.getElementById('terms');
const agree = document.getElementById('agree');
const sendbtn = document.getElementById('sendbtn');

// ▼ 利用規約が最下部までスクロールされたか判定
terms.addEventListener('scroll', () => {
  const bottom = terms.scrollHeight - terms.scrollTop === terms.clientHeight;
  if (bottom) {
    agree.disabled = false; // チェックボックスを有効化
  }
});

// ▼ チェックされたら送信ボタンを有効化
agree.addEventListener('change', () => {
  sendbtn.disabled = !agree.checked;
});
