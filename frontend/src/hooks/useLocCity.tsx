import { useQuery } from '@tanstack/react-query';

import WeatherWeekService from '../services/weatherWeek.service';
import cityT from '@/shared/types/city';

const weatherWeekService = new WeatherWeekService(
  'f227fe6641bae569ca6d28d071d27db3',
);

const useLocCity = (city: cityT) => {
  return useQuery({
    queryKey: ['weather', 'city'],
    queryFn: () => weatherWeekService.getLoc<typeof city>(city),
    select: ([{ lat, lon }]) => [lat, lon],
    initialData: [],
  });
};

export default useLocCity;
