export function convertMsToDays(ms) {
  const oneDay = 1000 * 60 * 60 * 24;
  const days = Math.floor(ms / oneDay);
  return days;
}
