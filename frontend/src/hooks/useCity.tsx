import { useReducer } from 'react';
import cityT from '@/shared/types/city';

const useCity = (state: cityT) => {
  const [currentCity, setCity] = useReducer(
    (state: cityT, action: { payload: any; type: string }) => {
      return state;
    },
    state,
  );

  return [currentCity, setCity];
};

export default useCity;
