export function getActiveTabFromPath(pathname) {
  return pathname.split('/').filter(Boolean)[0];
}
