import { FC } from 'react';

import styles from "./Carousel.module.sass"
import weatherRepI from '@/shared/interfaces/weatherRep';

const Carousel: FC<Pick<weatherRepI, "city" | "list">> = ({ list, city }) => {

  return (
    <>
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
        `}
      >
        {city}
        {list?.at(0)?.dt}
      </div>
    </>
  );
};

export default Carousel;
