export function isLeap(year: number) {
  return year % 4 ? false : year % 100 ? true : !(year % 400);
}
