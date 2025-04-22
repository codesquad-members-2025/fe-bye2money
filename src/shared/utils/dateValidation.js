function isValidYear(value) {
  if (typeof value !== 'string') return false;

  const number = parseInt(value, 10);
  return !isNaN(number) && number >= 1000 && number <= 9999;
}

function isValidMonth(value) {
  if (typeof value !== 'string') return false;

  const number = parseInt(value, 10);
  return !isNaN(number) && number >= 1 && number <= 12;
}

export { isValidYear, isValidMonth };
