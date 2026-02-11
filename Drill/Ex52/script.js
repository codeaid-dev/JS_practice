const questions = [];
function createQ() {
  if (questions.length > 0) questions.splice(0);
  for (let i=0; i<3; i++) {
    questions.push(Math.floor(Math.random()*10));
  }
  console.log(questions);
}
createQ();

const other = document.getElementById('other');

document.getElementById('judge').addEventListener('click', () => {
  const strings = document.getElementById('question').children;
  const answers = document.getElementById('answer').children;
  questions.forEach((q, i) => {
    if (answers[i].firstChild.value == q) {
      strings[i].style.color = 'red';
      strings[i].textContent = answers[i].firstChild.value;
      answers[i].firstChild.disabled = true;
    } else if (answers[i].firstChild.value > q) {
      strings[i].style.color = 'black';
      strings[i].textContent = 'LOW';
    } else {
      strings[i].style.color = 'black';
      strings[i].textContent = 'HIGH';
    }
  });
});

document.getElementById('other').addEventListener('click', () => {
  createQ();

  const strings = document.getElementById('question').children;
  const answers = document.getElementById('answer').children;
  for (const element of strings) {
    element.style.color = 'black';
    element.textContent = '?';
  }
  for (const element of answers) {
    element.firstChild.value = '';
    element.firstChild.disabled = false;
  }
});
