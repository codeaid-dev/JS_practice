const text = document.querySelector('[type="text"]');
const result = document.getElementById('result');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  // const colors = document.getElementsByName('color');
  // let color = 'black';
  // for (let e of colors) {
  //   if (e.checked) {
  //     color = e.value;
  //     break;
  //   }
  // }

  // const colors = document.querySelectorAll('[name="color"]');
  // let color = 'black';
  // colors.forEach((e) => {
  //   if (e.checked) {
  //     color = e.value;
  //   }
  // });

  const color = document.querySelector('[name="color"]:checked').value;
  result.setAttribute('style', `color: ${color}`);
  result.textContent = text.value;
});
