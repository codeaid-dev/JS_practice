const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const btn = document.getElementById('switch');
btn.addEventListener('click', () => {
  // p1.contentEditable = !p1.isContentEditable;
  // p2.contentEditable = !p2.isContentEditable;
  p1.toggleAttribute('contenteditable');
  p2.toggleAttribute('contenteditable');
  console.log(p1.contentEditable);
  console.log(p2.contentEditable);
});
