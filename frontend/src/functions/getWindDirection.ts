const getWindDirection = (deg: number | undefined): string => {
  deg = deg ?? 0;
  let directions = [
    'N',
    'NE',
    'E',
    'SE',
    'S',
    'SW',
    'W',
    'NW',
  ];

  deg += 22.5;

  if (deg < 0) deg = 360 - (Math.abs(deg) % 360);
  else deg = deg % 360;

  let w = deg / 45;
  return `${directions[w]}`;
};

export default getWindDirection