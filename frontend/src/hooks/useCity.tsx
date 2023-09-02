import { useContext, useMemo } from 'react';

import cities from '../data/cities.json';

import cityT from '@/shared/types/city';
import { CityContext } from '../providers/ContextProvider';

const useCity = () : { city : cityT } => {
  const { cityIndex }= useContext(CityContext);
  const city = useMemo(() => cities[cityIndex], [cityIndex]) as cityT;

  return { city };
};

export default useCity;
