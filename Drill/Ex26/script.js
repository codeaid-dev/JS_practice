document.querySelectorAll('div').forEach(div => {
  div.addEventListener('click', (event)=> {
    event.target.style.display = event.target.dataset.active === 'true' ? 'block' : 'none';
  });
});
