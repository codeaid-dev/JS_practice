let stat = 'green';
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const tlight = document.getElementsByName('tlight');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  for (let i=0; i<tlight.length; i++) {
    if (tlight[i].checked) {
      const select = tlight[i].value;
      if (select === 'green') {
        green.setAttribute('style', 'background:green');
        yellow.setAttribute('style', 'background:black');
        red.setAttribute('style', 'background:black');
      } else if (select === 'red') {
        green.setAttribute('style', 'background:black');
        yellow.setAttribute('style', 'background:black');
        red.setAttribute('style', 'background:red');
      } else if (select === 'gtor') {
        if (stat === 'green') {
          green.setAttribute('style', 'background:green');
          yellow.setAttribute('style', 'background:black');
          red.setAttribute('style', 'background:black');
          stat = 'yellow';
        }
        const timer_id = setInterval(() => {
          if (stat === 'yellow') {
            green.setAttribute('style', 'background:black');
            yellow.setAttribute('style', 'background:yellow');
            red.setAttribute('style', 'background:black');
            stat = 'red';
          } else if (stat === 'red') {
            green.setAttribute('style', 'background:black');
            yellow.setAttribute('style', 'background:black');
            red.setAttribute('style', 'background:red');
            stat = 'green';
            clearInterval(timer_id);
          }
        }, 2000);
      }
    }
  }
});
