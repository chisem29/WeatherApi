import { useQuery } from '@tanstack/react-query';

import WeatherWeekService from '../services/weatherWeek.service';
import cityT from '@/shared/types/city';

const weatherWeekService = new WeatherWeekService(
  import.meta.env.VITE_ID_TOKEN,
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
