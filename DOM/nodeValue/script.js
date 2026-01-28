let node = document.querySelector('body').firstChild;
let result = '<br>ノード名:<br>';
while (node) {
  result += `${node.nodeName} の値: ${node.nodeValue}<br>`;
  node = node.nextSibling;
}

const output = document.getElementById('result');
output.innerHTML = result;
