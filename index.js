import { generateTurtoises } from './scripts/helper/generateTortoises.js';
import { renderTortoise } from './scripts/renderTortoise.js';
import { field } from './scripts/field.js';
import { startGame } from './scripts/startGame.js';
import { Tortoise } from './scripts/Tortoise.js';
import { resetInputs } from './scripts/helper/resetInputs.js';
import './scripts/onAddTortoise.js'; //check fields
import * as validator from './scripts/helper/validateInputs.js';

const headerAddButton = document.querySelector('#add-your-tortoise-btn');
const addTortoiseBlock = document.querySelector('#new-tortoise--container');
const backdrop = document.getElementById('backdrop');
const newTortoiseForm = document.querySelector('#new-tortoise--form');
const newTortoiseInputEls = Array.from(
  newTortoiseForm.querySelectorAll('input')
);
const newTortoiseCancelBtn = document.querySelector(
  '#new-tortoise--cancel-btn'
);
const startGameBtn = document.querySelector('#start-game-btn');
const runnersList = document.querySelector('#runners');

const toggleBackDrop = () => {
  backdrop.classList.toggle('visible');
};

const showTortoiseForm = () => {
  addTortoiseBlock.classList.add('visible'); 
  toggleBackDrop();
};

const hideTortoiseForm = () => {
  toggleBackDrop();
  addTortoiseBlock.classList.remove('visible');
  resetInputs(...newTortoiseInputEls);
  document.querySelector('#tortoise-name').innerHTML = '';
};

const displayNumberOfRunners = (animals) => {
  document.querySelector('#runners-container span').innerHTML = animals.length;
};

const addToRunners = (el) => {
  const li = document.createElement('li');
  li.innerHTML = `Line ${tortoises.length}: ${el.name}`;
  runnersList.append(li);
};

/*create and render computer tortoises*/
const generateSpeed = () => {
  return Math.floor(Math.random() * 10 + 1); //from 1 to 10
};
const tortoises = generateTurtoises(
  3,
  ['Casper', 'Flippy', 'Leonardo'],
  [generateSpeed(), generateSpeed(), generateSpeed()]
);
for (const tortoise of tortoises) {
  renderTortoise(field.DOMel, tortoise);
}
const displayRunners = (animals) => {
  for (let i = 0; i < animals.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = `Line ${i + 1}: ${animals[i].name}`;
    runnersList.append(li);
  }
};
displayRunners(tortoises);
displayNumberOfRunners(tortoises);
/*END create and render computer tortoises*/

const startGameHandler = () => {
  startGameBtn.setAttribute('disabled', true);
  startGameBtn.innerHTML = 'RUN!';
  startGameBtn.style.animation = 'updown-slide-in 1s ease-out';
  startGame(field, tortoises, startGameBtn);
};

const submitHandler = (ev) => {
  ev.preventDefault();
  const name = ev.target.querySelector('#new-tortoise--name').value; //I checked for trim() onAddTortioise
  const speed = Number(ev.target.querySelector('#new-tortoise--speed').value);
  const color = ev.target.querySelector('#new-tortoise--color').value;

  const validName = validator.validateName(
    name,
    ev.target.querySelector('#new-tortoise--name')
  );
  const validColor = validator.validateColor(
    color,
    ev.target.querySelector('#new-tortoise--color')
  );
  const validSpeed = validator.validateSpeed(
    speed,
    ev.target.querySelector('#new-tortoise--speed')
  );

  if (validColor && validName && validSpeed) {
    const tortoise = new Tortoise(name, speed, color);
    tortoises.push(tortoise);
    renderTortoise(field.DOMel, tortoise);
    hideTortoiseForm();
    displayNumberOfRunners(tortoises);
    addToRunners(tortoise);
  }
};

headerAddButton.addEventListener('click', showTortoiseForm);
startGameBtn.addEventListener('click', startGameHandler);
newTortoiseForm.addEventListener('submit', submitHandler);
newTortoiseCancelBtn.addEventListener('click', hideTortoiseForm);
backdrop.addEventListener('click', hideTortoiseForm);

