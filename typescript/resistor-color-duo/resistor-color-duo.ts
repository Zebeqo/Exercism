export function decodedValue(colors: string[]): number {
  const colorMap = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  return colors
    .slice(0, 2)
    .reduce((previousValue, currentValue, currentIndex, array) => {
      return (
        previousValue +
        colorMap[currentValue as keyof typeof colorMap] *
          10 ** (array.length - currentIndex - 1)
      );
    }, 0);
}
