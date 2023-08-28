import { useReducer } from 'react';

import cityIndexT from '../shared/types/cityIndex';
import cityIndexReducer from '../reducers/cityIndexReducer';

const useCityIndex = (state: cityIndexT) => {
  const [cityIndex, setIndex] = useReducer(cityIndexReducer, state);

  return { cityIndex, setIndex };
};

export default useCityIndex;
