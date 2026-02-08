const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const mojisuu = document.querySelectorAll('[name="mojisuu"]');
const correct = [];
let start;
let hides = 0;

const question = document.getElementById('question');
document.getElementById('create-q').addEventListener('click', () => {
  correct.splice(0);
  let q = alphabet;

  mojisuu.forEach((element) => {
    if (element.checked) hides = Number(element.value);
  });

  for (let i=0; i<hides; i++) {
    const index = Math.floor(Math.random()*q.length);
    correct.push(q[index]);
    q = q.replace(q[index], '');
  }
  question.textContent = q;
  const result = document.getElementById('result');
  result.style.color = 'black';
  result.textContent = '';
  start = performance.now();
  console.log(q);
  console.log(correct);
});

document.getElementById('judge').addEventListener('click', () => {
  const result = document.getElementById('result');
  let answers = document.getElementById('answer').value.split(',');
  answers = answers.map((item) => item.toUpperCase());
  console.log(answers);
  if (correct.length === answers.length) {
    let check = 0;
    correct.forEach((d, i) => {
      if (answers.includes(d)) {
        check += 1;
        answers = answers.filter((item) => item !== d);
      }
    });
    if (correct.length === check) {
      const end = performance.now();
      result.style.color = 'blue';
      result.textContent = `正解！(経過時間:${Math.floor((end - start)/1000)}秒)`;
    } else {
      result.style.color = 'red';
      result.textContent = `不正解（正解：${correct}）`;
    }
  } else {
    result.style.color = 'red';
    result.textContent = `不正解（正解：${correct}）`;
  }
});
