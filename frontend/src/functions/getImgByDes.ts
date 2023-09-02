const getImgByDes = (description: string | undefined): string =>
  ({
    'clear sky': 'http://openweathermap.org/img/wn/01d@2x.png',
    'few clouds': 'http://openweathermap.org/img/wn/02d@2x.png',
    'scattered clouds': 'http://openweathermap.org/img/wn/03d@2x.png',
    'broken clouds': 'http://openweathermap.org/img/wn/04d@2x.png',
    'shower rain': 'http://openweathermap.org/img/wn/09d@2x.png',
    rain: 'http://openweathermap.org/img/wn/10d@2x.png',
    thunderstorm: 'http://openweathermap.org/img/wn/11d@2x.png',
    snow: 'http://openweathermap.org/img/wn/13d@2x.png',
  })[description ?? ''] ?? `http://openweathermap.org/img/wn/50d@2x.png`;

export default getImgByDes