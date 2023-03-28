export default () => {
  function formatTemperature(
    temp: number,
    unit: 'fahrenheit' | 'kelvin' | 'celsius' = 'celsius',
  ): string {
    // kelvin celsius, fahrenheit
    const postfix = {
      fahrenheit: '°F',
      kelvin: 'K',
      celsius: 'ºC',
    };

    return `${temp.toFixed(1).split('.')[0]} ${postfix[unit]}`;
  }

  return {formatTemperature};
};
