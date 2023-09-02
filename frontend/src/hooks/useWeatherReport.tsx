import { useQuery } from '@tanstack/react-query';

import WeatherWeekService from '../services/weatherWeek.service';
import locCountryI from '../shared/interfaces/locCountry';

const weatherWeekService = new WeatherWeekService(
  import.meta.env.VITE_ID_TOKEN,
);

const useWeatherReport = ({ lat, lon }: Pick<locCountryI, 'lat' | 'lon'>) => {
  return useQuery({
    queryKey: ['weather', 'week'],
    queryFn: () => weatherWeekService.getData<typeof lat>(lat, lon),
    select: ({ list }) => list,
  })
};

export default useWeatherReport;
