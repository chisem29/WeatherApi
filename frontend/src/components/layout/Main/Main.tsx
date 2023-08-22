import { FC, PropsWithChildren } from 'react';

import styles from './Main.module.sass';

const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main
      className={`
        ${styles.appMain}
         backdrop-blur-xl
         h-full
         w-full
         flex
         justify-center
         items-center
         py-[5%]
         px-[8%]
      `}
    >
      <div
        className={`
          container 
          bg-black h-[90%]
          flex lg:flex-col flex-row
        `}
      >
        {children}
      </div>
    </main>
  );
};

export default Main;
