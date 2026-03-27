let cnt=1;
const timer_id = setInterval(() => {
  cnt++;
  if (cnt > 7) {
    cnt = 1;
  }
  document.querySelector('#panel').innerHTML = '<img src="../img/slot' + cnt + '.png">';
}, 3000);

document.querySelector('button').addEventListener('click', () => {
  clearInterval(timer_id);
});
