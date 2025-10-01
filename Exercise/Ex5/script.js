const checks = document.querySelectorAll('input');

/*
for (let i=0; i<checks.length; i++) {
  checks[i].addEventListener('click', ()=>{
    let price = 500;
    if (document.getElementById('c1').checked == true) {
      price += 200;
    }
    if (document.getElementById('c2').checked == true) {
      price += 100;
    }
    if (document.getElementById('c3').checked == true) {
      price += 300;
    }
    if (document.getElementById('c4').checked == true) {
      price += 400;
    }
    document.getElementById('total').innerText = price + '円';
  });
}
*/
checks.forEach((check) => {
  check.addEventListener('click', (event)=>{
    let price = 500;
    if (document.getElementById('c1').checked == true) {
      price += 200;
    }
    if (document.getElementById('c2').checked == true) {
      price += 100;
    }
    if (document.getElementById('c3').checked == true) {
      price += 300;
    }
    if (document.getElementById('c4').checked == true) {
      price += 400;
    }
    document.getElementById('total').innerText = price + '円';
  });
});
