import { useReducer, useState } from 'react';
import cityT from '@/shared/types/city';

const useCity = (state: cityT) => {
  const [currentCity, setCity] = useState<cityT>(state)

  return [currentCity, setCity];
};

export default useCity;
