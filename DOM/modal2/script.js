document.querySelector('button').addEventListener('click', () => {
  const modal = document.createElement('div'); // モーダルウィンドウを生成
  modal.classList.add('modal');

  const inner = document.createElement('div'); // ウィンドウの中身を生成
  inner.classList.add('inner');
  inner.innerHTML = `
    <p>モーダルウインドウの中身です</p>
    <div><img src="janken_pa.png"></div>
  `;
  modal.appendChild(inner);
  document.body.appendChild(modal);

  inner.addEventListener('click', () => {
    document.body.removeChild(modal); // モーダルウィンドウを削除
  });
});
