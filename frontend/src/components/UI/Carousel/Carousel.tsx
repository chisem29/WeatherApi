import { FC, PropsWithChildren, useContext } from 'react';

import styles from './Carousel.module.sass';

import useCity from '../../../hooks/useCity';
import { CityContext } from '../../../providers/ContextProvider';

const Carousel: FC<PropsWithChildren> = ({ children }) => {
  const { cityIndex, setIndex } = useContext(CityContext);
  const { city } = useCity();

  return (
    <div
      className={`
        ${styles.carouselData}
        flex 
        justify-center 
        items-center 
        py-5 
        basis-9/12 
        max-lg:h-full 
        w-full
        relative
        max-md:overflow-y-scroll
      `}
    >
      <img
        className="absolute w-full h-full object-cover top-0 left-0 z-0"
        src={
          {
            Moscow:
              'https://avatars.mds.yandex.net/i?id=6e09fbafd1f59c27d2df6b7773f3598660c0e615-10071889-images-thumbs&n=13',
            NewYourk:
              'https://avatars.mds.yandex.net/i?id=e068f3bfdd027fc1cf8dcd2d0faa912bc4fab05e-9989050-images-thumbs&n=13',
            Paris:
              'https://avatars.mds.yandex.net/i?id=37a8180d607b7863833924e93f5c84e4a11da0b5-9203641-images-thumbs&n=13',
            Tokyo:
              'https://avatars.mds.yandex.net/i?id=de6bb2b5995d4ce1ac7565b90c7dc7a705344ced-9100075-images-thumbs&n=13',
          }[city]
        }
      />
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
