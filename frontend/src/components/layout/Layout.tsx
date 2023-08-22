import { FC, PropsWithChildren } from 'react';

import styles from './Layout.module.sass';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      {...{
        'data-img': `https://avatars.mds.yandex.net/i?id=e068f3bfdd027fc1cf8dcd2d0faa912bc4fab05e-9989050-images-thumbs&n=13`,
      }}
      className={`
        ${styles.layout} 
        relative
        h-full
        w-full
      `}
    >
      {children}
    </div>
  );
};

export default Layout;
