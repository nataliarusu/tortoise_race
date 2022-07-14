import { changeProperties } from './changeTortoiseProps.js';
function getPosition(tortoise) {
  /**if field posititon relative=>
   * element.offsetTop give an element's position with respect to its offsetParent
   *  return tortoise.closest('.field-line').offsetTop; didn't worked for me
   */

  return (
    tortoise.closest('.field-line').getBoundingClientRect().top + window.scrollY
  ); //change top when scrolled +window.scrollY
}

export function displayProperties(tortoise) {
  const container = document.querySelector('.tortoise-info');
  const topPosition = getPosition(tortoise.DOMel) + 'px';
  container.style.top = topPosition;
  container.classList.add('visible');
  container.querySelector('h3').innerHTML = tortoise.name;
  container.querySelector('.color-display').style.background = tortoise.color;
  container.querySelector('[data-tortoise-info-color]').innerHTML =
    tortoise.color;
  container.querySelector('[data-tortoise-info-speed]').innerHTML =
    tortoise.speed;
  container.querySelector('.edit').addEventListener('click', () => {
    container.classList.remove('visible');
    changeProperties(tortoise, topPosition);
  });
  container.querySelector('.close-info').addEventListener('click', () => {
    container.classList.remove('visible');
  });
}
