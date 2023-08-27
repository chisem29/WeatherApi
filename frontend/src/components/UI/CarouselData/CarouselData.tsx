import { FC, PropsWithChildren } from 'react';

import useLocCity from '../../../hooks/useLocCity';
import carouselDataI from '@/shared/interfaces/carouselData';

import styles from './CarouselData.module.sass';
import useWeatherReport from '../../../hooks/useWeatherReport';

const CarouselData: FC<carouselDataI> = ({
  city,
  setCity,
}) => {
  const { data: loc, refetch } = useLocCity({ city: city });

  const { data: rep } = useWeatherReport({
    lat: Number(loc?.at(0)),
    lon: Number(loc?.at(1)),
  });

  return (
    <div
      className={`
        ${styles.carouselData} ${styles[String(city)]} 
        flex 
        justify-center 
        items-center 
        py-5 
        basis-9/12 
        max-lg:h-full 
        w-full
      `}>
      {city}
      {rep?.at(0)?.dt}
    </div>
  );
};

export default CarouselData;
