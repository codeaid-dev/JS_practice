// 要素を取得
const title = document.getElementById('title');
const button = document.getElementById('btn');

// ボタンクリックでテキスト変更
button.addEventListener('click', () => {
  title.textContent = 'ボタンがクリックされました！';
  title.style.color = 'red';
});
