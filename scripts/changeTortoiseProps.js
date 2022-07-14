import * as validator from './helper/validateInputs.js';
import { removeError } from './helper/errorHandler.js';

const changePropsContainer = document.querySelector('.change-tortoise-props');
const form = changePropsContainer.querySelector('form');
const nameEl = form.querySelector('#Tname');
const colorEl = form.querySelector('#Tcolor');
const speedEl = form.querySelector('#Tspeed');
const exitBtn = changePropsContainer.querySelector('#exit');

let tortoiseObj; //ref to tortoise object from displayProperties

export const changeProperties = (tortoise, topPosition) => {
  document.querySelector('.field').style['pointer-events'] = 'none';
  changePropsContainer.style.top = topPosition;
  nameEl.value = tortoise.name;
  colorEl.value = tortoise.color;
  speedEl.value = tortoise.speed;
  tortoiseObj = tortoise;
  changePropsContainer.classList.add('visible');
};

const saveChanges = (nameEl, colorEl, speedEl, tortoise) => {
  const isValid =
    validator.validateName(nameEl.value, nameEl) &&
    validator.validateColor(colorEl.value, colorEl) &&
    validator.validateSpeed(speedEl.value, speedEl);

  if (isValid) {
    tortoise.changeName(nameEl.value);
    tortoise.changeColor(colorEl.value);
    tortoise.changeSpeed(Number(speedEl.value)); //string
    tortoise.rerender();
    return true;
  }
};

const saveChangesHandler = (ev) => {
  ev.preventDefault();
  const isChanged = saveChanges(nameEl, colorEl, speedEl, tortoiseObj);
  if (isChanged) {
    closeInfoHandler();
  }
};

const closeInfoHandler = () => {
  document.querySelector('.field').style['pointer-events'] = 'auto';
  changePropsContainer.classList.remove('visible');
  removeError(nameEl);
  removeError(colorEl);
  removeError(speedEl);
};

const removeErrorHandler = (ev) => {
  removeError(ev.target);
};

nameEl.addEventListener('focus', removeErrorHandler);
colorEl.addEventListener('focus', removeErrorHandler);
speedEl.addEventListener('focus', removeErrorHandler);
exitBtn.addEventListener('click', closeInfoHandler);
form.addEventListener('submit', saveChangesHandler);
