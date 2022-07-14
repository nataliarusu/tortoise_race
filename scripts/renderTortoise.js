import { displayProperties } from './displayProperties.js';
import { LineGenerator } from './helper/lineGenerator.js';

export const renderTortoise = (field, tortoise) => {
  tortoise.render();
  const tortoiseLine = new LineGenerator(tortoise.DOMel);
  tortoise.DOMel.addEventListener('click', () => {
    displayProperties(tortoise);
  });
  field.append(tortoiseLine);
};
