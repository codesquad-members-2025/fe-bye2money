export function getFormatDateToString(date) {
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error('유효한 Date 객체를 전달해주세요.');
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
}

// example : "2025-04-22T13:00:00Z"
export function getTimestamp(date) {
  return date.toISOString();
}

export function getYearMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return { year, month };
}

export function isSameYearMonth(currentYear, currentMonth, targetDate) {
  const date = new Date(targetDate);
  return (
    date.getFullYear() === currentYear && date.getMonth() + 1 === currentMonth
  );
}

export function isValidYear(value) {
  if (typeof value !== 'string') return false;

  const number = parseInt(value, 10);
  return !isNaN(number) && number >= 1000 && number <= 9999;
}

export function isValidMonth(value) {
  if (typeof value !== 'string') return false;

  const number = parseInt(value, 10);
  return !isNaN(number) && number >= 1 && number <= 12;
}
