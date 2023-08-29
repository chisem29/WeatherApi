import { useMemo } from 'react';

import cities from '../data/cities.json';
import cityIndexT from '@/shared/types/cityIndex';

const useCity = (cityIndex: cityIndexT) => {
  const city = useMemo(() => cities[cityIndex], [cityIndex]);

  return { city };
};

export default useCity;
