import { FC, PropsWithChildren, useContext } from 'react';

import styles from './Carousel.module.sass';

import useCity from '../../../hooks/useCity';
import { CityContext } from '../../../providers/ContextProvider';
import carouselDataI from '@/shared/interfaces/carouselData';

const Carousel: FC<PropsWithChildren> = ({ children }) => {
  const { cityIndex, setIndex } = useContext(CityContext)
  const [city] = useCity(cityIndex);

  console.log(cityIndex);

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
      `}
    >
      {children}
      <div className={`w-full absolute ${styles.arrowGroup}`}>
        <span
          onClick={() => {
            setIndex({ type: 'DECREMENT' });
            console.log(cityIndex);
          }}
          id="leftArrow"
          className={`absolute left-10 max-lg:left-[5px] rotate-180 cursor-pointer`}
        >
          <img src="https://img.icons8.com/?size=1x&id=61&format=png" />
        </span>
        <span
          id="rightArrow"
          className={`absolute right-10 max-lg:right-[5px] cursor-pointer`}
        >
          <img src="https://img.icons8.com/?size=1x&id=61&format=png" />
        </span>
      </div>
    </div>
  );
};

export default Carousel;
