const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const images = [...gallery.querySelectorAll('img')];
const close = document.getElementById('close');
let currentIndex = 0;

const showImage = () => {
  modal.style.display = 'flex';
  modalImg.src = images[currentIndex].src;
}

gallery.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    currentIndex = Number(e.target.dataset.index);
    showImage();
  }
});

close.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target === modal) modal.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
  if (modal.style.display === 'flex') {
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex+1)%images.length;
      showImage();
    }
    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex-1+images.length)%images.length;
      showImage();
    }
  }
});

// 画像の右クリックを無効にする
modalImg.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});
for (let el of images) {
  el.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
}
