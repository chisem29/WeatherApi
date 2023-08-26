import axios from 'axios';

import locCountryI from '@/shared/interfaces/locCountry';
import weatherRepI from '@/shared/interfaces/weatherRep';

class WeatherWeekService {
  lang?: string;
  mode?: 'json' | 'xml';
  apiKey: string;

  public constructor(apiKey: string, mode?: 'json' | 'xml', lang?: string) {
    this.lang = lang;
    this.mode = mode;
    this.apiKey = apiKey;
  }

  public async getData<T = number>(lat: T, lon: T) {
    const { data } = await axios<weatherRepI>({
      method: 'POST',
      url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}`,
    });

    return data;
  }

  public async getLoc<T = string>(city: T) {
    const { data } = await axios<Array<locCountryI>>({
      method: 'GET',
      url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${this.apiKey}`,
    });

    return data;
  }
}

export default WeatherWeekService;
