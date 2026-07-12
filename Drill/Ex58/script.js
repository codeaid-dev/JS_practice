const slots = document.querySelectorAll('.slot');
const stops = document.querySelectorAll('.btn');
const start = document.querySelector('#start');
const result = document.querySelector('#result');
const s_stat = [false, false, false];
const cnt = [1,3,5];
let timer_id;
start.addEventListener('click', () => {
  result.innerHTML = '';
  s_stat.fill(false);
  timer_id = setInterval(()=>{
    for (let i in s_stat) {
      if (!s_stat[i]) {
        if (++cnt[i] > 7)
          cnt[i] = 1;
        slots[i].innerHTML = '<img src="../img/slot' + cnt[i] + '.png">';
      }
    }
  }, 300);
  start.disabled = true;
});

for (const [i, stop] of stops.entries()) {
  stop.addEventListener('click', () => {
    if (!s_stat[i])
      s_stat[i] = true;

    if (s_stat.indexOf(false) === -1) {
      clearInterval(timer_id);
      start.disabled = false;
      if (cnt[0] === cnt[1] && cnt[1] === cnt[2]) {
        result.innerHTML = '<span style="color:red;">3つ揃いました！！おめでとう</span>';
      } else if (cnt[0] === cnt[1] || cnt[1] === cnt[2] || cnt[0] === cnt[2]) {
        result.innerHTML = '<span style="color:black;">おしい！もうちょっと</span>';
      } else {
        result.innerHTML = '<span style="color:gray;">残念でした・・・</span>';
      }
    }
  });
}
