export function LineGenerator(tortoise) {
  const fieldLine = document.createElement('div');
  fieldLine.classList.add('field-line');
  fieldLine.append(tortoise);
  return fieldLine;
};
