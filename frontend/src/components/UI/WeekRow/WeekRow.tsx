import { FC } from 'react';

import styles from './WeekRow.module.sass';
import useCombineReport from '../../../hooks/useCombineReport';
import WeekElem from '../WeekElem/WeekElem';

const WeekRow: FC = () => {

  const { weatherRep: data, isLoading } = useCombineReport();

  return (
    <div
      className={`
        basis-3/12 
        max-lg:h-full
        lg:w-full
        max-lg:max-w-[50%]
        max-lg:overflow-hidden
        max-lg:min-w-[150px]
        ${styles.weekRow}
      `}
    >
      <ul
        className={`
           list-none
           flex
           lg:flex-row
           w-full
           h-full
           flex-col
           snap-mandatory
           snap-y
           max-lg:overflow-y-scroll
           relative
        `}
      >
        {(data ?? [{}, {}, {}, {}, {}, {}, {}]).slice(0, 7).map(({main, weather, dt_txt}, index) => (
          <WeekElem {...{index, main, weather, dt_txt, isLoading}} />
        ))}
      </ul>
    </div>
  );
};

export default WeekRow;
