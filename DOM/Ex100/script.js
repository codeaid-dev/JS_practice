window.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  let slides = [...document.querySelectorAll('.slide')];

  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  const slideWidth = slides[0].offsetWidth + 20;

  // Clone
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.dataset.clone = 'first';
  lastClone.dataset.clone = 'last';

  carousel.appendChild(firstClone);
  carousel.insertBefore(lastClone, slides[0]);

  slides = [...document.querySelectorAll('.slide')];

  let index = 1;
  carousel.style.transform = `translateX(${-slideWidth * index}px)`;
  carousel.style.transition = 'transform .3s';

  function moveTo(i) {
    carousel.style.transition = 'transform .3s';
    carousel.style.transform = `translateX(${-slideWidth * i}px)`;
  }

  carousel.addEventListener('transitionend', () => {
    const allSlides = document.querySelectorAll('.slide');

    // ここが重要：undefined チェック！
    if (!allSlides[index]) {
      return; // 何もせず終了
    }

    // Clone 判定
    if (allSlides[index].dataset.clone === 'first') {
      carousel.style.transition = 'none';
      index = 1;
      carousel.style.transform = `translateX(${-slideWidth * index}px)`;
    }

    if (allSlides[index].dataset.clone === 'last') {
      carousel.style.transition = 'none';
      index = slides.length - 2;
      carousel.style.transform = `translateX(${-slideWidth * index}px)`;
    }
  });

  prev.addEventListener('click', () => {
    index--;
    moveTo(index);
  });

  next.addEventListener('click', () => {
    index++;
    moveTo(index);
  });
});