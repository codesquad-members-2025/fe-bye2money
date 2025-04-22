const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function getMonthEnglishName(monthString) {
  const index = parseInt(monthString, 10) - 1;
  if (index < 0 || index > 11) {
    throw new Error(`Invalid month string: ${monthString}`);
  }
  return monthNames[index];
}
