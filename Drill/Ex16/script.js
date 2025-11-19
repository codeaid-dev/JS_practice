const headers = document.querySelectorAll(".header");
const contents = document.querySelectorAll(".content");

for (let i=0; i<headers.length; i++) {
  headers[i].addEventListener('click', () => {
    contents.forEach(c => c.classList.remove("active"));
    contents[i].classList.add("active");
  });
}
