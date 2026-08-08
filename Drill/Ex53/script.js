  const state = {
    step: 1,
    name: '',
    email: ''
  };

  const steps = document.querySelectorAll('.step');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const confirm = document.getElementById('confirm');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const error = document.getElementById('error');

  const render = () => {
    steps.forEach(step => {
      step.classList.toggle(
        'active',
        Number(step.dataset.step) === state.step
      );
      next.textContent = state.step === 3 ? '確認' : '次へ';
      if (state.step === 1) prev.style.display = 'none';
      else prev.style.display = 'inline';
    });

    name.value = state.name;
    email.value = state.email;
    confirm.textContent = `
      名前: ${state.name}
      メール: ${state.email}
    `;
  }

  name.addEventListener('input', (event) => {
    state.name = event.target.value;
  });

  email.addEventListener('input', (event) => {
    state.email = event.target.value;
  });

  next.addEventListener('click', () => {
    if (state.step < 3) {
      if (state.step === 1 && name.value.length === 0) {
        error.textContent = '入力してください';
      } else if (state.step === 2 && email.value.length === 0) {
        error.textContent = '入力してください';
      } else {
        state.step++;
        error.textContent = '';
      }
    }
    render();
  });

  prev.addEventListener('click', () => {
    if (state.step > 1) {
      state.step--;
    }
    error.textContent = '';
    render();
  });

  render();
