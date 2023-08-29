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
      <div className={`w-full h-full flex items-center justify-center absolute ${styles.arrowGroup}`}>
        <span
          onClick={() => {
            setIndex(
              cityIndex > 0
                ? { type: 'DECREMENT' }
                : { type: 'TOLENGTH', payload: 3 },
            );
          }}
          id="leftArrow"
          className={`absolute lg:left-10 md:left-5 max-md:top-[5px] rotate-180 cursor-pointer`}
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
          className={`absolute lg:right-10 md:right-5 max-md:bottom-[5px] cursor-pointer`}
        >
          <img src="https://img.icons8.com/?size=1x&id=61&format=png" />
        </span>
      </div>
    </div>
  );
};

export default Carousel;
