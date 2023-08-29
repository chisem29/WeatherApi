import { CityContext } from './../providers/ContextProvider';
import { useContext } from 'react';
import useCity from './useCity';
import useLocCity from './useLocCity';
import cityT from '@/shared/types/city';
import useWeatherReport from './useWeatherReport';
import useRefetchByCity from './useRefetchByCity';

const useCombineReport = () => {
  const { cityIndex } = useContext(CityContext);

  const { city } = useCity(cityIndex);

  const { data: loc, refetch: refetchLoc } = useLocCity(city as cityT);

  const { data: weatherRep, refetch: refetchRep } = useWeatherReport({
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

  return { weatherRep, city };
};

export default useCombineReport;
