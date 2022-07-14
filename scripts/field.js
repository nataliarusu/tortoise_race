export const field = {
  DOMel: document.querySelector('[data-field]'),
  width: document.documentElement.getBoundingClientRect().right,
  result: [],
  addToResult: function (tortoise) {
    this.result.push(tortoise);
  },
};
