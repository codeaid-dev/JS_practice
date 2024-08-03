let colors = ['black', 'red', 'green', 'blue', 'yellow'];
let color = document.querySelector('.color-box');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let position = 0;

let changeSlide = (num)=>{
  if (position + num == 0) {
    prev.disabled = true;
    next.disabled = false;
  } else if (position + num == colors.length-1) {
    next.disabled = true;
    prev.disabled = false;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
  //if (position + num >= 0 && position + num < colors.length) {
    position += num;
    color.style = "background-color:"+colors[position]+";";
  //}
}

color.style = "background-color:"+colors[position]+";";
prev.disabled = true;
next.addEventListener('click', ()=>{
  changeSlide(1);
});

prev.addEventListener('click', ()=>{
  changeSlide(-1);
});
