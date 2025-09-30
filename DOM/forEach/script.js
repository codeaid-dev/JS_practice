const items = document.querySelectorAll(".fruit");

items.forEach((el, i) => {
  el.textContent = `${i + 1}番目: ${el.textContent}`;
  el.style.color = "blue";
});
