import { FC, PropsWithChildren, createContext } from 'react';
import carouselDataI from '@/shared/interfaces/carouselData';

import cityIndexT from '@/shared/types/cityIndex';
import useCityIndex from '../hooks/useCityIndex';

export const CityContext = createContext({
  cityIndex: 0 as cityIndexT,
  setIndex: null
});

const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { cityIndex, setIndex } = useCityIndex(0);

  return (
    <CityContext.Provider value={{ cityIndex, setIndex } as carouselDataI}>
      {children}
    </CityContext.Provider>
  );
};

export default ContextProvider;
