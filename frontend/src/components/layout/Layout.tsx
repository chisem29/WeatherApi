import { FC, PropsWithChildren } from 'react';

import styles from './Layout.module.sass';

import useCity from '../../hooks/useCity';

const Layout: FC<PropsWithChildren> = ({ children }) => {

  const { city } = useCity();

  return (
    <div
      className={`
        ${styles.layout} 
        relative
        h-screen
        min-h-screen
        w-full
        max-w-screen
      `}
    >
      <img
        className="absolute w-full h-full object-fill top-0 left-0"
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
    </div>
  );
};

export default Layout;
