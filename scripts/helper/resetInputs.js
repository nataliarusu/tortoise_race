import { removeError } from './errorHandler.js';

export const resetInputs = (...inputs) => {
  for (const input of inputs) {
    if (input.classList.contains('error')) {
      removeError(input);
    };
    input.value = '';
  };
};
