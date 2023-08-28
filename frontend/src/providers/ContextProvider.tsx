import { FC, PropsWithChildren, createContext } from 'react';
import carouselDataI from '@/shared/interfaces/carouselData';

import cityIndexReducer from '../reducers/cityIndexReducer';
import cityIndexT from '@/shared/types/cityIndex';
import useCityIndex from '../hooks/useCityIndex';

export const Context = createContext({
  cityIndex: 0 as cityIndexT,
  setIndex: cityIndexReducer,
});

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { cityIndex, setIndex } = useCityIndex(0);

  return (
    <Context.Provider value={{ cityIndex, setIndex } as carouselDataI}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;