import { FC, PropsWithChildren, useContext } from 'react';

import styles from './Carousel.module.sass';

import useCity from '../../../hooks/useCity';
import { CityContext } from '../../../providers/ContextProvider';

const Carousel: FC<PropsWithChildren> = ({ children }) => {
  const { cityIndex, setIndex } = useContext(CityContext);
  const { city } = useCity(cityIndex);

  return (
    <div
      className={`
        ${styles.carouselData} ${styles[city]} 
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
      <div
        className={`w-full h-full flex items-center justify-center absolute ${styles.arrowGroup}`}
      >
        <span
          onClick={() => {
            setIndex(
              cityIndex > 0
                ? { type: 'DECREMENT' }
                : { type: 'TOLENGTH', payload: 3 },
            );
          }}
          id="leftArrow"
          className={`
            absolute 
            transition-transform 
            ease
            delay-100 
            hover:scale-105 
            hover:opacity-95
            lg:left-10 
            md:left-5 
            max-md:top-[5px] 
            rotate-180 
            max-md:rotate-[-90deg] 
            invert-[100%]
            opacity-80
            cursor-pointer
          `}
        >
          <img src="https://img.icons8.com/?size=1x&id=61&format=png" />
        </span>
        <span
          onClick={() => {
            setIndex(
              cityIndex < 3 ? { type: 'INCREMENT' } : { type: 'TOZERO' },
            );
          }}
          id="rightArrow"
          className={`
            absolute 
            transition-transform 
            ease
            delay-100 
            hover:scale-105 
            hover:opacity-95
            lg:right-10 
            md:right-5 
            max-md:bottom-[5px] 
            max-md:rotate-90 
            cursor-pointer
            invert-[100%]
            opacity-80
          `}
        >
          <img src="https://img.icons8.com/?size=1x&id=61&format=png" />
        </span>
      </div>
    </div>
  );
};

export default Carousel;
