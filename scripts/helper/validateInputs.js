import { displayError, removeError } from './errorHandler.js';

export const validateName = (name, el) => {
  const isValid = name.trim().length > 1;
  if (!isValid) {
    displayError(el, 'name', ' at least 2 characters long');
  } else {
    removeError(el);
  }
  return isValid;
};

export const validateColor = (color, el) => {
  const isValid = CSS.supports('background', color);
  if (!isValid) {
    displayError(el, 'color', 'a valid color value');
  } else {
    removeError(el);
  }
  return isValid;
};

export const validateSpeed = (speed, el) => {
  if (!speed) {
    //if 0 or undefined
    displayError(el, 'speed', 'more than 0');
    return false;
  } else {
    removeError(el);
    return true;
  }
};
