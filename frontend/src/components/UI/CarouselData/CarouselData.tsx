import { FC } from 'react';

import useLocCity from '../../../hooks/useLocCity';
import carouselDataI from '@/shared/interfaces/carouselData';

import styles from "./CarouselData.module.sass"
import useWeatherReport from '../../../hooks/useWeatherReport';


const CarouselData: FC<carouselDataI> = ({ city, setCity }) => {

  const { data: loc } = useLocCity({ city: city })

  const { data: rep, refetch } = useWeatherReport({ lat: loc[0], lon: loc[1] })

  console.log(rep)

  return (
    <div
      className={`
        ${styles.carouselData} ${styles[city.toString()]} 
        flex 
        justify-center 
        items-center 
        py-5 
        basis-9/12 
        max-lg:h-full 
        w-full
      `}>
      {city.toString().toUpperCase()}
    </div>
  );
};

export default CarouselData;
