import { useReducer } from 'react';

import cityIndexT from '../shared/types/cityIndex';
import cityIndexReducer from '@/reducers/cityIndexReducer';

const useCityIndex = (state: cityIndexT) => {
  const [currentCity, dispatchCity] = useReducer(cityIndexReducer, state);

  return [currentCity, dispatchCity];
};

export default useCityIndex;
