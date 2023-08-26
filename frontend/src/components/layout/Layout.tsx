import { FC, PropsWithChildren } from 'react';

import styles from './Layout.module.sass';
import carouselDataI from '@/shared/interfaces/carouselData';

const Layout: FC<PropsWithChildren<Pick<carouselDataI, "city">>> = ({ children, city }) => {

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
