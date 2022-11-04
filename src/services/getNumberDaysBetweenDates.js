import { convertMsToDays } from './convertMsToDays';

export function getNumberDaysBetweenDates(start, end) {
  const startDate = new Date(start).getTime();
  const msPast = end - startDate;
  return convertMsToDays(msPast);
}
