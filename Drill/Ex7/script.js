const serials = document.getElementsByClassName('serial');
//const serials = document.querySelectorAll('.serial');
for (let i = 0; i < serials.length; i++) {
  serials[i].addEventListener('keyup', () => {
    if (serials[i].value.length >= serials[i].maxLength) {
      if (i < serials.length-1) {
        serials[i+1].focus();
      }
    }
  });
}
