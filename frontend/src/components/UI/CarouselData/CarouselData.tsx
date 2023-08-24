import { FC } from 'react';

import styles from "./CarouselData.module.sass"

import carouselDataI from '@/shared/interfaces/carouselData';

  const CarouselData: FC<carouselDataI> = ({ city, setCity }) => {

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
