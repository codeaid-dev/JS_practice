const lang = document.querySelectorAll('[name="lang"]');
const otherlang = document.getElementById('otherlang');
lang.forEach((element, i) => {
  element.addEventListener('change', (event)=> {
    if (event.target.value === 'other') {
      otherlang.disabled = false;
    } else {
      otherlang.disabled = true;
      otherlang.value = '';
    }
  });
});
