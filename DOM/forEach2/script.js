const els = document.getElementsByClassName("fruit");

// Array.from() で配列に変換
Array.from(els).forEach(el => {
  el.style.color = "red";
});
