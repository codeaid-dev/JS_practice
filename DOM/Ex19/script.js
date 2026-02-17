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

gallery.addEventListener('click', (div) => {
  if (div.target.tagName === 'IMG') {
    currentIndex = Number(div.target.dataset.index);
    showImage();
  }
});

close.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', (div) => {
  console.log(div.target);
  if (div.target === modal) modal.style.display = 'none';
});

document.addEventListener('keydown', (doc) => {
  if (modal.style.display === 'flex') {
    if (doc.key === 'ArrowRight') {
      currentIndex = (currentIndex+1)%images.length;
      showImage();
    }
    if (doc.key === 'ArrowLeft') {
      currentIndex = (currentIndex-1+images.length)%images.length;
      showImage();
    }
  }
});

// 画像の右クリックを無効にする
// modalImg.addEventListener('contextmenu', (event) => {
//   event.preventDefault();
// });
// for (let el of images) {
//   el.addEventListener('contextmenu', (event) => {
//     event.preventDefault();
//   });
// }
