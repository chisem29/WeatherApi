
import useCity from './useCity';
import useLocCity from './useLocCity';
import useWeatherReport from './useWeatherReport';
import useRefetchByCity from './useRefetchByCity';

import cityT from '@/shared/types/city';

const useCombineReport = () => {

  const { city } = useCity();

  const { data: loc, refetch: refetchLoc } = useLocCity(city as cityT);

  const { data: weatherRep, refetch: refetchRep, isLoading, isError } = useWeatherReport({
    lat: loc?.at(0) ?? 0,
    lon: loc?.at(1) ?? 0,
  });

  const { refetchByCity: refetchBiCityLoc } = useRefetchByCity({
    refetch: refetchLoc,
    city: city as cityT,
  });
  const { refetchByCity: refetchBiCityRep } = useRefetchByCity({
    refetch: refetchRep,
    city: city as cityT,
  });

  refetchBiCityLoc();
  refetchBiCityRep();

  return { weatherRep, city, isLoading, isError };
};

export default useCombineReport;
