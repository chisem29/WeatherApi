const toCFromKelvin = (temp: number): string => {
  const resultTemp = Math.floor(temp - 273.15);
  return `${resultTemp >= 0 ? '+' : '-'}${resultTemp}°`;
};

export default toCFromKelvin
