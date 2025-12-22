const up = document.querySelector('[name="up"]');
const ftype = document.querySelectorAll('[name="file-type"]');
ftype.forEach((element) => {
  element.addEventListener('change', (event) => {
    up.accept = element.value;
    console.log(element.value);
  });
});
up.addEventListener('change', (event) => {
  const file = event.currentTarget.files[0];
  const fname = file.name;
  const fsize = file.size;
  const mime = file.type;
  console.log(`file name: ${fname}, file size: ${fsize}, MIME type: ${mime}`);
});
