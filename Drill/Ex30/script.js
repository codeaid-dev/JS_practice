  const notify = document.getElementById('notify');
  const notification = document.getElementById('notification');
  const close = document.getElementById('close');

  let timeoutId = null;

  function hideNotification() {
    notification.classList.add('hidden');
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  }

  notify.addEventListener('click', () => {
    notification.classList.remove('hidden');
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      hideNotification();
    }, 3000);
  });
  close.addEventListener('click', hideNotification);
