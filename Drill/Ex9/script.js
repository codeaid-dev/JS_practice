document.querySelector('form').addEventListener('change', () => {
  // const colors = document.getElementsByName('bgcolor');
  // for (let element of colors) {
  //   if (element.checked) {
  //     document.querySelector('#panel').style.background  = element.value;
  //   }
  // }

  // for (let i=0; i<colors.length; i++) {
  //   if (colors[i].checked) {
  //     document.querySelector('#panel').setAttribute('style', `background:${colors[i].value}`);
  //   }
  // }

  const color = document.querySelector('[name="bgcolor"]:checked');
  document.getElementById('panel').style.background = color.value;
});
