let flag = true;
let count = 0;
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const tlight = document.getElementsByName('tlight');
const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
  for (let i=0; i<tlight.length; i++) {
    if (tlight[i].checked) {
      const select = tlight[i].value;
      if (select === 'green') {
        green.setAttribute('style', 'background:green');
        red.setAttribute('style', 'background:black');
      } else if (select === 'gtor') {
        green.setAttribute('style', 'background:green');
        red.setAttribute('style', 'background:black');
        const timer_id = setInterval(()=>{
          if (count <= 10) {
            if (flag) {
              green.setAttribute('style', 'background:green');
              flag = false;
            } else {
              green.setAttribute('style', 'background:black');
              flag = true;
            }
            count++;
          } else {
            green.setAttribute('style', 'background:black');
            red.setAttribute('style', 'background:red');
            flag = true;
            count = 0;
            clearInterval(timer_id);
          }
        }, 500);
      }
    }
  }
});
