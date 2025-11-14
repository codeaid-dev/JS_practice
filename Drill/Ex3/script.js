const bread_list = ['あんぱん', 'クリームパン', 'メロンパン', 'カレーパン'];
const bread = document.getElementsByName('bread');
for (let i=0; i<bread.length; i++) {
  bread[i].addEventListener('click', () => {
    document.querySelector('#result').textContent = `あなたが選んだのは${bread_list[bread[i].value]}です。`;
    document.querySelector('#result').style.color = 'red';
    // document.querySelector('#result').innerHTML = `<span style="color:red;">
    //                                 あなたが選んだのは${bread_list[bread[i].value]}です。
    //                                 </span>`;
  });
}
