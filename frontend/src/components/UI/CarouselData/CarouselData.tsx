import { FC, useState } from 'react';

import useLocCity from '../../../hooks/useLocCity';
import carouselDataI from '@/shared/interfaces/carouselData';

import styles from './CarouselData.module.sass';
import useWeatherReport from '../../../hooks/useWeatherReport';

import useCity from '../../../hooks/useCity';
import cityT from '@/shared/types/city';

const CarouselData: FC<carouselDataI> = ({
  cityIndex,
  setIndex,
}) => {

  const [city] = useCity(cityIndex)

  const { data: loc, refetch } = useLocCity((city as cityT));

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
        relative
      `}>
      {city}
      {rep?.at(0)?.dt}
      <div
        className={`w-full absolute ${styles.arrowGroup}`}>
        <span
          onClick={setIndex}
          id="leftArrow"
          className={`absolute left-10 max-lg:left-[5px] rotate-180 cursor-pointer`}>
          <img src="https://img.icons8.com/?size=1x&id=61&format=png"/>
        </span>
        <span
          onClick={setIndex}
          id="rightArrow"
          className={`absolute right-10 max-lg:right-[5px] cursor-pointer`}>
          <img src="https://img.icons8.com/?size=1x&id=61&format=png"/>
        </span>
      </div>
    </div>
  );
};

export default CarouselData;
