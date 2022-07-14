export const finishGame = (result, tortoises, startBtn) => {
  const closeBtn = document.querySelector('.result-close-btn');
  const resultEL = document.querySelector('#result');
  const backdrop = document.getElementById('backdrop');

  backdrop.classList.add('visible');
  resultEL.classList.add('visible');
  const resultItems = document.querySelector('.result-items');

  function addItem(item, i) {
    const li = document.createElement('li');
    if (i === 0) {
      li.classList.add('winner');
    }
    const span = document.createElement('span');
    const p = document.createElement('p');
    span.innerHTML = i + 1;
    p.innerHTML = item.name;
    li.append(span);
    li.append(p);
    p.style.animation = 'right-slide-in 1s ease-out forwards';
    return li;
  }

  for (let i = 0; i < result.length; i++) {
    const tortoiseScore = addItem(result[i], i);
    resultItems.append(tortoiseScore);
  }
  backdrop.addEventListener('click', () => {
    closeBtn.click();
  });

  closeBtn.addEventListener('click', () => {
    result.splice(0);
    for (const tortoise of tortoises) {
      if (tortoise.DOMel.classList.contains('won')) {
        tortoise.DOMel.classList.remove('won');
      }
      tortoise.leftPosition = 0;
      tortoise.headPosition = 55;
      tortoise.changeSpeed(Math.floor(Math.random() * 10 + 1)); //randomize speed
      tortoise.completedJourney = false;
      tortoise.DOMel.style.left = tortoise.leftPosition;
    }
    resultItems.innerHTML = ''; //clear output
    resultEL.classList.remove('visible');
    backdrop.classList.remove('visible');
    startBtn.disabled = false; //start game again
    startBtn.innerHTML = 'Start game';
  });
};
