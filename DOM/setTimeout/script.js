let timerId;

const start = document.getElementById('start');
start.addEventListener('click', () => {
  timerId = setTimeout(() => {
    alert('5秒経過しました');
  }, 5000);
});

const cancel = document.getElementById('cancel');
cancel.addEventListener('click', () => {
  clearTimeout(timerId);
  alert('キャンセルしました');
});
