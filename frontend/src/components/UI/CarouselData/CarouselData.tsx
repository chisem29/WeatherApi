import { FC, PropsWithChildren } from 'react';

import useLocCity from '../../../hooks/useLocCity';
import carouselDataI from '@/shared/interfaces/carouselData';

import styles from './CarouselData.module.sass';
import useWeatherReport from '../../../hooks/useWeatherReport';
import SupsensData from '../SupsensData/SupsensData';
import Carousel from '../Carousel/Carousel';

const CarouselData: FC<PropsWithChildren<carouselDataI>> = ({ city, setCity, children }) => {
  const { data: loc, refetch } = useLocCity({ city: city });

  const {
    isError,
    isLoading,
    data: rep,
  } = useWeatherReport({
    lat: Number(loc?.at(0)),
    lon: Number(loc?.at(1))
  });

  return (
    <SupsensData isLoading={isLoading} isError={isError}>
      <Carousel city={city} list={rep}/>
    </SupsensData>
  );
};

export default CarouselData;
