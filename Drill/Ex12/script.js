// const serials = document.getElementsByClassName('serial');
// for (let i = 0; i < serials.length; i++) {
//   serials[i].addEventListener('keyup', () => {
//     if (serials[i].value.length >= serials[i].maxLength) {
//       if (i < serials.length-1) {
//         serials[i+1].focus();
//       }
//     }
//   });
// }

// const serials = document.getElementsByClassName('serial');
// for (let input of serials) {
const serials = document.querySelectorAll('input.serial');
serials.forEach((input) => {
  input.addEventListener('keyup', (data) => {
    if (data.currentTarget.value.length >= input.maxLength) {
      if (data.currentTarget.nextElementSibling != null) {
        data.currentTarget.nextElementSibling.focus();
      }
    }
  });
});
// }
