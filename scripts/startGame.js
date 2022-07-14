import { finishGame } from './finishGame.js';

export const startGame = (field, tortoises, startBtn) => {
  document.querySelector('.tortoise-info').classList.remove('visible');
  document.querySelector('.change-tortoise-props').classList.remove('visible');
  field.DOMel.style['pointer-events'] = 'none';
  let intervalId; //setInterval returns a value (returns a numeric, non-zero number that identifies the created timer),
  // will ref to it in clearInterval

  field.width = document.documentElement.getBoundingClientRect().right;
  intervalId = setInterval(() => {
    for (const tortoise of tortoises) {
      if (!tortoise.completedJourney) {
        //when reset I need to put completeJourney to false!
        tortoise.move();
      }
    }
    if (field.result.length === tortoises.length) {
      clearInterval(intervalId);
      finishGame(field.result, tortoises, startBtn);
      field.DOMel.style['pointer-events'] = 'auto';
    }
  }, 100);
};
