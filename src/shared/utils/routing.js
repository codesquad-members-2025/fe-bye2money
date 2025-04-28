export function buildUrlWithPage(year, month, page) {
  const paddedMonth = String(month).padStart(2, '0');
  return `/${page}/${year}/${paddedMonth}`;
}

export function getActiveTabFromPath(pathname) {
  return pathname.split('/').filter(Boolean)[0];
}
