export function formatDate(value) {
  if (!value) return '';
  const numbersOnly = value.replace(/\D/g, '');

  const year = numbersOnly.slice(0, 4);
  const month = numbersOnly.slice(4, 6);
  const day = numbersOnly.slice(6, 8);

  let result = year;
  if (month) result += '.' + month;
  if (day) result += '.' + day;

  return result;
}
