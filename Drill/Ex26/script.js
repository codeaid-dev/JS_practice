const min = document.querySelector('#minutes');
const sec = document.querySelector('#seconds');
const timer = document.querySelector('#timer');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let timer_id = null;
start.addEventListener('click', () => {
  if ((min.value === '' && sec.value === '')
  || (min.value !== '') && isNaN(parseInt(min.value)) || parseInt(min.value) >= 60
  || (sec.value !== '') && isNaN(parseInt(sec.value)) || parseInt(sec.value) >= 60) {
    timer.innerHTML = '<spen style="color:red">有効な値を入力してください</spen>';
  } else {
    start.disabled = true;
    let min_cnt = min.value === '' ? 0 : parseInt(min.value);
    let sec_cnt = sec.value === '' ? 0 : parseInt(sec.value);
    let count = min_cnt * 60 + sec_cnt;
    timer.textContent = `${('0'+min_cnt.toString(10)).slice(-2)}:${('0'+sec_cnt.toString(10)).slice(-2)}`;
    timer_id = setInterval(() => {
      count--;
      min_cnt = Math.floor(count / 60);
      sec_cnt = count % 60;

      if (count <= 0) {
        clearInterval(timer_id);
        timer.textContent = 'タイマー終了';
        start.disabled = false;
      } else {
        timer.textContent = `${('0'+min_cnt.toString(10)).slice(-2)}:${('0'+sec_cnt.toString(10)).slice(-2)}`;
      }

    }, 1000);
  }
});

stop.addEventListener('click', () => {
  if (timer_id !== null) {
    console.log('in stop');
    clearInterval(timer_id);
    start.disabled = false;
  }
});
