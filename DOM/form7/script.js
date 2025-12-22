const volumeForm = document.forms['volume'];
volumeForm.addEventListener('submit', () => {
  const volume = volumeForm.elements['volume'];
  console.log(volume.value);
});

const volumeNum = document.querySelector('[name="volume"]');
const vnum = document.getElementById('vnum');
vnum.textContent = volumeNum.value;
volumeNum.addEventListener('change', () => {
  vnum.textContent = volumeNum.value;
});
