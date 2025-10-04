const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

// 通常関数をイベントリスナに使う
btn1.addEventListener("click", function(event) {
  // this, event.target は「クリックされた要素 (btn1)」を参照する
  console.log("通常関数 this.id:", this.id);
  console.log("通常関数 event.target.id:", event.target.id);
});

// アロー関数をイベントリスナに使う
btn2.addEventListener("click", (event) => {
  // アロー関数では this は外側のスコープを参照（ここでは window）
  console.log("アロー関数 this:", this);
  // btn2の要素を取得するには event.target を使う
  console.log("アロー関数 event.target.id:", event.target.id);
});
