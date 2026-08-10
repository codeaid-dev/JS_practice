const search = document.querySelector("#search");
const userList = document.querySelector("#userList");

// ユーザーデータ
let users = [];

// 現在の状態
const state = {
    keyword: "",
    editingId: null
};

// 表示
function render() {
  userList.innerHTML = "";
  const result =
    users.filter(user => {
      const keyword = state.keyword.toLowerCase();
      return (user.name.toLowerCase().includes(keyword)
          || user.email.toLowerCase().includes(keyword));
    });
  result.forEach(user => {
    const tr = document.createElement("tr");
    // 編集モード
    if (state.editingId === user.id) {
      tr.innerHTML = `
          <td>${user.id}</td>
          <td>
            <input data-edit-name value="${user.name}">
          </td>
          <td>
            <input data-edit-email value="${user.email}">
          </td>
          <td>
            <button data-save="${user.id}">保存</button>
            <button data-cancel>キャンセル</button>
          </td>`;
    }
    else {
      tr.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>
            <button data-edit="${user.id}">編集</button>
            <button data-delete="${user.id}">削除</button>
          </td>`;
    }
    userList.append(tr);
  });
}

// 検索
search.addEventListener("input", () => {
  state.keyword = search.value;
  render();
});

// イベント委譲
userList.addEventListener("click", (event) => {
  // 編集
  const editButton = event.target.closest("[data-edit]");
  if (editButton) {
    state.editingId = Number(editButton.dataset.edit);
    render();
    return;
  }
  // キャンセル
  const cancelButton = event.target.closest("[data-cancel]");
  if (cancelButton) {
    state.editingId = null;
    render();
    return;
  }
  // 保存
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    const id = Number(saveButton.dataset.save);
    const user = users.find(user => user.id === id);
    const row = saveButton.closest("tr");
    const nameInput = row.querySelector("[data-edit-name]");
    const emailInput = row.querySelector("[data-edit-email]");
    user.name = nameInput.value;
    user.email = emailInput.value;
    state.editingId = null;
    render();
    return;
  }
  // 削除
  const deleteButton = event.target.closest("[data-delete]");
  if (deleteButton) {
    const id = Number(deleteButton.dataset.delete);
    const result = confirm("本当に削除しますか？");
    if (!result) return;
    users = users.filter(user => user.id !== id);
    render();
  }
});

// JSON取得
async function loadUsers() {
  try {
    const response = await fetch("users.json");
    if (!response.ok) {
      throw new Error(
        `ユーザー情報を取得できませんでした ${response.status}`
      );
    }
    users = await response.json();
    render();
  }
  catch (error) {
    console.error(error.message);
    userList.innerHTML =
      "<tr><td colspan='4'>読み込みに失敗しました</td></tr>";
  }
}

// JSON読み込み開始
loadUsers();
