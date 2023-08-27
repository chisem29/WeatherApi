import { useReducer, MouseEvent } from 'react';

import cityIndexT from '../shared/types/cityIndex';

const useCityIndex = (state: cityIndexT) => {
  
  const [currentCity, setCity] = useReducer(
    (n: any, e: MouseEvent) => {
      if (e.currentTarget.id[0] === 'r') {
        if (state < 4) {
          return state + 1;
        }
        return 0;
      }
      if (e.currentTarget.id[0] === 'l') {
        if (state > 0) {
          return state - 1;
        }
        return;
      }
    },
    state,
  );
  
  return [currentCity, setCity];
};

export default useCityIndex;
