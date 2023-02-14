export function decodedResistorValue(colors: string[]) {
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

  const value =
    colors.slice(0, 2).reduce((previousValue, currentValue, currentIndex) => {
      return (
        previousValue +
        colorMap[currentValue as keyof typeof colorMap] *
          10 ** (1 - currentIndex)
      );
    }, 0) *
    10 ** colorMap[colors[2] as keyof typeof colorMap];

  return value >= 1000 ? `${value / 1000} kiloohms` : `${value} ohms`;
}
