export default function buildUrlWithPage(year, month, page) {
  const paddedMonth = String(month).padStart(2, '0');
  return `/${page}/${year}/${paddedMonth}`;
}
