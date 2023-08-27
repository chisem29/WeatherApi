import { useQuery } from '@tanstack/react-query';

import WeatherWeekService from '../services/weatherWeek.service';
import locCountryI from '../shared/interfaces/locCountry';

const weatherWeekService = new WeatherWeekService(
  'f227fe6641bae569ca6d28d071d27db3',
);

const useWeatherReport = ({ lat, lon }: Pick<locCountryI, 'lat' | 'lon'>) => {
  return useQuery({
    queryKey: ['weather', 'week'],
    queryFn: () => weatherWeekService.getData<typeof lat>(lat, lon),
    select: ({ list }) => list,
    initialData: {
      list: [],
      cod: 'no-cod',
      cnt: 0,
      message: 'no-info',
      city: undefined,
    },
  });
};

export default useWeatherReport;
