import { FC, PropsWithChildren, useContext, useEffect } from 'react';

import styles from './Layout.module.sass';

import { CityContext } from '../../providers/ContextProvider';
import useCity from '../../hooks/useCity';
import cityIndexT from '@/shared/types/cityIndex';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { cityIndex } = useContext(CityContext);

  const { city } = useCity(cityIndex as cityIndexT);

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
