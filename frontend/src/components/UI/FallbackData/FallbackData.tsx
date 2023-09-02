import { FC, PropsWithChildren } from 'react';

import queryIsLoading from '@/shared/interfaces/queryIsLoading';
import styles from "./FallbackData.module.sass"

const FallbackData: FC<PropsWithChildren<queryIsLoading>> = ({
  isLoading,
  children,
}) => {
  return (
    <>
      {isLoading ? (
        <div className={`relative ${styles.loaderContainer}`}>
          <div className={styles.loader}></div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default FallbackData;
