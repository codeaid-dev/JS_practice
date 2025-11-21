const items = document.getElementsByTagName('li');
console.log(items.length); // 2

// 新しい li を追加
const ul = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.textContent = 'みかん';
ul.appendChild(newLi);

console.log(items.length); // 3 ← 自動で更新される
