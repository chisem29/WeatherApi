import { FC, PropsWithChildren, useContext } from 'react';

import styles from './Layout.module.sass';
import { Context } from '../../providers/ContextProvider';
import useCity from '../../hooks/useCity';
import cityIndexT from '@/shared/types/cityIndex';
import carouselDataI from '@/shared/interfaces/carouselData';

const Layout: FC<PropsWithChildren> = ({
  children,
}) => {

  const { cityIndex } = useContext(Context)

  const [city] = useCity(cityIndex as cityIndexT)

  return (
    <div
      className={`
        ${styles.layout} 
        ${styles[city.toString()]}
        relative
        h-full
        w-full
        max-w-screen
      `}
    >
      {children}
    </div>
  );
};

export default Layout;
