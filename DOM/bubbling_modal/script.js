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

  // もしウィンドウの中身をクリックしたときだけモーダルを削除したい場合、
  // innterのclickイベントだけを取得してモーダルを削除する
  // inner.addEventListener('click', () => {
  modal.addEventListener('click', () => {
    document.body.removeChild(modal); // モーダルウィンドウを削除
  });
  // ウィンドウの中身をクリックしてもイベントを伝播しなくする
  inner.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});
