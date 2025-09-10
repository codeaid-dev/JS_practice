// const checkbox = document.getElementById('toggle');
// const img = document.getElementById('myImage');
const checkbox = document.querySelector('#toggle');
const img = document.querySelector('#myImage');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
  }
});
