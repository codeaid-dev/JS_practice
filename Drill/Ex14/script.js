document.querySelector('#choice').addEventListener('change', () => {
  const pic = document.querySelector('#choice').value;
  document.querySelector('#picture').setAttribute('src', `../img/slot${pic}.png`);
});
